const express = require('express');
const router = express.Router();

const Cadastro = require('../controller/cadastro');
const Campanha = require('../controller/campanha');

router.post('/cadastroAcesso', Cadastro.createAcesso);
router.put('/cadastroAcesso', Cadastro.updateAcesso);
router.post('/cadastro/login', Cadastro.login);

router.post('/cadastro', Cadastro.create);
router.post('/cadastro/imagem', Cadastro.createImagem);
router.get('/cadastro',Cadastro.read);
router.put('/cadastro/:id', Cadastro.update);
router.delete('/cadastro/:id', Cadastro.remove);

router.post('/campanhacamp', Campanha.createCampanha);
router.post('/campanha', Campanha.createImagem);
router.get('/campanha', Campanha.readTudo);
router.put('/campanha/:id', Campanha.atualizarCampanha);
router.delete('/campanha/:id', Campanha.remove);

module.exports = router;