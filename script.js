/**
 * SISTEMA INTERATIVO - CIDADANIA DIGITAL E IA
 */

// Garante que o código execute apenas após o carregamento completo do HTML
document.addEventListener("DOMContentLoaded", () => {
    inicializarMenu();
});

/**
 * 1. GERENCIAMENTO DO QUIZ
 * Valida a resposta do usuário, aplica classes visuais do CSS e exibe mensagens.
 * @param {HTMLElement} elemento - O elemento da opção clicada.
 * @param {boolean} status - Se a resposta é verdadeira (true) ou falsa (false).
 */
function verificarResposta(elemento, status) {
    // Seleciona todas as opções do quiz dentro do container correspondente
    const container = elemento.parentElement;
    const opcoes = container.querySelectorAll('.opcao-quiz');
    const resultado = document.getElementById('resultado-quiz');

    // Remove classes de feedback anteriores de todas as opções
    opcoes.forEach(op => {
        op.classList.remove('correta', 'errada');
    });

    // Aplica o feedback visual e a mensagem com base na escolha do usuário
    if (status === true) {
        elemento.classList.add('correta');
        resultado.innerHTML = "🎉 Correto! A transparência é a base da cidadania digital.";
        resultado.style.color = "var(--cor-sucesso)"; // Usa a variável do CSS
    } else {
        elemento.classList.add('errada');
        resultado.innerHTML = "❌ Tente novamente. Pense no impacto coletivo da desinformação.";
        resultado.style.color = "var(--cor-erro)"; // Usa a variável do CSS
    }
}

/**
 * 2. COMPORTAMENTO DO MENU & NAVEGAÇÃO
 * Adiciona efeitos visuais ao rolar a página e corrige comportamentos de link.
 */
function inicializarMenu() {
    const header = document.querySelector('header');

    // Altera o fundo do cabeçalho ao rolar a página (efeito blur/escurecer)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(11, 15, 25, 0.95)";
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
        } else {
            header.style.backgroundColor = "rgba(11, 15, 25, 0.9)";
            header.style.boxShadow = "none";
        }
    });

    // Adiciona suporte a rolagem suave nativa para navegadores antigos se necessário
    const linksMenu = document.querySelectorAll('.nav-menu a, .btn');
    linksMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Verifica se o link é uma âncora interna
            if (href.startsWith('#')) {
                e.preventDefault();
                const elementoDestino = document.querySelector(href);
                
                if (elementoDestino) {
                    elementoDestino.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}
