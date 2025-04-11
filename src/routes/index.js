const express = require('express');
const pessoas = require('./RoutePessoa');
const cursos = require('./RouteCurso');
const categorias = require('./RouteCategoria');
const cors = require('cors');

module.exports = app =>{
  app.use(
    cors(),
    express.json(),
    pessoas,
    cursos,
    categorias
  );
};