export default class User {

    // ATRIBUTOS PRIVADOS
    #nome // Declarar fora do contrutor pra poder utilizar
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo
    }

    #montaObjetoUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos() {
        const objetoUser = this.#montaObjetoUser()
        return objetoUser
    }
}