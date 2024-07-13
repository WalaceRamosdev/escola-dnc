class Aluno {
    id: number;
    nome: string;

    certificados: number;

    constructor(id: number, nome:string, certificados:number){
        this.id = id;
        this.nome = nome;
        this.certificados = certificados;
    }

    novoCertificado():number {
        this.certificados = this.certificados + 1
        return this.certificados
    }

}

const Aluno1 = new Aluno(1, 'Walace ', 5)