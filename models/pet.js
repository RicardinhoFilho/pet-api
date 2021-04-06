const conexao = require('../infraestrutura/conexao');
const uploadDeArquivo = require('../arquivos/uploadDeArquivos');
class Pet {

    adiciona(error, pet, res) {
        const sql = 'insert into pets set ?';
        if (error) {
            res.status(400).json({ error });
        } else {
            uploadDeArquivo(pet.imagem, pet.nome, (novoCaminho) => {

                if (error) {
                    res.status(400).json({ error });
                } else {
                    const novoPet = { nome: pet.nome, imagem: novoCaminho };

                    conexao.query(sql, novoPet, error => {


                        res.status(200).json(novoPet);

                    })

                }
            })
        }
    }

}
module.exports = new Pet()