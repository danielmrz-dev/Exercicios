export interface ILivro {
    titulo: string;
    autoria: string;
    imagem: string;
    favorito: boolean;
    genero: IGeneroLiterario;
}

export interface IGeneroLiterario {
    id: string;
    value: string;
    livros: ILivro[]
}