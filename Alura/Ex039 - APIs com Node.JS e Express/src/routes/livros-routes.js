import express from "express";
import { LivroController } from "../controllers/livro-controller.js";

export const livrosRoutes = express.Router();

livrosRoutes.get('/livros', LivroController.listarLivros);
livrosRoutes.get('/livros/:id', LivroController.listarLivroPorId);
livrosRoutes.post('/livros', LivroController.cadastrarLivro);
livrosRoutes.put('/livros/:id', LivroController.atualizarLivro);
livrosRoutes.delete('/livros/:id', LivroController.excluirLivro);