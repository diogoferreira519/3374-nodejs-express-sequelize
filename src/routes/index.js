const express = require('express');
const pessoas = require('./RoutePessoa');

module.exports = app =>{
  app.use(
    express.json(),
    pessoas,
  );
};