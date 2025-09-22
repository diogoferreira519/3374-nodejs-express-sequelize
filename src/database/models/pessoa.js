'use strict';
const isCpfValid = require('../../utils/validaCpfHelper.js');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado'},
        as: 'aulasMatriculadas',
      
      });
      Pessoa.hasMany(models.Curso,{
        foreignKey: 'docente_id'
      });
    }
  }
  Pessoa.init({
    nome: {
      type: DataTypes.STRING,
      validate : {
        len : {
          args: [3, 20],
          msg: 'Precisa ter no minimo 3 caracters e no máximo 20'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Necessário ser um email válido'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfEhValido: (cpf) => {
          if (!isCpfValid(cpf)) throw new Error('Cpf inválido');
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    paranoid: true,
    defaultScope: {
      where : {
        ativo: true
      }
    },
    scopes: {
      allRegistersPessoa: {
        where : {}
      }
    }
  });
  return Pessoa;
};