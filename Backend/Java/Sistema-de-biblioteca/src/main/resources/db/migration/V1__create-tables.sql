CREATE TABLE usuarios
(
    id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name     VARCHAR(100) NOT NULL,
    email    VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE livros
(
    id     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    titulo VARCHAR(255) NOT NULL,
    autor  VARCHAR(100) NOT NULL
);

CREATE TABLE emprestimos
(
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id      UUID      NOT NULL,
    livro_id        UUID      NOT NULL,
    data_emprestimo TIMESTAMP NOT NULL,
    data_devolucao  TIMESTAMP,

    CONSTRAINT fk_emprestimo_usuario
        FOREIGN KEY (usuario_id)
            REFERENCES usuarios (id),

    CONSTRAINT fk_emprestimo_livro
        FOREIGN KEY (livro_id)
            REFERENCES livros (id)
);