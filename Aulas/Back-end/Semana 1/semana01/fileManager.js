const fs = require('fs')
const path = require('path')

function createDirectory (dirPath) {
    new Promise ((resolve, reject) => {
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if (err) {
                reject(err)
            }else {
                resolve(`Diretorio '${dirPath}' criado com sucesso`)
            }
        })
    })
}

function createFile (filePath, content = '') {
    new Promise ((resolve, reject) => {
        fs.writeFile(filePathPath, content, 'utf-8', (err) => {
            if (err) {
                reject(err)
            }else {
                resolve(`Arquivo '${filePath}' criado com sucesso`)
            }
        })
    })
}

module.exports = {createDirectory, createFile}