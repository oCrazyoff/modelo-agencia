//menu ajustavel
if (window.innerWidth >= 1020) {
    window.addEventListener("scroll", function () {
        let cabecalho = this.document.querySelector('#cabecalho')
        cabecalho.classList.toggle('rolagem', window.scrollY > 0)
    })
}


//menu mobile
const btnMobile = document.querySelector('.btn-mobile');
const menu = document.querySelector('.menu');
const item = document.querySelector('ul');

btnMobile.addEventListener('click', () => {
    menu.classList.toggle('active');
});

item.addEventListener('click', () => {
    menu.classList.toggle('active');
});