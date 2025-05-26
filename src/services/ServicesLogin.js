const Services = require('./Services');

class ServicesLogin extends Services{
  constructor(){
    super('Users');
  }
  
  async postData(dados) {
    
    const user = dataSource[this.model].findOne({
        where: {
            email:dados.email
        }
    })

    if (user) {
        throw new Error('Usuário já cadastrado');
    }
    
    return dataSource[this.model].create(dados);
}
}

module.exports = ServicesLogin;