class Controller {
  constructor(entidadeService){
    this.entidadeService = entidadeService;
  }

  async getAll(req, res){
    try{
      const listaRegistros = await this.entidadeService.getAll();
      return res.status(200).json(listaRegistros);
    }catch(error){
      //error
    }
  }

  async exclui(req, res){
    const { id } = req.params;
    try{
      if (id !== null ){
        await this.entidadeService.delete(Number(id));
        return res.status(200).json({mensagem:`id ${id} deletado com sucesso.`});
      }
    }catch(error){
      console.log(error);
    }
  }

  async updateById(req, res) {
    // const { id } = req.params
  }
}

module.exports = Controller;