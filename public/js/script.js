const img = document.querySelector('.div-img-content');
const divsImgs = document.querySelectorAll('.img-filmes');

function replaceBackground(url) {
   img.style.backgroundImage = `linear-gradient(85deg,rgba(0, 0, 0, 1) 33%, rgba(0, 0, 0, 0) 87%),url('${url}')`;
}

function defaultBackground(url) {
    img.style.backgroundImage = `linear-gradient(85deg,rgba(0, 0, 0, 1) 33%, rgba(0, 0, 0, 0) 87%),url('${url}')`;
}

    window.addEventListener('load', (e)=> {
        defaultBackground(divsImgs[0].src)
    })


divsImgs.forEach((imgDiv) => {
    imgDiv.addEventListener('mouseenter', (e)=> {
        const el = e.target;
        if(el) replaceBackground(el.src)
    })
})