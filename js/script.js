const pato = document.querySelector('.pato');
const bolhas = document.querySelector('.bolhas');

// Função para fazer o pato pular
const jump = () => {
    pato.classList.add('jump');

    setTimeout(() => {
        pato.classList.remove('jump');
    }, 1500); // Tempo do pulo, ajustado ao CSS
};

// Loop para verificar colisões
const loop = setInterval(() => {
    const bolhasPosition = bolhas.offsetLeft; // Posição horizontal das bolhas
    const patoPosition = parseFloat(window.getComputedStyle(pato).bottom.replace('px', '')); // Posição vertical do pato

    // Verifica colisão
    if (bolhasPosition <= 110 && bolhasPosition > 0 && patoPosition < 90) {
        // Para a animação das bolhas
        bolhas.style.animation = 'none';
        bolhas.style.left = `${bolhasPosition}px`;

        // Para a animação do pato
        pato.style.animation = 'none';
        pato.style.bottom = `${patoPosition}px`;

        // Troca a imagem do pato
        pato.src = `./imagens/pato-morre.gif?${new Date().getTime()}`;
        pato.style.width = '69px';
        pato.style.marginLeft = '50px';

        // Para o loop
        clearInterval(loop);
    }
}, 10);

// Adiciona o evento de pulo ao pressionar uma tecla
document.addEventListener('keydown', jump);
