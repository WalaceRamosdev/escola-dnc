// Dados primitivos

/* const text:string = 'Olá Mundo!'
const nome:string = 'Bem-vindo Walace'

var saudacao = text + nome



const boleano: boolean = false
console.log(boleano) */

// Arrays e tuplas 

//const pares:number[] = [2, 4, 6, 8, 10]


// Objetos


/* const user: {nome: string, email: string, senha: number} = {
    nome: 'Walace',
    email: 'contatowalaceramos@gmail.com',
    senha: 132097
}

console.log (user) */


// Type Alias e interface

/* Pode ser usado o type ou interface que o resultado será o mesmo */

type Usuario = {
    name: string,
    email:string,
    senha: number 
}

const user: Usuario = {
    name: 'Walace',
    email:'contatowalaceramos@gmail.com',
    senha: 132097,
}

const user2: Usuario = {
    name: 'Paloma',
    email: 'pallomanety@gmail.com',
    senha: 13201997
}

/* Enum serve para por esécificações em determinados itens */