CREATE TABLE usuarios
(
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    email           VARCHAR(100) NOT NULL UNIQUE,
    senha           VARCHAR(100) NOT NULL,
    nome            VARCHAR(100) NOT NULL,
    nome_de_usuario VARCHAR(100) NOT NULL UNIQUE,
    mini_bio        VARCHAR(30),
    bio             TEXT
);