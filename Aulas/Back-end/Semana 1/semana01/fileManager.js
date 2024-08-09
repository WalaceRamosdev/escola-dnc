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