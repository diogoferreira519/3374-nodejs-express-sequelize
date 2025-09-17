const express = require('express');
const pessoas = require('./RoutePessoa');
const cursos = require('./RouteCurso');
const categorias = require('./RouteCategoria');
const user = require('./RouteUser');
const login = require('./RouteLogin');
const cors = require('cors');
// const autentication = require('../middlewares/autentication');

module.exports = app =>{
  app.use(
    cors(),
    express.json(),
    user,
    login,
    // autentication,
    pessoas,
    cursos,
    categorias
  );
};