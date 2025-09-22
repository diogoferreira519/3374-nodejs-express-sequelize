const Services = require('./Services.js');

class ServicesPessoa extends Services{
  constructor(){
    super('Pessoa');
  }

  async getPessoasByScope() {
    return await super.getAllByScope('allRegistersPessoa');
  }
}

module.exports = ServicesPessoa;