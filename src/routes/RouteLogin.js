const { Router } = require('express');
const ControllerLogin = require('../controllers/ControllerLogin');

const loginController = new ControllerLogin();
const router = Router();

router.post('/users', (req, res)=> loginController.post(req,res));
router.get('/users', (req, res)=> loginController.getAll(req, res));
router.put('/users/:id', (req, res)=> loginController.updateById(req, res));

module.exports = router;