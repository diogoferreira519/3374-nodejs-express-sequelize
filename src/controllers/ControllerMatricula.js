const Controller = require('./Controller');
const ServicesMatricula = require('../services/ServicesMatricula');

const servicesMatricula = new ServicesMatricula();

class ControllerMatricula extends Controller{
  constructor(){
    super(servicesMatricula);
  }
}

module.exports = ControllerMatricula;