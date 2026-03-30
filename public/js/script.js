const img = document.querySelector('.div-img-content');
const divsImgs = document.querySelectorAll('.img-filmes');
const divText = document.querySelector('.content-texts');

function replaceBackground(url) {
    const background = url.imagemBackground;
   img.style.backgroundImage = `linear-gradient(90deg,rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 80%),url('${background}')`;
}

function createlements(dadosfilme) {
    divText.innerHTML = '';

    const h1 = document.createElement('h1');
    const dados = document.createElement('p');
    const sinopse = document.createElement('p');

    h1.textContent = dadosfilme.nome;
    dados.textContent = `${dadosfilme.duracao} | ${dadosfilme.ano} | ${dadosfilme.diretor} | ${dadosfilme.nota}`;
    sinopse.textContent = dadosfilme.sinopse;

    h1.classList.add('content-text-h1');
    dados.classList.add('context-text-p-resumo');
    sinopse.classList.add('context-text-p');

    divText.appendChild(h1);
    divText.appendChild(dados);
    divText.appendChild(sinopse);


}

window.addEventListener('load', (e)=> {
    replaceBackground(JSON.parse(divsImgs[0].dataset.info));
    createlements(JSON.parse(divsImgs[0].dataset.info))
})


divsImgs.forEach((imgDiv) => {
    imgDiv.addEventListener('mouseenter', (e)=> {
        const el = e.target;
        const dadosfilme = JSON.parse(el.dataset.info);

        replaceBackground(dadosfilme);
        createlements(dadosfilme);
    })
})