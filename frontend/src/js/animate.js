


// const elemento = document.getElementById("solutions");

// window.addEventListener("scroll", () => {
//     const posicao = elemento.getBoundingClientRect().top;
//     const alturaTela = window.innerHeight;

//     if (posicao < alturaTela - 100) {
//         elemento.classList.add("visivel");
//     }
// });

// const services = document.getElementById("serviceborder");
// window, addEventListener("scroll", () => {
//     const posicao2 = services.getBoundingClientRect().top;
//     const alturaTela2 = window.innerHeight;

//     if (posicao2 < alturaTela2 - 100) {
//         services.classList.add("visivel2");
//     }
// });

// Seleciona todos os elementos que têm a classe 'animarCss'

const elementosParaAnimar = document.querySelectorAll('.animarCss');

// Função que verifica se o elemento está visível na tela
function animarAoRolar() {
    // Percorre cada elemento da lista
    elementosParaAnimar.forEach(elemento => {
        // Pega a posição do topo do elemento em relação ao topo da janela
        const posicao = elemento.getBoundingClientRect().top;
        // Pega a altura da tela do usuário
        const alturaTela = window.innerHeight;

        // Se o topo do elemento estiver a menos de 100px do fundo da tela
        if (posicao < alturaTela - 100) {
            // Adiciona a classe 'visivel' ao elemento para ativar a animação
            elemento.classList.add('visivel');
        }
    });
}

// Adiciona um "ouvinte" de evento de rolagem na janela
// Isso faz com que a função 'animarAoRolar' seja executada toda vez que o usuário rolar a página
window.addEventListener('scroll', animarAoRolar);

// Adiciona a classe 'visivel' a elementos que já estão na tela quando a página carrega
document.addEventListener('DOMContentLoaded', animarAoRolar);















