const fileManager = require('./fileManager')
const readLineSync = require('readline-sync')
const path = require('path')

async function main() {

    const baseDir = path.join(__dirname, "my_files")
    while (true) {
        console.log("\nMenu:");
        console.log("1. Criar arquivo");
        console.log("2. Listar arquivos");
        console.log("3. Ler arquivos");
        console.log("4. Escrever arquivo");
        console.log("5. Deletar arquivo");
        console.log("6. Sair");

        const choice = readLineSync.question('Escolha uma opcao')

        switch(choice) {
            case '1':
                    const fileName = readLineSync.question('Digite o nome do arquivo');
                    const fileContent = readLineSync.question ('Digite o conteudo ou deixe em branco');

                    const createFilePath = path.join(__dirname, fileName)
                    const fileMessage = await fileManager.createFile(createFilePath, fileContent)

                    console.log(fileMessage);
                    break;

            case '2':
                console.log('Arquivo listado com sucesso')
                break;

            case '3': 
                console.log('Arquivos Lidos')
                break;

            case '4':
                console.log('Arquivo escrito com sucesso')
                break;

            case '5': 
                console.log('Arquivo deletado com sucesso')
                break;

            case '6':
                console.log('Saindo...')
                return;

            default:
                console.log('Opção inválida. Tente novamente')
        }
    }
}

main();

