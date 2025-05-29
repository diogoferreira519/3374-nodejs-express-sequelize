const { Router } = require('express');
const ControllerUser = require('../controllers/ControllerUser');

const userController = new ControllerUser();
const router = Router();

router.post('/user', (req, res)=> userController.post(req,res));
router.get('/user', (req, res)=> userController.getAll(req, res));
router.put('/user/:id', (req, res)=> userController.updateById(req, res));

module.exports = router;