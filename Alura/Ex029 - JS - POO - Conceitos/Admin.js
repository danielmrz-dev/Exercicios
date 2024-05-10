import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "Admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(curso, vagas) {
        return `Curso de ${curso} criado com ${vagas} vagas.`
    }
}

const novoAdmin = new Admin("Ana", "ana@ana.com", "20/09/1990")
// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());

console.log(novoAdmin.criarCurso("Javascript", 50))

