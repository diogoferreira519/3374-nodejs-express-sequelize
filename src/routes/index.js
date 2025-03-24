const express = require('express');
const pessoas = require('./RoutePessoa');
const cursos = require('./RouteCurso');
const categorias = require('./RouteCategoria');

module.exports = app =>{
  app.use(
    express.json(),
    pessoas,
    cursos,
    categorias
  );
};