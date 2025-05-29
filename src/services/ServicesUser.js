const Services = require('./Services');
const bcrypt = require('bcrypt')
const uuid  = require('uuid');
const dataSource = require('../models');
const jwt = require('jsonwebtoken')

class ServicesUser extends Services{
  constructor(){
    super('User');
  }

  async postLogin(dados) {
    const user = await dataSource[this.model].findOne({
      attributes: ['id', 'email', 'senha'],
      where: {
        email: dados.email
      }
    });

    if (!user){
      throw new Error('Endereço de email não correspondem à nenhuma conta!');
    }

    const senhaCorresponde = await bcrypt.compare(dados.senha, user.senha);
    
    if (!senhaCorresponde){
      throw new Error('Senha incorreta!')
    }

    const chave = process.env.JWT_SECRET;

    const token = jwt.sign(
      {  id:user.id, nome: user.nome, email:user.email, perfil:user.perfil},
      chave,
      {expiresIn: '1h'}
    );

    return token;

  }
  
  async postData(dados) {

    const user = await dataSource[this.model].findOne({
        where: {
            email:dados.email
        }
    })

    if (user) {
        throw new Error('Usuário já cadastrado');
    }

    let senhaHasheada = await bcrypt.hash(dados.senha, 10);
    
    const newUser =  dataSource[this.model].create({
      id: uuid.v4(),
      nome: dados.nome,
      email: dados.email,
      senha: senhaHasheada,
      perfil: dados.perfil
    });

    return newUser
}
}

module.exports = ServicesUser;