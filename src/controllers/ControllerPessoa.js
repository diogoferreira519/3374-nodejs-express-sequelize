const Controller = require('./Controller');
const ServicesPessoa = require('../services/ServicesPessoa');

const servicesPessoa = new ServicesPessoa();

class ControllerPessoa extends Controller{
  constructor(){
    super(servicesPessoa);
  }
}
module.exports = ControllerPessoa;