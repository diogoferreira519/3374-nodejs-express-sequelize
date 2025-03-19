const database = require('../models');
class ControllerPessoa {
  static async getAll(req, res){
    try{
      const listaPessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaPessoas);
    }catch(error){
    // erro
    }
  }
}
module.exports = ControllerPessoa;