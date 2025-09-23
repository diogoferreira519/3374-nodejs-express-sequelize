const { Op } = require('sequelize');
const Controller = require('./Controller');
const ServicesCurso = require('../services/ServicesCurso');

const servicesCurso = new ServicesCurso();

class ControllerCurso extends Controller{
  constructor(){
    super(servicesCurso);
  }

  async getCursos(req, res) {
    const { data_inicial, data_final } = req.query;
    const where  = {};
    // const where = {
    //   data_inicio: {
    //     [Op.gte] : data_inicial,
    //     [Op.lte] : data_final
    //   }
    // }

    console.log(data_inicial);

    data_inicial || data_final ? where.data_inicio = {} : null;
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    data_final ? where.data_inicio[Op.lte] = data_final: null;

    try {
      const listaCursos = await servicesCurso.getAllWithWhere(where);
      return res.status(200).json(listaCursos);
    }
    catch(error) {
      res.status(500).json({message: error.message});
    }
  }
}

module.exports = ControllerCurso;