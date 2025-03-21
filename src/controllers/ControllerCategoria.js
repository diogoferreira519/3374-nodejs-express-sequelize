const Controller = require('./Controller');
const ServicesCategoria = require('../services/ServicesCategoria');

const servicesCategoria = new ServicesCategoria();

class ControllerCategoria extends Controller{
  constructor(){
    super(servicesCategoria);
  }
}

module.exports = ControllerCategoria;