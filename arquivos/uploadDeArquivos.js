const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {


    const tiposValidos = ['.jpg', '.png', '.jpeg'];
    const tipo = path.extname(caminho);
    console.log(tipo)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(0)) != -1;
    console.log('teste->>>' + tipoEhValido)

    if (tipoEhValido) {

        const novoCaminho = `./assets/imagens/${nomeArquivo}${tipo}`;
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(novoCaminho))


    } else {
        const error = 'Tipo de arquivo Inválido!'
        console.log('Tipo inválido!');
        callbackImagemCriada(error);

    }

}