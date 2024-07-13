"use strict";
class Aluno {
    constructor(id, nome, certificados) {
        this.id = id;
        this.nome = nome;
        this.certificados = certificados;
    }
    novoCertificado() {
        this.certificados = this.certificados + 1;
        return this.certificados;
    }
}
const Aluno1 = new Aluno(1, 'Walace ', 5);
