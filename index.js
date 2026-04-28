import express from 'express';
import connection from './config/sequelize-config.js';

import homeController from './controllers/homeController.js';
import filmeController from './controllers/filmeController.js';
import estreiasController from './controllers/estreiasController.js';
import perfilController from './controllers/perfilController.js';

// Realizando a conexão com o banco de dados
connection.authenticate()
.then((response) => {
    console.log("Conexão com o banco de dados realizada com sucesso")
})
.catch((e) => {console.log(e)});

// Criando o banco de dados (Somente se ainda não existir)
connection.query("CREATE DATABASE IF NOT EXISTS cinemajs").then(() => {
    console.log("O banco de dados está criado");
})
.catch((e) => {
    console.log(`Ocorreu um erro ao criar o banco de dados. erro: ${e}`);
})

const app = express();

app.set('view engine', 'ejs');

app.use(express.static( 'public'));

//Define o urlencoded para aceitar dados de formularios
app.use(express.urlencoded({extended: false}));

app.use('/', homeController);
app.use('/', filmeController);
app.use('/', estreiasController);
app.use('/', perfilController);

const port = 8080;
app.listen(port, (err) => {
    if(!err) console.log('http://localhost:8080');
});