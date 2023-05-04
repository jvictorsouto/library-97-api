// pacotes
require('dotenv/config');
const express = require('express')

// inicar o express
const app = express();

// configurações
require('./db');
// middiewares gerais

// rotas

// gerenciamento de erros
app.use((req, res) => {
    res.status(404).json('Não encontrado');
})

// exportar app
module.exports = app;