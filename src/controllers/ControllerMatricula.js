const Sequelize = require('sequelize');
const Controller = require('./Controller');
const ServicesMatricula = require('../services/ServicesMatricula');

const servicesMatricula = new ServicesMatricula();

class ControllerMatricula extends Controller{
  constructor(){
    super(servicesMatricula);
  }

  async getMatriculas(req, res) {
    const {estudante_id} = req.params;
    try{
      //pega apenas matricuas ativas, pois o default scope esta com where de status matriculado
      const listaMatriculas = await servicesMatricula.getByProp(Number(estudante_id), 'estudante_id');
      return res.status(200).json(listaMatriculas);
    }catch(error){
      return res.status(500).json({mensagem: error.message});
    }
  }

  async getAllMatriculas(req, res) {
    const {estudante_id} = req.params;
    try{
      const listaMatriculas = await servicesMatricula.getByPropWithScope(Number(estudante_id), 'estudante_id', 'allRegistersMatricula');
      return res.status(200).json(listaMatriculas);
    }catch(error){
      return res.status(500).json({mensagem: error.message});
    }
  }

  async getMatriculasByEstudante(req, res) {
    const {estudante_id} = req.params;
    try{
      const contagemMatriculas = await servicesMatricula.getByPropAndCount(Number(estudante_id), 'estudante_id');
      return res.status(200).json(contagemMatriculas);
    }catch(error){
      return res.status(500).json({mensagem: error.message});
    }
  }

  async getCursosLotados (req, res) {
    const lotacaoCurso = 1;
    try{
      const cursosLotados = await servicesMatricula.getAllWithObject(
        { 
          where: {
            status: 'matriculado'
          },
          attributes: ['curso_id'],
          group: ['curso_id'],
          having: Sequelize.literal(`COUNT(curso_id) >= ${lotacaoCurso}`)
        }
      );
      return res.status(200).json(cursosLotados.count);
    }catch(error){
      return res.status(500).json({mensagem: error.message});
    }
  }
}

module.exports = ControllerMatricula;