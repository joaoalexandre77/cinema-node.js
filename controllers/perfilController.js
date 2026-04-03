import express from 'express';
const router = express.Router();

router.get('/perfil', (req, res) => {
    const user = {nome : "Isabella Montenegro", email : "isabela@gmail.com", img : "/img/perfil/perfil.png"}
    res.render('perfil', {
        user: user
    });
})

export default router;