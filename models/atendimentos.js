const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimento {

    adiciona(atendimento, res) {

        const dataCriacao = new Date();
        const Data = moment(atendimento.Data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

        const dataEhValida = moment(Data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;

        const validacoes = [{
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

        const erros = validacoes.filter(campo => campo.valido == false);
        const existemErros = erros.length;

        if (existemErros) {
            res.status(400).json(erros);
        } else {

            const atendimentoDatado = {...atendimento, dataCriacao, Data };

            const sql = 'INSERT INTO Atendimentos SET ?';

            conexao.query(sql, atendimentoDatado, (error, resultado) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(201).json(atendimentoDatado);
                }
            });
        }
    }

    lista(res) {
        const sql = 'select * from atendimentos';

        conexao.query(sql, (error, result) => {
            if (error) {
                res.status(404).json(error);
            } else {
                res.status(200).json(result);
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;



        conexao.query(sql, (error, result) => {
            if (error) {
                res.status(400).json(error);
            } else {
                const atendimento = result[0];
                res.status(200).json(atendimento);
            }
        })
    }

    altera(id, values, res) {
        const sql = 'UPDATE Atendimentos SET? WHERE id =?';

        if (values.Data) {
            console.log('esteeee' + values.Data);
            values.Data = moment(values.Data, 'DD/MM/YYYY').format('YYYY-MM-DD');
            console.log(values.Data);
        }
        conexao.query(sql, [values, id], (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).json(error);

            } else {
                res.status(200).json({...values, id });
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?';

        conexao.query(sql, id, (error, result) => {
            if (error) {
                console.log(error);
                res.status(400).json(error)
            } else {
                res.status(200).json({ id });
            }
        })
    }


}

module.exports = new Atendimento;