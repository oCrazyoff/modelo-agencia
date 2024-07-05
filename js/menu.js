//menu ajustavel
if (window.innerWidth >= 1020) {
    window.addEventListener("scroll", function () {
        let cabecalho = this.document.querySelector('#menu')
        cabecalho.classList.toggle('rolagem', window.scrollY > 0)
    })
}

//menu mobile
const btnMobile = document.querySelector('.btn-mobile');
const item = document.querySelector('.menu ul');

function ativarMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('nav')
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', ativarMenu);
btnMobile.addEventListener('touchstart', ativarMenu);
item.addEventListener('click', ativarMenu);
item.addEventListener('touchstart', ativarMenu);