import express from 'express';
import { connectDatabase } from './config/db-connect.js';
import { rotasDosLivros } from "./routes/index.js";

export const app = express();
rotasDosLivros(app);

const connection = await connectDatabase();

connection.on("error", (erro) => {
    console.error("Erro de conexão => ", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados bem sucedida.");
})