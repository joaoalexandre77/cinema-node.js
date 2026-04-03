import express from 'express';

import homeController from './controllers/homeController.js';
import filmeController from './controllers/filmeController.js';
import estreiasController from './controllers/estreiasController.js';
import perfilController from './controllers/perfilController.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static( 'public'));

app.use('/', homeController);
app.use('/', filmeController);
app.use('/', estreiasController);
app.use('/', perfilController);

const port = 8080;
app.listen(port, (err) => {
    if(!err) console.log('http://localhost:8080');
});