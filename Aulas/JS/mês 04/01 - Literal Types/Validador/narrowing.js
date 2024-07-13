"use strict";
function Validador(cpf) {
    if (typeof (cpf) === 'number') {
        console.log('o dado precisa ser tratado');
    }
    else {
        console.log('os dados estão ok!');
    }
}
const cpfA = '152.596.357-01';
const cpfB = 15259635701;
Validador(cpfA);
Validador(cpfB);
