//THIS, VOID, CONSTRUCTOR (CONSTRUTOR DA CLASSE QUE INICIALIZA TODOS OS ATRIBUTOS)
import { Endereco } from "./endereco";
export class Cliente {
    nome: string;
    idade: number;
    email: string;
    endeco: Endereco;

    constructor(nome: string, idade: number, email: string, endereco: Endereco){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.endeco = endereco;
    }
    exibirInfo():void{
        console.log(`Nome: ${this.nome},
        console.log(idade: ${this.idade},
        console.log(email: ${this.email}`);
        console.log("Endereco");
        this.endeco.exibirInfo();
    }
}