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
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ mensagem: "Livro cadastrado com sucesso!", livro: novoLivro })
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
}