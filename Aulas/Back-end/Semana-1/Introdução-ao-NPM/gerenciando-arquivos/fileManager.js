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

function listFiles (dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject (err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf-8', (err) => {
            if (err) {
                reject(err)
            } else {
                resolve('Arquivos foi escrito com sucesso !')
            }
        })
    })
}

function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unLink(filePath, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve('Arquivos deletado com sucesso !')
            }
        })
    })
}

module.exports = {createDirectory, createFile, listFiles, readFile, writeFile, deleteFile}