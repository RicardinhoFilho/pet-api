const Atendimento = require('../models/atendimentos');
module.exports = app => {
    app.get("/atendimentos", (req, res) => res.send("Rota de etendimentos!"));

    app.post("/atendimentos", (req, res) => {
        const atendimento = req.body;
        console.log(atendimento);
        Atendimento.adiciona(atendimento, res);
        //res.send(atendimento);
    });
}