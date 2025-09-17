const { Router } = require('express');
const ControllerPessoa = require('../controllers/ControllerPessoa');
const ControllerMatricula = require('../controllers/ControllerMatricula');

const pessoaController = new ControllerPessoa();
const matriculaController = new ControllerMatricula();
const router = Router();

router.post('/pessoas', (req, res)=> pessoaController.post(req,res));
router.get('/pessoas', (req, res)=> pessoaController.getAll(req, res));
router.get('/pessoas/all', (req, res)=> pessoaController.getPessoaByScope(req, res));
router.get('/pessoas/:id', (req, res)=> pessoaController.get(req,res));
router.put('/pessoas/:id', (req, res)=> pessoaController.updateById(req, res));
router.delete('/pessoas/:id', (req, res)=> pessoaController.exclui(req,res));
router.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.post(req,res));
router.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.getMatriculas(req,res));

module.exports = router;