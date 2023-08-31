const livroServices = require('../services/livroServices');

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]}

        let livros = await livroServices.buscarTodos();

        for(let i in livros){
            json.result.push
                codigo: livros[i].codigo;
                descricao: livros[i].nome;
            }
        res.json(json);

    },
    buscarUm: async(req,res) => {
        let json = {error:'',result:{}};

        let codigo = req.params.codigo;
        let livro =  await livroServices.buscarUm(codigo)

        if(livro){
            json.result = livro;
        }

        res.json(json);
    },
    inserir: async(req,res) => {
        let json = {error:'',result:{}};

        let nome = req.body.nome;
        let autor = req.body.autor;
        let ano = req.body.ano;



        if(nome && autor && ano){
            let livroCodigo =  await livroServices.inserir(nome, autor, ano)
            json.result = {
                codigo: livroCodigo,
                nome,
                autor,
                ano
            };
        }else{
            json.error='Campos não enviados';
        }

        res.json(json);
    }
}
