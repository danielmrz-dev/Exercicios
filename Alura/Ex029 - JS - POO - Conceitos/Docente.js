import User from "./User.js";

class Docente extends User {
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
}

const novoDocente = new Docente("Lina", "lina@lina.com", "10/08/1953")
// console.log(novoDocente);

console.log(novoDocente.aprovarEstudante("Daniel", 10, "Javascript"));
