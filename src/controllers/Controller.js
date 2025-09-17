class Controller {
  constructor(entidadeService){
    this.entidadeService = entidadeService;
  }

  async getAll(req, res){
    try{
      let busca = req.query.search;
      if (!busca){
        const listaRegistros = await this.entidadeService.getAll(req.query.page, req.query.items, req.query.order);
   
        return res.status(200).json(listaRegistros);
      }
      const listaBusca = await this.entidadeService.getByDescription(req.path.slice(1), busca);
        
      return res.status(200).json(listaBusca);
    }catch(error){
      return res.status(500).json({mensagem: error.message});
    }
  }

  async getAllByScope(req, res) {
    try {
      const listaRegistros = await this.entidadeService.getAllByScope();
      return res.status(200).json(listaRegistros);
    } catch(error) {
      return res.status(500).json({mensagem: error.message});
    }
  }

  async get(req, res){
    try{
      const { id } = req.params;
      const listaRegistros = await this.entidadeService.getById(id);
      return res.status(200).json(listaRegistros);
    }catch(error){
      return res.status(500).json({mensagem: error.message});
    }
  }

  async exclui(req, res){
    const { id } = req.params;
    try{
      if (id !== null ){
        await this.entidadeService.delete(Number(id));
        return res.status(200).json({mensagem:`id ${id} deletado com sucesso.`});
      }
    } catch(error) {
      return res.status(500).json({mensagem: error.message});
    }
  }

  async updateById(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;
      
      if ( id ) {
        const isUpdate = await this.entidadeService.update(dados, Number(id));

        if (!isUpdate){
          return res.status(400).json({message: 'registro não foi atualizado'});
        }
        
        return res.status(200).json({message: 'Atualizado com sucesso'});
      }
    } catch(error) {
      return res.status(500).json({mensagem: error.message});
    }
  }

  async post(req, res) {
    try{
      const body = req.body;
      await this.entidadeService.postData(body);
      return res.status(201).json({message: 'registro inserido com sucesso!'});
    }catch(error){
      return res.status(500).json({mensagem: error.message});
    }
  }
}

module.exports = Controller;