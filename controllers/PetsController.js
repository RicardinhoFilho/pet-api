const Pet = require('../models/pet')
module.exports = app => {
    app.get('/pets', (req, res) => {
        res.send('ok');
    });

    app.post('/pets', (req, res) => {
        const pet = req.body;
        console.log(pet);
        Pet.adiciona(error, pet, res);
    });

}