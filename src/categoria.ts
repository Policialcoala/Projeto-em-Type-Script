export class Categoria{
    titulo: string;
    descricao: string;

    constructor (titulo: string, descricao: string){
        this.titulo = titulo;
        this.descricao = descricao;
    }

    exibirInfo():void{
        console.log(`
            Titulo: ${this.titulo}
            Descricao: ${this.descricao}
        `);
    }
}