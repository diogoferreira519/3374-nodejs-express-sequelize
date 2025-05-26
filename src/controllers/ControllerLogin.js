const Controller = require('./Controller');
const ServicesLogin = require('../services/ServicesLogin');
import {createHash} from 'crypto';
const servicesLogin = new ServicesLogin();

class ControllerLogin extends Controller{
  constructor(){
    super(servicesLogin);
  }

  async post(req, res) {
    try{
      const {nome, email, senha, perfil} = req.body;
      let senhaHasheada = createHash('MD5').update(senha).digest('hex');
      await this.entidadeService.postData({nome, email, senhaHasheada, perfil});
      return res.status(201).json({message: 'registro inserido com sucesso!'});
    }catch(error){
      return res.status(401).json({mensagem: error.message});
    }
  }
}

module.exports = ControllerLogin;