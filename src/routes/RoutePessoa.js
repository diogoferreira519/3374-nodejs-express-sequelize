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
router.put('/pessoas/:id', (req, res)=> pessoaController.update(req, res));
router.delete('/pessoas/:id', (req, res)=> pessoaController.exclui(req,res));
router.get('/pessoas/:estudante_id/matriculas/all', (req, res) => matriculaController.getAllMatriculas(req,res));
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.post(req,res));
router.get('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.getMatriculas(req,res));
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.getOne(req,res));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.update(req,res));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.exclui(req,res));
module.exports = router;