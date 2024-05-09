const user = {
    nome: "Juliana",
    email: "juliana@hotmail.com",
    nascimento: "20/09/1990",
    role: "estudante",
    ativo: true,

    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Ana",
    email: "ana@hotmail.com",
    nascimento: "25/03/1994",
    role: "admin",

    criarCurso() {
        console.log("Curso criado");
    }
    
}

Object.setPrototypeOf(admin, user)

admin.criarCurso();
admin.exibirInfos();