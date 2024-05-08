import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Daniel", 15000, 1523686151)
diretor.cadastrarSenha("1234");

const gerente = new Gerente("Leo", 10000, 15285217491)
gerente.cadastrarSenha("5678");

const cliente = new Cliente("Ana", 78945612398, "555");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "5678")

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "555")
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


