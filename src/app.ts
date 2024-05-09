import { Categoria } from "./categoria";
import { Fornecedor } from "./fornecedor";
import { Produto } from "./produto";

const categoria = new Categoria("Teste2", "Eletrônicos");
const fornecedor = new Fornecedor("Lozer", "Tudo tem", "6123");
const produto = new Produto("TV", "teste", 15, 2, categoria, fornecedor);

produto.exibirInfo();