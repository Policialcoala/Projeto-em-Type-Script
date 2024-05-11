import { Endereco } from "./endereco";
import { Cliente } from "./cliente";

const endeco = new Endereco("blue", 15, "VG", "MT", "48274517320");
const cliente = new Cliente("Quaio", 17, "q@aio.com", endeco);

//Exibição de dados
cliente.exibirInfo();