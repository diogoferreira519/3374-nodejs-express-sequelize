class Controller {
  constructor(entidadeService){
    this.entidadeService = entidadeService;
  }

  async getAll(req, res){
    try{
      const listaRegistros = await this.entidadeService.getAll();
      return res.status(200).json(listaRegistros);
    }catch(error){
      return res.status(401).json({mensagem: error});
    }
  }

  async get(req, res){
    try{
      const { estudanteId } = req.params;
      const listaRegistros = await this.entidadeService.getById(estudanteId);
      return res.status(200).json(listaRegistros);
    }catch(error){
      return res.status(401).json({mensagem: error});
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
      return res.status(401).json({mensagem: error});
    }
  }

  async updateById(req, res) {
    const { id } = req.params;
    const dados = req.body;
    
    if (id != null){
      const isUpdate = await this.entidadeService.update(dados,Number(id));

      if (!isUpdate){
        return res.status(400).json({message: 'registro não foi atualizado'});
      }
      return res.status(200).json({message: 'Atualizado com sucesso'});
    }
  }

  async post(req, res) {
    try{
      const body = req.body;
      await this.entidadeService.postData(body);
      return res.status(201).json({message: 'registro inserido com sucesso!'});
    }catch(error){
      return res.status(401).json({mensagem: error});
    }
  }
}

module.exports = Controller;