const uploadUser = require('../middleware/uploadImage');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const createCampanha = async (req, res) => { //OK
  let campanhas = await prisma.campanha.create({
    data: req.body
  });

  res.status(200).json(campanhas).end();
}


const createImagem = async (req, res) => {
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
    const campanhaId = parseInt(req.body.campanhaId);
    const caminhoImagem = req.file.path;

    // Verificar se a campanha com o ID fornecido existe
    const campanha = await prisma.campanha.findUnique({
      where: {
        id: campanhaId,
      },
    });
    if (!campanha) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: campanha não encontrada!"
      });
    }
    const imagem = await prisma.imagemCampanha.create({
      data: {
        caminho_imagem: caminhoImagem,
        campanha: {
          connect: {
            id: campanhaId,
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

const readTudo = async (req, res) => {
  let campanhas = await prisma.campanha.findMany({
    select: {
      id: true,
      tipo: true,
      titulo: true,
      descricao: true,
      objetivo: true,
      data_inicio: true,
      prazo: true,
      contato: true,
      valor_meta: true,
      valor_arrecadado: true,
      atualizacoes: true,
      chave_pix: true,
      organizador: {
        select: {
          id: true,
          nome: true,
          email: true
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

  res.status(200).json(campanhas).end();
}

async function atualizarCampanha(req, res) {
  const campanhaId = parseInt(req.params.id);
  const { descricao, prazo, contato, valor_arrecadado } = req.body;

  try {
    const campanha = await prisma.campanha.update({
      where: { id: Number(campanhaId) },
      data: {
        descricao,
        prazo,
        contato,
        valor_arrecadado,
        chave_pix,
        atualizacoes
      }
    });

    return res.status(200).json(campanha);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Não foi possível atualizar a campanha' });
  }
}

const remove = async (req, res) => {
  await prisma.campanha.delete({
    where: {
      id: Number(req.params.id)
    }
  });

  res.status(200).send("Campanha excluída com sucesso!").end();
};


module.exports = {
  createImagem,
  createCampanha,
  readTudo,
  atualizarCampanha,
  remove
};


