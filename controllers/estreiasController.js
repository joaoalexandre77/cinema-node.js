import express from 'express';
import Estreia from '../models/estreiaModel.js';
import Diretor from '../models/diretoresModel.js';
import { where } from 'sequelize';
const router = express.Router();

router.get('/estreias', (req, res) => {
    Promise.all([
        Estreia.findAll({
            include: [
                {
                    model: Diretor,
                    required: true
                },
            ],
        }),
        Diretor.findAll(),
    ]).then(([estreias, diretores]) => {
        res.render("estreias", {
            estreias: estreias,
            diretores: diretores
        })
    }).catch((erro) =>{
        console.log(erro);
    })
    
})

router.post('/estreias/cadastrar', (req, res) => {

    const url = req.body.url;
    const titulo = req.body.titulo;
    const genero = req.body.genero;
    const estreia = req.body.estreia;
    const diretor = req.body.diretorId;

    Estreia.create({
        urlImage: url, titulo: titulo, genero: genero, dataEstreia: estreia, idDiretor: diretor
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

    Promise.all([
        Estreia.findByPk(id),
        Diretor.findAll()
    ]).then(([estreias, diretores]) => {
        res.render("estreiasEditar", {
            estreias: estreias,
            diretores: diretores
        })
    }).catch((erro) =>{
        console.log(erro);
    })
    
})

router.post('/estreias/alterar', (req, res) => {
    const id = req.body.id;
    const url = req.body.url;
    const titulo = req.body.titulo;
    const genero = req.body.genero;
    const estreia = req.body.estreia;
    const diretor = req.body.diretorId;

    Estreia.update(
        {
            urlImage: url, titulo: titulo, genero: genero, dataEstreia: estreia, idDiretor: diretor
        },
        {
            where:{id: id}
        }
    ).then(() => {
        res.redirect('/estreias');
    }).catch(e => console.log(e));

})

export default router;