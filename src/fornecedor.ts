export class Fornecedor{
    nome: string;
    descricao: string;
    telefone: string;

    constructor (nome: string, descricao: string, telefone: string){
        this.nome = nome;
        this.descricao = descricao;
        this.telefone = telefone;
    }
    exibirInfo():void{
        console.log(`
            Nome: ${this.nome};
            Descricao: ${this.descricao};
            Telefone: ${this.telefone}
        `);
    }
}