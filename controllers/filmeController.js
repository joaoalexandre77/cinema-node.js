import express from 'express';
const router = express.Router();

router.get('/filmes', (req, res) => {
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

export default router;