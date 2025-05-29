const Controller = require('./Controller');
const ServicesUser = require('../services/ServicesUser');
const servicesUser = new ServicesUser();

class ControllerUser extends Controller{
  constructor(){
    super(servicesUser);
  }

  async post(req, res) {
    try{
      const {nome, email, senha, perfil} = req.body;
      const user = await this.entidadeService.postData({nome, email, senha, perfil});
      return res.status(201).send(user);
    }catch(error){
      return res.status(401).json({mensagem: error.message});
    }
  }

  async postLogin(req, res) {
    try{
      const {email, senha} = req.body;

      const token = await this.entidadeService.postLogin({email, senha});

      return res.status(201).json({token: token});
    }catch(error){
      return res.status(401).json({mensagem: error.message});
    }
  }
}

module.exports = ControllerUser;