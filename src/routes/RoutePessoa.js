const { Router } = require('express');
const ControllerPessoa = require('../controllers/ControllerPessoa');

const router = Router();

router.get('/pessoas', ControllerPessoa.getAll);

module.exports = router;