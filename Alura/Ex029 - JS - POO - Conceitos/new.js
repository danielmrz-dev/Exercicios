// function User(nome, email) {
//     this.nome = nome;
//     this.email = email;

//     this.exibirInfos = function () {
//         return `${this.nome}, ${this.email}`
//     }
// }

// const newUser = new User("Ana", "ana@ana.com")

// console.log(newUser.exibirInfos());

// function Admin(role) {
//     User.call(this, "Ana", "ana@ana.com");
//     this.role = role || "estudante";
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin("The Boss");

// console.log(novoUser);
// console.log(novoUser.role);

const user = {
    exibirInfos: function(nome) {
        return nome
    }
}

const novoUser = Object.create(user)
console.log(novoUser.exibirInfos("Ana The Boss"));
console.log(user.isPrototypeOf(novoUser));

