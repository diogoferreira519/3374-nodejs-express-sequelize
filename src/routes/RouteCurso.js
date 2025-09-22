const { Router } = require('express');
const ControllerCurso = require('../controllers/ControllerCurso');

const cursoController = new ControllerCurso();
const router = Router();

router.post('/cursos', (req, res)=> cursoController.post(req,res));
router.get('/cursos', (req, res)=> cursoController.getAll(req, res));
router.put('/cursos/:id', (req, res)=> cursoController.update(req, res));
router.delete('/cursos/:id', (req, res)=> cursoController.exclui(req,res));

module.exports = router;