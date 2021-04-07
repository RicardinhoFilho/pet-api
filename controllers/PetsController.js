const Pet = require('../models/pet')
module.exports = app => {
    app.get('/pet', (req, res) => {
        res.send('ok');
    });

    app.post('/pet', (req, res) => {
        const pet = req.body;
        console.log(pet);
        Pet.adiciona(pet, res);
    });

}