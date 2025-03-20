const Services = require('./Services.js');

class ServicesPessoa extends Services{
  constructor(){
    super('Pessoa');
  }
}

module.exports = ServicesPessoa;