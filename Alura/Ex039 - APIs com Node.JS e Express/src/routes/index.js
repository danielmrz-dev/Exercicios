import express from "express";
import { livrosRoutes } from "./livros-routes.js";

export const rotasDosLivros = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node"));
    app.use(express.json(), livrosRoutes)
}

