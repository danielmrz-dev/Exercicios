import { autor } from "../models/autor.js";
import { livro } from "../models/livro.js";

export class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaDeLivros = await livro.find({})
            res.status(200).json(listaDeLivros);            
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - Falha na requisição.` })
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);            
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - Falha na requisição.` })
        }
    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ mensagem: "Livro cadastrado com sucesso!", livro: livroCriado })
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - falha ao cadastrar livro.` })
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ mensagem: "Livro editado com sucesso." });            
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - Falha ao atualizar o livro.` })
        }
    }

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ mensagem: "Livro excluído com sucesso." });            
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - Falha ao excluir o livro.` })
        }
    }

    static async buscaLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora })
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - Falha na busca.` })
        }
    }
}