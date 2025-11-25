const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       // seu usuário do PostgreSQL
  host: 'localhost',      // onde o banco está rodando
  database: 'db_professor', // nome do seu banco
  password: 'gabriel',       // sua senha
  port: 5433,             // porta padrão
});

pool.connect()
  .then(() => console.log('✅ Conectado ao PostgreSQL'))
  .catch(err => console.error('❌ Erro de conexão', err));

module.exports = pool;