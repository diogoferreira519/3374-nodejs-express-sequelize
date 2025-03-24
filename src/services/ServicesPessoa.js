const Services = require('./Services.js');

class ServicesPessoa extends Services{
  constructor(){
    super('Pessoa');
  }

  async getMatriculaById(id){
    const estudante = await super.getById(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }
}

module.exports = ServicesPessoa;