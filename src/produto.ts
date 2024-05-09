import { Categoria } from "./categoria";
import { Fornecedor } from "./fornecedor";

export class Produto {
    nome: string;
    descricao: string;
    quantidade: number;
    valor: number;
    categoria: Categoria;
    fornecedor: Fornecedor;

    constructor(nome: string, descricao: string, quantidade: number, valor: number, categoria: Categoria, fornecedor: Fornecedor) {
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor;
        this.categoria = categoria;
        this.fornecedor = fornecedor;
    }

    exibirInfo(): void {
        console.log(`
            Nome: ${this.nome},
            Descricao: ${this.descricao},
            Qtd: ${this.quantidade},
            Valor: ${this.valor}
        `);
        console.log("Categoria do produto: ");
        this.categoria.exibirInfo;
        console.log("Fornecedor do produto: ");
        this.fornecedor.exibirInfo;
    }
}