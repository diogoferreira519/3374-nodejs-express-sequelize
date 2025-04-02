const express = require('express');
const pessoas = require('./RoutePessoa');
const cursos = require('./RouteCurso');
const matriculas = require('./RouteMatricula');
const categorias = require('./RouteCategoria');
const cors = require('cors');
module.exports = app =>{
  app.use(
    cors(),
    express.json(),
    pessoas,
    cursos,
    matriculas,
    categorias
  );
};