const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {


    const tiposValidos = ['.jpg', '.png', '.jpeg'];
    const tipo = path.extname(caminho);
    console.log(tipo)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) != -1;

    if (tipoEhValido) {
        const error = 'Tipo de arquivo Inválido!'
        console.log('Tipo inválido!');
        callbackImagemCriada(error);
    } else {
        const novoCaminho = `./assets/imagens/${nomeArquivo}${tipo}`;
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(error, novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    }




}