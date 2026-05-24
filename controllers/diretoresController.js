import express from 'express';
import Diretor from '../models/diretoresModel.js';
const router = express.Router();

router.get("/diretores", (req, res) => {
    Diretor.findAll().then(consulta => {
        res.render("diretores", {
            diretores: consulta
        })
    })
})

router.post("/diretores/cadastrar", function(req,res){
    const nome = req.body.nome;
    const idade = req.body.idade;
    const genero = req.body.genero;

    Diretor.create({
        nomeDiretor: nome,
        idadeDiretor: idade,
        generoDiretor: genero
    }).then(()=>{
        res.redirect("/diretores");
    }).catch((erro)=>{
        console.log(erro);
    })
})

router.get("/diretores/excluir/:id", function(req, res){
    const id = req.params.id;

    Diretor.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect("/diretores");
    }).catch((erro)=>{
        console.log(erro);
    })
})

router.get("/diretores/alterar/:id", function(req, res){
    const id = req.params.id;

    Diretor.findByPk(id).then((consulta)=>{
        res.render("alterarDiretor",{
            diretores: consulta
        })
    }).catch((erro)=>{
        console.log(erro)
    })
})

router.post("/diretores/alterar", function(req, res){
    const id = req.body.id;
    const nome = req.body.nome;
    const idade = req.body.idade;
    const genero = req.body.genero;

    Diretor.update({
        nomeDiretor: nome,
        idadeDiretor: idade,
        generoDiretor: genero
    },
    {
        where:{
            id: id
        }
    }).then(()=>{
        res.redirect("/diretores")
    }).catch((erro)=>{
        console.log(erro)
    })
})

export default router;