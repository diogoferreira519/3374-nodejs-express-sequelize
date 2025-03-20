const { Router } = require('express');
const ControllerPessoa = require('../controllers/ControllerPessoa');

const pessoaController = new ControllerPessoa();
const router = Router();

router.get('/pessoas', (req, res)=> pessoaController.pegaTodos(req, res));

module.exports = router;