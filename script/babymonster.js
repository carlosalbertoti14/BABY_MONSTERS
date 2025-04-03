
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

        // 