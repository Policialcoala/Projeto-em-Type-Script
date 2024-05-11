export class Endereco {
    rua: string;
    numero: number;
    cidade: string;
    estado: string;
    cep: string;

    constructor(rua: string, numero: number, cidade: string, estado: string, cep: string) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    } //Construtor é um mecanismo que toda classe de um sistema orientado a objeto TEM
    
    exibirInfo(): void {
        console.log(`
        Rua: ${this.rua},
        nº: ${this.numero},
        Cidade: ${this.cidade},
        Estado: ${this.estado},
        Cep: ${this.cep}
        `);
    }
}