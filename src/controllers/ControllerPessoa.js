const Controller = require('./Controller');
const ServicesPessoa = require('../services/ServicesPessoa');

const servicesPessoa = new ServicesPessoa();

class ControllerPessoa extends Controller{
  constructor(){
    super(servicesPessoa);
  }

  async getMatriculas(req, res) {
    const {estudanteId} = req.params;
    try{
      const listaMatriculas = await servicesPessoa.getMatriculaById(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    }catch(error){
      return res.status(500).json({mensagem: error.message});
    }
  }

  async getPessoaByScope(req, res) {
    try{
      const listaPessoas = await servicesPessoa.getPessoasByScope();
      return res.status(200).json(listaPessoas);
    }catch(error){
      return res.status(500).json({mensagem: error.message});
    }
  }
}
module.exports = ControllerPessoa;