class Jogador {
    constructor(nome, posicao, numGol){
        this.nome = nome
        this.posicao = posicao
        this.numGol = numGol
    }
    golsMarcados(){
        console.log(`O jogador ${this.nome} já marcou ${this.numGol} gols em sua carreira`) 
    }
}

const Gabriel = new Jogador('Gabriel', 'Atacante', 999)
Gabriel.golsMarcados()