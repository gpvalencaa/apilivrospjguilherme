const { inserir } = require('../controllers/livroController');
const db = require('../db');


module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM livros', (error,results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejetado)=>{

            db.query('SELECT * livros WHERE codigo = ?', [codigo], (error,results)=>{
                if(error) { rejeitado(error); return; }
                if (results.lenght > 0){
                    aceito(results[0])
                }else{
                    aceito(false)
                }
            });
        });
    },
    inserir: (nome, autor, ano) => {
        return new Promise((aceito, rejetado)=>{

            db.query('INSERT INTO livros (nome,autor,ano) VALORES (?,?,?)', [nome,
                 autor, ano],
                  (error,results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo)
              
            ;})
              
        ;})
    }
};
