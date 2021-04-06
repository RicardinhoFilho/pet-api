const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {

    adiciona(atendimento, res) {

        const dataCriacao = new Date();
        const Data = moment(atendimento.Data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        const dataEhValida = moment(Data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;

        const validacoes = [
            {
                nome: 'Data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

        if (existemErros) {
            res.status(400).json(erros);
        } else {

            const atendimentoDatado = { ...atendimento, dataCriacao, Data };

            const sql = 'INSERT INTO Atendimentos SET ?';

            conexao.query(sql, atendimentoDatado, (error, resultado) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json(resultado);
                }
            });
        }
    }

}

module.exports = new Atendimento;