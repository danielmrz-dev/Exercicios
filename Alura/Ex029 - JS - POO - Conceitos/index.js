import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoAdmin = new Admin("Ana", "ana@ana.com", "20/09/1990")
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente("Dan", "dan@dan.com", "25/03/1994")
console.log(novoDocente.exibirInfos());




