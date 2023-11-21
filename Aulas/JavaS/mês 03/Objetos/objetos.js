let jogador = {
    nome: 'Gabriel Ramos',
    idade: 18,
    numGol: 100,
    Gol(g=0){
        console.log('Gabriel marcou um gol !')
        this.numGol += g
    }
}