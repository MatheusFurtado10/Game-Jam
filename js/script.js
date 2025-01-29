const pato = document.querySelector('.pato');
const bolhas = document.querySelector('.bolhas');

const jump = () => {
    pato.classList.add('jump');

    setTimeout(() => {
        pato.classList.remove('jump');
    }, 1500);
};

const loop = setInterval(() => {
    const bolhasPosition = bolhas.offsetLeft;
    const patoPosition = +window.getComputedStyle(pato).bottom.replace('px', '');

    if (bolhasPosition <= 110  && bolhasPosition > 0 && patoPosition < 90  ) {
        bolhas.style.animation = 'none';
        bolhas.style.left = `${bolhasPosition}px`;

        pato.style.animation = 'none';
        pato.style.bottom = `${patoPosition}px`;

        pato.src = './imagens/pato-morre.gif?' + new Date().getTime();
        pato.style.width = '69px';
        pato.style.marginLeft = '50px';

        clearInterval(loop);
        
    } 
}, 10);

document.addEventListener('keydown', jump);