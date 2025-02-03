import express from 'express';
import { connectDatabase } from './config/db-connect.js';
import { livro } from "./models/livro.js"


export const app = express();

const connection = await connectDatabase();

connection.on("error", (erro) => {
    console.error("Erro de conexão => ", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados bem sucedida.");
    
})

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso de node');
})

app.get('/livros', async (req, res) => {
    const listaDeLivros = await livro.find({})
    res.status(200).json(listaDeLivros);
})

app.get('/livros/:id', async (req, res) => {
    const index = buscaLivro(req.params.id)
    const livroEncontrado = livros[index];

    if (!livroEncontrado) {
        return res.status(400).json({ mensagem: "Livro não encontrado." })
    }

    res.status(200).json(livroEncontrado);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).json({ mensagem: "Livro cadastrado com sucesso!" })
})

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id)
    const livroParaEditar = livros[index];

    if (index === -1) {
        return res.status(400).json({ mensagem: "Livro não encontrado." })
    }

    livroParaEditar.titulo = req.body.titulo;
    res.status(201).json({ mensagem: "Livro alterado com sucesso." })
})

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);

    if (index === -1) {
        return res.status(400).json({ mensagem: "Livro não encontrado!" })
    }
    
    livros.splice(index, 1)
    res.status(200).json({ mensagem: "Livro excluído com sucesso." })
})