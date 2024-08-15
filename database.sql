CREATE DATABASE BeatSync;

USE BeatSync;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_nasc AUTO_INCREMENT DATE,
    genero INT,
    role ENUM('admin', 'user') NOT NULL
);

CREATE TABLE musics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    duracao INT,
    genero INT,
    autores VARCHAR(30), 
    ritmo INT,
    titulo VARCHAR(45),
    instru_vocal VARCHAR(30),
    role ENUM('admin', 'user') NOT NULL
);