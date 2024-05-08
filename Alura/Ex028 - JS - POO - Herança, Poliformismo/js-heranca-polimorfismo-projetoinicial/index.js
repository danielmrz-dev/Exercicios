import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Daniel", 15000, 1523686151)
diretor.cadastrarSenha("1234");

const gerente = new Gerente("Leo", 10000, 15285217491)

console.log(diretor);
console.log(gerente);

const estaLogado = SistemaAutenticacao.login(diretor, "1234");

console.log(estaLogado);


