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
    imagemBackground: "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/376/o-poderoso-chefao-50-anos-versao-remasterizada-4k-hdr-sera-exibida-em-sessoes-especiais-nos-cinemas.jpg",
    imagemCard:"https://m.media-amazon.com/images/S/pv-target-images/7f707b21eb850859e8463398e26c4df4288e522996eb2bd074eadf8df66ff914.jpg"
  },
  {
    nome: "Batman: O Cavaleiro das Trevas",
    duracao: "2h 32min",
    ano: 2008,
    diretor: "Christopher Nolan",
    nota: 9.0,
    sinopse: "Quando a ameaça conhecida como o Coringa ressurge de seu passado, ele causa estragos e caos no povo de Gotham.",
    imagemBackground: "https://delfos.net.br/wp-content/uploads/2018/07/2018-07-17-cavaleirodastrevas10anos1.jpg",
    imagemCard:"https://m.media-amazon.com/images/S/pv-target-images/6f68a075c16eae000d0e9dade589562aa474f8b9b444e21142b6ee8370c233cf._UR1920,1080_CLs%7C1920,1080%7C/G/bundle/BottomRightCardGradient16x9.png,/G/01/digital/video/merch/subs/benefit-id/g-l/hbomaxus/logos/channels-logo-white-stacked.png%7C0,0,1920,1080+0,0,1920,1080+1679,885,162,117_kvf5dac2982c70c457de7e22fc098a329b_.jpg"
  },
  {
    nome: "A Lista de Schindler",
    duracao: "3h 15min",
    ano: 1993,
    diretor: "Steven Spielberg",
    nota: 9.0,
    sinopse: "Na Polônia ocupada pelos alemães durante a Segunda Guerra Mundial, o industrial Oskar Schindler começa a se preocupar com seus trabalhadores judeus após testemunhar sua perseguição.",
    imagemBackground: "https://ims.com.br/wp-content/uploads/2019/05/a-lista-de-schindler1_1920x1080.jpg",
    imagemCard:"https://m.media-amazon.com/images/S/pv-target-images/c77a67fd75030b969617c59bbc5dfdb22738cbd5abd21e40b8dd878781cfbe2a._UR1920,1080_.jpg"
  },
  {
    nome: "Pulp Fiction: Tempo de Violência",
    duracao: "2h 34min",
    ano: 1994,
    diretor: "Quentin Tarantino",
    nota: 8.9,
    sinopse: "As vidas de dois assassinos de aluguel, um boxeador, um gângster e sua esposa se entrelaçam em quatro histórias de violência e redenção.",
    imagemBackground: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEhqsa8gM5r8aLjmFZEoT5-5Xk2Hn8wcUWQB1Fws6QdbYQzwhrQlYt8XCLkrra1gflkCHLpO4qfBl3RdZb1ZxeeqTbotMiQbOm7h32pcxfbjAk5wT3x3AuN3Dbcnyunl-TbYMrEV3JhmTtuNSIAwE2KqyRRbJQWUtafDHHmHZHizvZwGPmOw3UZuhJIg/s1920/pulp-fiction_00423206.jpg",
    imagemCard:"https://m.media-amazon.com/images/S/pv-target-images/a5c7216f2dcbdea86f7f349a01241116d4513f5bc2ea052cd2a7f96ea0d66ffc.jpg"
  },
  {
    nome: "Interestelar",
    duracao: "2h 49min",
    ano: 2014,
    diretor: "Christopher Nolan",
    nota: 8.7,
    sinopse: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.",
    imagemBackground: "https://images3.alphacoders.com/551/thumb-1920-551456.jpg",
    imagemCard:"https://m.media-amazon.com/images/S/pv-target-images/144718a9727062e06b9ebb1e1e7cc389d6eb2a6732dff8ae688c6487eebbdef8._UR1920,1080_.jpg"
  },
  {
    nome: "Parasita",
    duracao: "2h 12min",
    ano: 2019,
    diretor: "Bong Joon-ho",
    nota: 8.5,
    sinopse: "A simbiose entre uma família pobre e uma rica é ameaçada quando a ganância e o preconceito colocam em risco o ecossistema entre elas.",
    imagemBackground: "https://sm.ign.com/ign_br/screenshot/default/98982_sg5u.jpg",
    imagemCard:"https://m.media-amazon.com/images/S/pv-target-images/a1c8bfbed91d316ef6c6e38928bc62eea4b5e551368d5dbaca933f8c569fd193.jpg"
  },
  {
    nome: "Cidade de Deus",
    duracao: "2h 10min",
    ano: 2002,
    diretor: "Fernando Meirelles",
    nota: 8.6,
    sinopse: "Nas favelas do Rio de Janeiro, dois rapazes seguem caminhos diferentes: um se torna fotógrafo e o outro um traficante.",
    imagemBackground: "https://images5.alphacoders.com/340/340268.jpg",
    imagemCard:"https://www.lab111.nl/wp-content/uploads/2019/11/Cidade-De-Deus-Bannerkopie.jpg"
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
    res.render('perfil');
})

const port = 8080;
app.listen(port, () => {
    if(port) {
        console.log('http://localhost:8080')
    }
});