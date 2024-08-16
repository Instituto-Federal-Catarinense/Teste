CREATE DATABASE BeatSync;

USE BeatSync;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    data_nasc DATE,
    genero VARCHAR(20),
    role ENUM('admin', 'user') NOT NULL
);

CREATE TABLE musics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    duracao FLOAT,
    genero VARCHAR(255),
    autores VARCHAR(30), 
    ritmo VARCHAR(30),
    instru_vocal VARCHAR(30)
);