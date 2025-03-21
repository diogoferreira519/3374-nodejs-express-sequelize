const { Router } = require('express');
const ControllerPessoa = require('../controllers/ControllerPessoa');

const pessoaController = new ControllerPessoa();
const router = Router();

router.post('/pessoas', (req, res)=> pessoaController.post(req,res));
router.get('/pessoas', (req, res)=> pessoaController.getAll(req, res));
router.put('/pessoas/:id', (req, res)=> pessoaController.updateById(req, res));
router.delete('/pessoas/:id', (req, res)=> pessoaController.exclui(req,res));

module.exports = router;