import express from 'express';
const router = express.Router();

router.get('/estreias', (req, res) => {
    const estreias = [
        {   
            Titulo:"Super Mario Galaxy: O Filme",
            genero:"Animação / Aventura",
            data: "02/04",
            img: "https://www.gamereactor.pt/media/16/supermariogalaxy_4831683b.jpg"
        },
        {   
            Titulo:"Michael",
            genero:"Cinebiografia / Drama",
            data: "23/04",
            img: "https://4kwallpapers.com/images/wallpapers/michael-2026-8k-1920x1080-24508.jpg"
        },
        {   
            Titulo:"Mortal Kombat 2",
            genero:"Ação / Fantasia",
            data: "14/05",
            img: "https://images3.alphacoders.com/139/thumb-1920-1398550.jpg"
        },
        {   
            Titulo:"Se Eu Fosse Você 3",
            genero:"Comédia",
            data: "04/06",
            img: "https://www.acidadeon.com/tudoep/wp-content/uploads/sites/10/2024/07/b9acee0ed60ca8c445f9222381556f6523f037fd28e31ece93076bd9a1a857f6_2024-07-02_17-48-35_jpg_2024-07-02_17-48-35.webp"
        },
        {   
            Titulo:"Homem-Aranha: Um Novo Dia",
            genero:"Aventura / Ação",
            data: "30/07",
            img: "https://rollingstone.com.br/wp-content/uploads/2026/03/Trailer-de-Homem-Aranha-Um-Novo-Dia-supera-recorde-historico-de-Deadpool-e-Wolverine.jpg"
        },
        {   
            Titulo:"Duna: Parte 3",
            genero:"Ficção Científica",
            data: "17/12",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IAo6PE9Er0GvFeJyuIxsrCcO6_NPRRr3pQ&s"
        }

    ];
    res.render('estreias', {
        estreias : estreias
    });
})

export default router;