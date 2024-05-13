import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "Admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(curso, vagas) {
        return `Curso de ${curso} criado com ${vagas} vagas.`
    }

    exibirInfos() {
        return `O usuário ${this.nome} é um ${this.role}.`
    }
}