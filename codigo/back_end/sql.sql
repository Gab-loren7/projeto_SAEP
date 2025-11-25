DROP TABLE professor;
DROP TABLE turmas;
DROP TABLE atividades;

CREATE TABLE professor (
    idProfessor SERIAL PRIMARY KEY,
    nomeProfessor VARCHAR(150) not null,
    emailProfessor VARCHAR(200) not null,
    senhaProfessor VARCHAR(8) not null
);

CREATE TABLE turmas (
    idTurma SERIAL PRIMARY KEY,
    nomeTurma VARCHAR(150) not null,
	disciplinaTurma VARCHAR(150) not null,
	horarioTurma VARCHAR(150) TIME
);

CREATE TABLE atividades (
    idAtividade SERIAL PRIMARY KEY,
    nomeAtividade VARCHAR(150) not null
);

SELECT * FROM professor;
SELECT * FROM turmas;
SELECT * FROM atividades;