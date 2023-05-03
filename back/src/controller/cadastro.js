const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const jwt = require("jsonwebtoken")

const prisma = new PrismaClient()

//todos os usuários ao se cadastrarem serão automáticamente usuário comum, somente o admnistrador, poderá adicionar novos adms
// o endpoint de organizadores é o mesmo de cadastro


const createAcesso = async (req, res) => { //OK
  let acesso = await prisma.nivelAcesso.create({
      data: req.body
  });

  res.status(200).json(acesso).end();
}

const updateAcesso = async (req, res) => {
  let acesso = await prisma.nivelAcesso.update({
      where: {
          id:Number (req.params.id)
      },
      data: req.body
  });

  res.status(200).json(acesso).end();
}


const create = async (req, res) => { //ESTÁ OK
  bcrypt.genSalt(10, function(err, salt) {
      if (err == null) {
        bcrypt.hash(req.body.senha, salt, async function(errCrypto, hash) {
          if(errCrypto == null){
              req.body.senha = hash
            
              const cadastro = await prisma.cadastro.create({
                  data: req.body
        })

            res.status(200).json(cadastro).end()
          } else {
            res.status(500).json(errCrypto).end()
          }
        });

          } else {
        res.status(500).json(err).end()
          }
        })
}


const read = async (req, res) => {
  let cadastro = await prisma.cadastro.findMany({
      select: {
          id: true,
          nome: true,
          cpf: true,
          cnpj: true,
          email: true,
          telefone: true,
          senha: true,
          acesso: {
              select: {
                  id: true,
                  tipo: true
              }
          }
        }
      });
      res.status(200).json(cadastro).end();
}

const update = async (req, res) => {
    let cadastro = await prisma.cadastro.update({
        where: {
            id:Number (req.params.id)
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
};

const login = async (req, res) => {
    const cadastro = await prisma.cadastro.findFirstOrThrow({
      where: {
        email: req.body.email
      }
    }).then((value) => { return (value) })
      .catch((err) => { return { "erro": "Usuário não encontrado", "validation": false } })
  
    if (cadastro.erro == null) {
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
      })
    } else {
      res.status(404).json(cadastro ).end()
    }
  
  
  }

module.exports = {
    create,
    read,
    update,
    remove,
    login,
    createAcesso,
    updateAcesso
}
