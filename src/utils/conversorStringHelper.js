module.exports = (objeto)=> {
  for (let prop in objeto) {
    if (prop.includes('id') || prop.includes('Id')) {
      objeto[prop] = Number(objeto[prop]);
    }
  }
  return objeto;
};