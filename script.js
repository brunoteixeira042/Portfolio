document.addEventListener("DOMContentLoaded", function() {
    const elementoTitulo = document.getElementById('titulo-h1');
    const elementoParagrafo = document.getElementById('paragrafo');
    const textoTitulo = "Olá 👋 meu nome é Bruno!";
    const textoParagrafo = "Back-End Developer";
    const intervalo = 150;
    const tempoVisivel = 2000; // Tempo que o texto ficará visível antes de reiniciar o loop (em milissegundos)

    function TextoEmMovimento(elemento, texto, intervalo, callback) {
        const charArray = texto.split('');
        let currentText = '';
        const type = setInterval(() => {
            if (charArray.length) {
                const next = charArray.shift();
                currentText += next;
                elemento.innerHTML = currentText;
            } else {
                clearInterval(type);
                if (callback) callback();
            }
        }, intervalo);
    }
    
    function iniciarLoop() {
        TextoEmMovimento(elementoTitulo, textoTitulo, intervalo, () => {
            setTimeout(() => {
                TextoEmMovimento(elementoParagrafo, textoParagrafo, intervalo, () => {
                    setTimeout(() => {
                        elementoTitulo.innerHTML = ''; // Limpa o texto do título
                        elementoParagrafo.innerHTML = ''; // Limpa o texto do parágrafo
                        iniciarLoop(); // Inicia o loop novamente
                    }, tempoVisivel); // Tempo que o texto fica visível antes de reiniciar o loop
                });
            }, tempoVisivel); // Tempo que o título fica visível antes de começar a animação do parágrafo
        });
    }
    
    iniciarLoop(); // Inicia o loop quando a página carrega
});
