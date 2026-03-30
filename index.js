const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static( 'public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/filmes', (req, res) => {
    res.render('filmes');
})

app.get('/estreias', (req, res) => {
    res.render('estreias');
})

app.get('/perfil', (req, res) => {
    res.render('perfil');
})

const port = 8080;
app.listen(port, () => {
    if(port) {
        console.log('http://localhost:8080')
    }
});