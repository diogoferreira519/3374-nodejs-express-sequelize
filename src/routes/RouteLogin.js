const { Router } = require('express');
const ControllerUser = require('../controllers/ControllerUser');

const userController = new ControllerUser();
const router = Router();

router.post('/auth', (req, res)=> userController.postLogin(req,res));

module.exports = router;