const Services = require('./Services.js');

class ServicesPessoa extends Services{
  constructor(){
    super('Pessoa');
  }

  async getMatriculaById(id){
    const estudante = await super.getById(id);
    console.log('passou?');
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async getPessoasByScope() {
    return await super.getAllByScope('allRegistersPessoa');
  }
}

module.exports = ServicesPessoa;