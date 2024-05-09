import User from "./User.js";

class Docente extends User {
    aprovarEstudante(aluno, nota) {

    }
}

const novoDocente = new Docente("Lina", "lina@lina.com", "10/08/1953", "Docente")
console.log(novoDocente);
