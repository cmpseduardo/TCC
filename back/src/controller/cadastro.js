const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const uploadUser = require('../middleware/uploadImageOrg');

const prisma = new PrismaClient();

//Todos os usuários ao se cadastrarem serão automáticamente usuários comuns, somente o admnistrador, poderá adicionar novos adms
// O Endpoint de organizadores é o mesmo de cadastro

const createAcesso = async (req, res) => { //OK
  let acesso = await prisma.nivelAcesso.create({
    data: req.body
  });
  res.status(200).json(acesso).end();
}

const updateAcesso = async (req, res) => { //OK
  let acesso = await prisma.nivelAcesso.update({
    where: {
      id: Number(req.params.id)
    },
    data: req.body
  });
  res.status(200).json(acesso).end();
}

const create = async (req, res) => { //ESTÁ OK
  bcrypt.genSalt(10, function (err, salt) {
    if (err == null) {
      bcrypt.hash(req.body.senha, salt, async function (errCrypto, hash) {
        if (errCrypto == null) {
          req.body.senha = hash

          const cadastro = await prisma.cadastro.create({
            data: req.body
          })

          res.status(200).json(cadastro).end()
        } else {
          console.log(errCrypto)
          res.status(500).json(errCrypto).end()
        }
      });

    } else {
      console.log(err)
      res.status(500).json(err).end()
    }
  })
}

const createImagem = async (req, res) => { //OK
  uploadUser.single('image')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: " + err.message
      });
    }
    if (!req.file) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: upload não realizado!"
      });
    }
    // Criar o registro da imagem no banco de dados
    const organizadorId = parseInt(req.body.organizadorId);
    const caminhoImagem = req.file.path;

    // Verificar se o organizador com o ID fornecido existe
    const organizador = await prisma.cadastro.findUnique({
      where: {
        id: organizadorId,
      },
    });
    if (!organizador) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: organizador não encontrado!"
      });
    }
    const imagem = await prisma.imagemOrganizador.create({
      data: {
        caminho_imagem: caminhoImagem,
        cadastro: {
          connect: {
            id: organizadorId,
          },
        },
      },
    });
    return res.json({
      erro: false,
      mensagem: "Upload realizado com sucesso!",
      imagem: imagem,
    });
  });
};

const read = async (req, res) => {
  let cadastro = await prisma.cadastro.findMany({
    select: {
      id: true,
      nome: true,
      descricao: true,
      cpf: true,
      cnpj: true,
      email: true,
      telefone: true,
      senha: true,
      instagram: true,
      facebook: true,
      twitter: true,
      whatsapp: true,
      site: true,
      acesso: {
        select: {
          id: true,
          tipo: true
        }
      },
      imagens: {
        select: {
          id: true,
          caminho_imagem: true,
        }
      }
    }
  });
  res.status(200).json(cadastro).end();
}

const update = async (req, res) => {
  let cadastro = await prisma.cadastro.update({
    where: {
      id: Number(req.params.id)
    },
    data: req.body
  });

  res.status(200).json(cadastro).end();
}

const remove = async (req, res) => {
  await prisma.cadastro.delete({
    where: {
      id: Number(req.params.id)
    }
  });

  res.status(200).send("Cadastro excluído com sucesso!").end();
}

const login = async (req, res) => {
  try {
    const cadastro = await prisma.cadastro.findFirstOrThrow({
      where: {
        email: req.body.email
      }
    });

    bcrypt.compare(req.body.senha, cadastro.senha).then((value) => {
      if (value) {
        let data = { "uid": cadastro.id, "role": cadastro.acesso }
        jwt.sign(data, process.env.KEY, { expiresIn: '1m' }, function (err2, token) {
          console.log(err2)
          if (err2 == null) {
            res.status(200).json({ "token": token, "uid": cadastro.id, "uname": cadastro.nome, "validation": true }).end()
          } else {
            res.status(500).json(err2).end()
          }

        })
      } else {
        res.status(201).json({ "erro": "Senha inválida", "validation": false }).end()
      }
    });
  } catch (err) {
    res.status(404).json({ "erro": "Usuário não encontrado", "validation": false }).end();
  }
}


module.exports = {
  create,
  read,
  update,
  remove,
  login,
  createAcesso,
  updateAcesso,
  createImagem

}
