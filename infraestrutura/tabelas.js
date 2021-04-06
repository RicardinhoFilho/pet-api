class Tabelas{
    init(conexao){
        //console.log('Tabelas foram chamadas!');
        this.conexao = conexao;
        this.criarAtendimento();
    }

    criarAtendimento(){

        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos(id int NOT NULL AUTO_INCREMENT, cliente VARCHAR(50) NOT NULL, Pet VARCHAR(20), servico VARCHAR(20) NOT NULL, Data DATETIME NOT NULL, DataCriacao DATETIME NOT NULL, Status VARCHAR(20)NOT NULL, Observacoes TEXT, PRIMARY KEY(ID))';

        this.conexao.query(sql, (error)=>{
            if (error) {
                console.log(error);
            }else{
                console.log('Tabela Atendimentos Criada com sucesso!')
            }
        });
    }
}
module.exports =new Tabelas;