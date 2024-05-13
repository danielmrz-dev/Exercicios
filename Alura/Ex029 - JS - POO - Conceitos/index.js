import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new Admin("Ana", "ana@ana.com", "20/09/1990")
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

const novoUser2 = new Docente("Daniel", "dan@dan", "25/03/1994")
console.log(novoUser2.exibirInfos);

