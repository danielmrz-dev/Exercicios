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

    // GET = Permite acessar (somente leitura) propriedades privadas por fora da classe

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    // SET = Permite alterar propriedades privadas por fora da classe

    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error("Formato inválido.")
        }
        this.#nome = novoNome
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
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo} `
    }
}