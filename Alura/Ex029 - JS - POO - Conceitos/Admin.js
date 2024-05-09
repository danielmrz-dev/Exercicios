import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "Admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso() {

    }
}

const novoAdmin = new Admin("Ana", "ana@ana.com", "20/09/1990")
console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());