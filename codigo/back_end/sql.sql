DROP TABLE Professor;
DROP TABLE Turmas;
DROP TABLE Atividades;

CREATE TABLE Professor (
    idProfessor SERIAL PRIMARY KEY,
    nomeProfessor VARCHAR(150) not null,
    emailProfessor VARCHAR(200) not null,
    senhaProfessor VARCHAR(8) not null
);

CREATE TABLE Turmas (
    idTurma SERIAL PRIMARY KEY,
    nomeTurma VARCHAR(150) not null
);

CREATE TABLE Atividades (
    idAtividade SERIAL PRIMARY KEY,
    nomeAtividade VARCHAR(150) not null
);

SELECT * FROM Professor;
SELECT * FROM Turmas;
SELECT * FROM Atividades;