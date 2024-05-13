import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "Docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(aluno, nota, curso) {
        if (nota >= 7) {
            return `Estudante ${aluno} teve uma nota de ${nota} no curso de ${curso} e está aprovado(a).`
        } else {
            return `Estudante ${aluno} teve uma nota de ${nota} no curso de ${curso} e está reprovado(a).`
        }
    }

    exibirInfos() {
        return `O usuário ${this.nome} é um ${this.role}, porém tem acesso.`
    }
}