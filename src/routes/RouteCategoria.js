const { Router } = require('express');
const ControllerCategoria = require('../controllers/ControllerCategoria');

const categoriaController = new ControllerCategoria();
const router = Router();

router.post('/categorias', (req, res)=> categoriaController.post(req,res));
router.get('/categorias', (req, res)=> categoriaController.getAll(req, res));
router.put('/categorias/:id', (req, res)=> categoriaController.update(req, res));
router.delete('/categorias/:id', (req, res)=> categoriaController.exclui(req,res));

module.exports = router;