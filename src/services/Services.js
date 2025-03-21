
const dataSource = require('../models');
class Services {
  constructor(nomeModel){
    this.model = nomeModel;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async update(dados, id) {
    const listaRegistrosAtualizados = dataSource[this.model].update(dados, { where: { id: id} });

    if (listaRegistrosAtualizados[0] === 0){
      return false;
    }

    return true;
  }

  async postData(dados) {
    return dataSource[this.model].create(dados);
  }

  async delete(id) {
    return dataSource[this.model].destroy({ where: {id : id} });
  }
}

module.exports = Services;