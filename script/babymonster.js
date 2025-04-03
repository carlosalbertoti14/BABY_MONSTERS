
    //SCRIPT PARA O SITE BABYMONSTER BRASIL

            const video = document.getElementById('intro-video');
            const image = document.getElementById('substitute-image');
            const homeButton = document.querySelector('nav a:first-child'); // Primeiro botão, que é "HOME"
            
            //CONFIGURAÇÃO DO VÍDEO QUANDO TERMINA
            video.addEventListener('ended', () => {
                video.style.display = 'none';
                image.style.display = 'flex';
            });
            

            //CONFIGURAÇÃO DO DE ATIVAÇÃO DO ICONE DE SOM
            const soundButton = document.getElementById('sound-toggle');
            soundButton.addEventListener('click', () => {
                if (video.muted) {
                    video.muted = false; // Ativar som
                    soundButton.textContent = '🔊'; // Ícone de som ligado
                } else {
                    video.muted = true; // Desativar som
                    soundButton.textContent = '🔇'; // Ícone de som desligado
                }
            });


             // Função para segurar a barra de menus no topo.
            window.addEventListener("scroll", function () {
            const menu = document.getElementById("fixo");
            const container = document.querySelector(".video-container");
            const containerBottom = container.offsetTop + container.offsetHeight;

            if (window.scrollY >= containerBottom) {
                menu.style.position = "fixed";
                menu.style.top = "0"; // Fixa no topo
            } else {
                menu.style.position = "relative";
                menu.style.top = "auto"; // Volta à posição inicial
            }
        });


        //FUNÇÃO PARA APARECER A LISTA

        document.querySelectorAll('ul > li > p').forEach(item => {
         item.addEventListener('click', function() {
        const subList = this.nextElementSibling;
        if (subList.style.display === 'block') {
            subList.style.display = 'none'; // Oculta se já está visível
        } else {
            subList.style.display = 'block'; // Exibe ao clicar
        }
        });
        });

        //CONFIGURA CAIXA DE EXPLICAÇÃO

        document.addEventListener('DOMContentLoaded', function() {
            const infoBoxShows = document.querySelectorAll('.infoboxshow');
        
            infoBoxShows.forEach(function(showSpan) {
                showSpan.addEventListener('click', function(event) {
                    event.stopPropagation(); // Impede a propagação do clique
        
                    const hiddenSpan = this.querySelector('.infoboxhiden'); // Encontra o span escondido dentro do clicado
        
                    if (hiddenSpan) {
                        hiddenSpan.style.display = hiddenSpan.style.display === 'block' ? 'none' : 'block';
                    }
        
                    // Esconde outros spans escondidos abertos
                    infoBoxShows.forEach(function(otherShowSpan) {
                        if (otherShowSpan !== showSpan) {
                            const otherHiddenSpan = otherShowSpan.querySelector('.infoboxhiden');
                            if (otherHiddenSpan && otherHiddenSpan.style.display === 'block') {
                                otherHiddenSpan.style.display = 'none';
                            }
                        }
                    });
                });
            });
        
            // Esconde os spans escondidos ao clicar fora de qualquer .infoboxshow
            document.addEventListener('click', function(event) {
                infoBoxShows.forEach(function(showSpan) {
                    if (!showSpan.contains(event.target)) {
                        const hiddenSpan = showSpan.querySelector('.infoboxhiden');
                        if (hiddenSpan && hiddenSpan.style.display === 'block') {
                            hiddenSpan.style.display = 'none';
                        }
                    }
                });
            });
        
            // Esconde os spans escondidos ao rolar a página
            window.addEventListener('scroll', function() {
                infoBoxShows.forEach(function(showSpan) {
                    const hiddenSpan = showSpan.querySelector('.infoboxhiden');
                    if (hiddenSpan && hiddenSpan.style.display === 'block') {
                        hiddenSpan.style.display = 'none';
                    }
                });
            });
        });

        // 