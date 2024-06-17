// * Utilizando FETCH API

// const viaCepApi = fetch("https://viacep.com.br/ws/01001000/json/");

// viaCepApi
//     .then((resposta) => {
//         const dados = resposta.json();
//         dados.then((dado) => console.log(dado));
//     })
//     .catch((erro) => {
//         console.log(erro);
//     })

// * Utilizando Async/Await

const baseURL = "https://dummyapi.io/data/v1/";

async function getUsers() {
    const API = await fetch(`${baseURL}user?created=1`, {
        headers: {
            "app-id": "66709841968b9a82f57ef2f8",
        },
    });
    const usuarios = await API.json();
    console.log(usuarios.data);
}

async function getUser(id) {
    const API = await fetch(`${baseURL}user/${id}`, {
        headers: {
            "app-id": "66709841968b9a82f57ef2f8",
        },
    });
    const usuario = await API.json();
    console.log(usuario);
}
async function createUser(nome, sobrenome, email) {
    const novoUsuario = {
        firstName: nome,
        lastName: sobrenome,
        email: email,
    };

    try {
        const API = await fetch(`${baseURL}user/create`, {
            method: "POST",
            headers: {
                "app-id": "66709841968b9a82f57ef2f8",
                "Content-type": "application/json",
            },
            body: JSON.stringify(novoUsuario),
        });
        const usuarioCriado = await API.json();
        console.log(usuarioCriado);
    } catch (error) {
        console.log(error);
    }

}

// getUsers()
// getUser("6670a20c17660c11765eaf8b");
createUser("Eni", "Silva", "eni@eni.com");
