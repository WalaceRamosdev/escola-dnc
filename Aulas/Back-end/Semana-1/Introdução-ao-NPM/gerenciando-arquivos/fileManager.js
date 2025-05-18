const fs = require('fs')
const path = require ('path')

function createDirectory(dirPath) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve (`Diretório '${dirPath}' foi criado com sucesso! `)
            }
        }); 
    });
}

function createFile(filePath, content = "") {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf-8', (err) => {
            if (err) {
                reject(err);

            } else {
                resolve (`Arquivo '${filePath}' foi criado com sucesso! `)
            }
        });
    });
}

module.exports = {createDirectory, createFile}