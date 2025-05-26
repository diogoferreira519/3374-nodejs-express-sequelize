const express = require('express');
const pessoas = require('./RoutePessoa');
const cursos = require('./RouteCurso');
const categorias = require('./RouteCategoria');
const login = require('./RouteLogin');
const cors = require('cors');

module.exports = app =>{
  app.use(
    cors(),
    express.json(),
    login,
    pessoas,
    cursos,
    categorias
  );
};