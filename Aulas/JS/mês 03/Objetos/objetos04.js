// let jogador = {
//     nome: 'Gabriel Ramos',
//     idade: 18,
//     numGol: 100,
// }

const Jogador = function(nome, idade, numGol){
    Nome = nome,
    Idade = idade,
    Gols = numGol

    this.getNome = function(){
        return Nome
    }
     this.getIda = function(){
        return Idade
     }
     this.getGol = function(){
        return Gols
     }
}

const Neymar = new Jogador("Neymar", 32, 500)
console.log(Neymar. getNome())
const Gabriel = new Jogador("Gabriel", 18, 1000)
console.log(Gabriel. getNome())