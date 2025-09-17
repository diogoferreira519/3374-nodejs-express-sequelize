
const { Op } = require('sequelize');
const dataSource = require('../database/models');
class Services {
  constructor(nomeModel){
    this.model = nomeModel;
  }

  async getAll(page = 1, items = 10, order = 'ASC') {
    return dataSource[this.model].findAndCountAll({
      limit: items,
      offset: (Number(page) - 1) * items,
      // order: order.map(({column, asc}) => [column, asc === 'true' ? 'ASC' : 'DESC']),
    });
  }

  async getAllByScope(scope) {
    return await dataSource[this.model].scope(scope).findAll();
  }

  async getByDescription(path, search){
    let entityEnum = {
      PESSOA:'pessoas',
      MATRICULA: 'matricula',
      CURSO: 'cursos',
      CATEGORIA: 'categorias',
    };
    
    let existeEntidade = false;

    for (let key in entityEnum){
      if (entityEnum[key] == path){
        existeEntidade = true;
      }
    }

    if (!existeEntidade){
      throw('Erro de entidade não encontrada');
    }

    let busca = null;
    
    if (path == entityEnum.PESSOA){
      busca = 'nome';
    }
    else if (path == entityEnum.CURSO || path == entityEnum.CATEGORIA){
      busca = 'titulo';
    }

    return dataSource[this.model].findAll({
      where: {[busca]: {
        [Op.like]: `${search}%`
      }}
    });
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async update(dados, id) {
    const registersUpdated = await dataSource[this.model].update(dados, {
      where: { id }
    });
    return registersUpdated > 0;
  }

  async postData(dados) {
    return dataSource[this.model].create(dados);
  }

  async delete(id) {
    return dataSource[this.model].destroy({ where: {id : id} });
  }
}

module.exports = Services;