const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static( 'public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/filmes', (req, res) => {
    const filmes = [
  {
    nome: "O Poderoso Chefão",
    duracao: "2h 55min",
    ano: 1972,
    diretor: "Francis Ford Coppola",
    nota: 9.2,
    sinopse: "O patriarca envelhecido de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.",
    imagemBackground: "/img/background/grandFatherBackground.jpg",
    imagemCard:"/img/card/grandFatherCard.jpg"
  },
  {
    nome: "Batman: O Cavaleiro das Trevas",
    duracao: "2h 32min",
    ano: 2008,
    diretor: "Christopher Nolan",
    nota: 9.0,
    sinopse: "Quando a ameaça conhecida como o Coringa ressurge de seu passado, ele causa estragos e caos no povo de Gotham.",
    imagemBackground: "/img/background/batmanBackground.jpg",
    imagemCard:"/img/card/batmanCard.jpg"
  },
  {
    nome: "A Lista de Schindler",
    duracao: "3h 15min",
    ano: 1993,
    diretor: "Steven Spielberg",
    nota: 9.0,
    sinopse: "Na Polônia ocupada pelos alemães durante a Segunda Guerra Mundial, o industrial Oskar Schindler começa a se preocupar com seus trabalhadores judeus após testemunhar sua perseguição.",
    imagemBackground: "/img/background/listaBackground.jpg",
    imagemCard:"/img/card/listaCard.jpg"
  },
  {
    nome: "Pulp Fiction: Tempo de Violência",
    duracao: "2h 34min",
    ano: 1994,
    diretor: "Quentin Tarantino",
    nota: 8.9,
    sinopse: "As vidas de dois assassinos de aluguel, um boxeador, um gângster e sua esposa se entrelaçam em quatro histórias de violência e redenção.",
    imagemBackground: "/img/background/PulpBackground.jpg",
    imagemCard:"/img/card/pulpCard.jpg"
  },
  {
    nome: "Interestelar",
    duracao: "2h 49min",
    ano: 2014,
    diretor: "Christopher Nolan",
    nota: 8.7,
    sinopse: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
    imagemBackground: "/img/background/interestelarBackground.jpg",
    imagemCard:"/img/card/interestelarCard.jpg"
  },
  {
    nome: "Parasita",
    duracao: "2h 12min",
    ano: 2019,
    diretor: "Bong Joon-ho",
    nota: 8.5,
    sinopse: "A simbiose entre uma família pobre e uma rica é ameaçada quando a ganância e o preconceito colocam em risco o ecossistema entre elas.",
    imagemBackground: "/img/background/ParasitaBackground.jpg",
    imagemCard:"/img/card/parasitaCard.jpg"
  },
  {
    nome: "Cidade de Deus",
    duracao: "2h 10min",
    ano: 2002,
    diretor: "Fernando Meirelles",
    nota: 8.6,
    sinopse: "Nas favelas do Rio de Janeiro, dois rapazes seguem caminhos diferentes: um se torna fotógrafo e o outro um traficante.",
    imagemBackground: "/img/background/cidadeBackground.jpg",
    imagemCard:"/img/card/cidadeCard.jpg"
  }
];
    res.render('filmes', {
        filmes : filmes
    });
})

app.get('/estreias', (req, res) => {
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

app.get('/perfil', (req, res) => {
    const user = {nome : "Isabella Montenegro", email : "isabela@gmail.com", img : "/img/perfil/perfil.png"}
    res.render('perfil', {
        user: user
    });
})

const port = 8080;
app.listen(port, () => {
    if(port) {
        console.log('http://localhost:8080')
    }
});