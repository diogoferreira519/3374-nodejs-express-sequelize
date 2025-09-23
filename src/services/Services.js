
const { Op } = require('sequelize');
const dataSource = require('../database/models');
class Services {
  constructor(nomeModel){
    this.model = nomeModel;
  }

  async getAll(page = 1, items = 10, order = 'ASC') {
    return await dataSource[this.model].findAndCountAll({
      limit: items,
      offset: (Number(page) - 1) * items,
      // order: order.map(({column, asc}) => [column, asc === 'true' ? 'ASC' : 'DESC']),
    });
  }

  async getAllWithWhere(where = {}) {
    return await dataSource[this.model].findAll({
      where: { ...where}
    });
  }

  async getAllWithObject(object = {}) {
    return await dataSource[this.model].findAndCountAll(object);
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

  async getByProp(id, prop) {
    return await dataSource[this.model].findAll({
      where : {
        [prop] : id,
      }
    });
  }

  async getByPropAndCount(id, prop) {
    return await dataSource[this.model].findAndCountAll({
      where : {
        [prop] : id,
      },
      limit: 2,
      order: [['id', 'DESC']]
    });
  }

  async getByPropWithScope(id, prop, scope) {
    return await dataSource[this.model].scope(scope).findAll({
      where : {
        [prop] : id,
      }
    });
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async getOne(params) {
    return dataSource[this.model].findOne({where: params});
  }

  async update(dados, where) {
    const registersUpdated = await dataSource[this.model].update(dados, {
      where: { ...where }
    });
    return registersUpdated > 0;
  }

  async postData(dados) {
    return dataSource[this.model].create(dados);
  }

  async delete(params) {
    return dataSource[this.model].destroy({ where: params });
  }
}

module.exports = Services;