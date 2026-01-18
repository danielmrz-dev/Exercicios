import type { Categoria } from "./categoria.type";
import type { Censura } from "./censura.type";

export interface Movie {
  id: number;
  src: string;
  alt: string;
  titulo: string;
  categoria: Categoria;
  censura: Censura;
  genero: string;
  duracao: number;
}