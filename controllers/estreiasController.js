import express from 'express';
import Estreia from '../models/estreiaModel.js';
import { where } from 'sequelize';
const router = express.Router();

router.get('/estreias', (req, res) => {
    Estreia.findAll().then(response => {
        res.render('estreias', {
            estreias : response
        });
    }).catch(e => console.log(e));
    
})

router.post('/estreias/cadastrar', (req, res) => {

    const url = req.body.url;
    const titulo = req.body.titulo;
    const genero = req.body.genero;
    const estreia = req.body.estreia;

    Estreia.create({
        urlImage: url, titulo: titulo, genero: genero, dataEstreia: estreia
    }).then(() => {
        res.redirect('/estreias')
    }).catch(e => console.log(e));
})

router.get('/estreias/excluir/:id', (req, res) => {
    const id = req.params.id;

    Estreia.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/estreias');
    }).catch(e => console.log(e));
})

router.get('/estreias/editar/:id', (req, res) => {
    const id = req.params.id;
    Estreia.findByPk(id).then((response) => {
        res.render('estreiasEditar', {
            estreia: response
        });
    }).catch(e => console.log(e));
})

router.post('/estreias/alterar', (req, res) => {
    const id = req.body.id;
    const url = req.body.url;
    const titulo = req.body.titulo;
    const genero = req.body.genero;
    const estreia = req.body.estreia;

    Estreia.update(
        {
            urlImage: url, titulo: titulo, genero: genero, dataEstreia: estreia
        },
        {
            where:{id: id}
        }
    ).then(() => {
        res.redirect('/estreias');
    }).catch(e => console.log(e));

})

export default router;