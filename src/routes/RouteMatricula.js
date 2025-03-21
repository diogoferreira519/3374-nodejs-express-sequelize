const { Router } = require('express');
const ControllerMatricula = require('../controllers/ControllerMatricula');

const matriculaController = new ControllerMatricula();
const router = Router();

router.post('/matriculas', (req, res)=> matriculaController.post(req,res));
router.get('/matriculas', (req, res)=> matriculaController.getAll(req, res));
router.put('/matriculas/:id', (req, res)=> matriculaController.updateById(req, res));
router.delete('/matriculas/:id', (req, res)=> matriculaController.exclui(req,res));

module.exports = router;