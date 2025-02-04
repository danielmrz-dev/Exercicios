import { autor } from "../models/autor.js";

export class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaDeAutores = await autor.find({})
            res.status(200).json(listaDeAutores);            
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - Falha na requisição.` })
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);            
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - Falha na requisição.` })
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ mensagem: "Autor cadastrado com sucesso!", autor: novoAutor })
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - falha ao cadastrar autor.` })
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ mensagem: "Autor editado com sucesso." });            
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - Falha ao atualizar o autor.` })
        }
    }

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ mensagem: "Autor excluído com sucesso." });            
        } catch (error) {
            res.status(500).json({ mensagem: `${error.message} - Falha ao excluir o autor.` })
        }
    }
}