const bolsa = [
    'Notebook', 
    'Moletom',
    'Escolva de dente',
    'Celular',
    'Carteira',
    'Carregador',
    'Mouse' 
]

console.log(bolsa)

for(let i = 0; i < bolsa.length; i++) {
    console.log(bolsa [i])
    if (bolsa[i] == 'Carteira') break
}