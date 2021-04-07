const conexao = require('../infraestrutura/conexao');
const uploadDeArquivo = require('../arquivos/uploadDeArquivos');
class Pet {

    adiciona(pet, res) {
        const sql = 'insert into pets set ?';

        uploadDeArquivo(pet.imagem, pet.nome, (error, novoCaminho) => {
            if (error) {
                res.status(400).json({ error });
            } else {
                res.status(200).json(pet);
            }
        })
    }

}
module.exports = new Pet()