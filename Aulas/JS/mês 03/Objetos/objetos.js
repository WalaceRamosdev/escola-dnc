let jogador = {
    nome: 'Gabriel Ramos',
    idade: 18,
    numGol: 100,
    Gol(g=0){
        console.log('Gabriel fez gol !')
        this.numGol += g
    }
}

console.log(jogador.nome)
console.log(jogador.numGol)
jogador.Gol(5)
console.log(jogador.numGol)

jogador.posicao = 'Meio campo'
console.log(jogador)