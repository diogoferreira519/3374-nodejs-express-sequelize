const Controller = require('./Controller');
const ServicesCurso = require('../services/ServicesCurso');

const servicesCurso = new ServicesCurso();

class ControllerCurso extends Controller{
  constructor(){
    super(servicesCurso);
  }
}

module.exports = ControllerCurso;