const video = document.getElementById('intro-video');
        const image = document.getElementById('substitute-image');
        const homeButton = document.querySelector('nav a:first-child'); // Primeiro botão, que é "HOME"
        const soundButton = document.getElementById('sound-toggle');

        //CONFIGURAÇÃO DO VÍDEO QUANDO TERMINA
        video.addEventListener('ended', () => {
            video.style.display = 'none';
            image.style.display = 'flex';
        });

        // CONFIGURAÇÃO PARA QUANDO A IMAGEM FOR CLICADA
        image.addEventListener('click', () => {
            video.pause(); // Pausa o vídeo antes de voltar ao início
            video.currentTime = 0; // Define o tempo do vídeo para o início
            video.muted = false;   // Ativa o som do vídeo
            video.style.display = 'flex'; // Mostra o vídeo novamente
            image.style.display = 'none'; // Esconde a imagem
            soundButton.textContent = '🔊'; // Garante que o ícone de som esteja ligado
            video.play(); // Inicia a reprodução do vídeo
        });

        //CONFIGURAÇÃO DO DE ATIVAÇÃO DO ICONE DE SOM
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

        //SCRIPT DO CARROCEL

    
        const swiper = new Swiper('.js-banner-swiper', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            speed: 900, // <---- Adicione esta linha para definir a velocidade da transição em 800ms (0.8 segundos)
            on: {
              slideChangeTransitionStart: function () {
                swiper.slides.forEach(slide => {
                  slide.classList.remove('swiper-slide-scaled');
                });
                swiper.slides[swiper.activeIndex].classList.add('swiper-slide-scaled');
              },
            },
          });

        //FIN DO SCRIPT CARROCEL



          //CLIQUE MAGICO .GIF

          document.addEventListener('click', function(event) {
            const cliqueX = event.pageX;
            const cliqueY = event.pageY;

            // Adiciona um número aleatório para forçar novo carregamento
            const caminhoGif = "midia/clique_magico.gif?rand=" + Date.now();

            const gifElement = document.createElement('img');
            gifElement.src = caminhoGif;
            gifElement.style.position = 'absolute';
            gifElement.style.zIndex = '9999';
            gifElement.style.pointerEvents = 'none';

            document.body.appendChild(gifElement);

            gifElement.onload = function() {
                const offsetX = gifElement.offsetWidth / 2;
                const offsetY = gifElement.offsetHeight / 2;

                gifElement.style.left = `${cliqueX - offsetX}px`;
                gifElement.style.top = `${cliqueY - offsetY}px`;

                setTimeout(function() {
                gifElement.remove();
                }, 1500); // Duração da animação
            };

            gifElement.onerror = function() {
                console.error("Erro ao carregar o GIF:", caminhoGif);
            };
            });


    //******INICIOM DA CONFIGURAÇÃO DO MAUSE MAGICO****
// ============================
// CLIQUE MÁGICO (.GIF + SOM)
// ============================
document.addEventListener('click', function (event) {
  const cliqueX = event.pageX;
  const cliqueY = event.pageY;

  const caminhoGif = "midia/clique_magico.gif?rand=" + Date.now();

  const gifElement = document.createElement('img');
  gifElement.src = caminhoGif;
  gifElement.style.position = 'absolute';
  gifElement.style.zIndex = '9999';
  gifElement.style.pointerEvents = 'none';

  document.body.appendChild(gifElement);

  gifElement.onload = function () {
    const offsetX = gifElement.offsetWidth / 2;
    const offsetY = gifElement.offsetHeight / 2;

    gifElement.style.left = `${cliqueX - offsetX}px`;
    gifElement.style.top = `${cliqueY - offsetY}px`;

    setTimeout(() => gifElement.remove(), 1500);
  };

  gifElement.onerror = function () {
    console.error("Erro ao carregar o GIF:", caminhoGif);
  };

  const somClique = new Audio("sons/CLIQUE.mp3");
  somClique.play().catch((e) => {
    console.warn("Erro ao tocar som de clique:", e);
  });
});

// ============================
// ARRASTAR MÁGICO (DESKTOP)
// ============================
let ultimoSomArrastar = null;
let podeTocarSomArrastar = false;

document.addEventListener('click', () => { podeTocarSomArrastar = true; });
document.addEventListener('touchstart', () => { podeTocarSomArrastar = true; });

function criarTrilhaMagica(x, y) {
  const caminhoGif = "midia/clique_magico.gif?rand=" + Date.now();

  const gifElement = document.createElement('img');
  gifElement.src = caminhoGif;
  gifElement.style.position = 'absolute';
  gifElement.style.zIndex = '9999';
  gifElement.style.pointerEvents = 'none';
  gifElement.style.width = '100px';
  gifElement.style.height = '100px';

  document.body.appendChild(gifElement);

  if (podeTocarSomArrastar && (!ultimoSomArrastar || ultimoSomArrastar.ended)) {
    ultimoSomArrastar = new Audio("sons/ARRASTAR.mp3");
    ultimoSomArrastar.play().catch((e) => {
      console.warn("Erro ao tocar som de arrastar:", e);
    });
  }

  gifElement.onload = function () {
    const offsetX = gifElement.offsetWidth / 2;
    const offsetY = gifElement.offsetHeight / 2;

    gifElement.style.left = `${x - offsetX}px`;
    gifElement.style.top = `${y - offsetY}px`;

    setTimeout(() => gifElement.remove(), 1000);
  };

  gifElement.onerror = function () {
    console.error("Erro ao carregar o GIF:", caminhoGif);
  };
}

// ===== DESKTOP - MOUSEMOVE =====
if (!('ontouchstart' in window)) {
  let ultimaPosicao = 0;
  document.addEventListener('mousemove', function (e) {
    const distanciaMinima = 30;
    const atual = e.pageY + e.pageX;

    if (Math.abs(atual - ultimaPosicao) > distanciaMinima) {
      ultimaPosicao = atual;
      criarTrilhaMagica(e.pageX, e.pageY);
    }
  });
}


// ============================
// ARRASTAR MÁGICO NO MOBILE
// (com GIFs fixos que acompanham o conteúdo da tela)
// ============================



// ** Código para Desktop **

let ultimoSomArrastarDesktop = null;
let podeTocarSomArrastarDesktop = false;

// Ativa o som de arrastar após qualquer clique
document.addEventListener('click', () => { podeTocarSomArrastarDesktop = true; });

function criarTrilhaMagicaDesktop(x, y) {
  const caminhoGif = "midia/clique_magico.gif?rand=" + Date.now();

  const gifElement = document.createElement('img');
  gifElement.src = caminhoGif;
  gifElement.style.position = 'absolute';
  gifElement.style.zIndex = '9999';
  gifElement.style.pointerEvents = 'none';
  gifElement.style.width = '100px';
  gifElement.style.height = '100px';

  document.body.appendChild(gifElement);

  // Toca o som apenas se permitido e se o som anterior terminou
  if (podeTocarSomArrastarDesktop && (!ultimoSomArrastarDesktop || ultimoSomArrastarDesktop.ended)) {
    ultimoSomArrastarDesktop = new Audio("sons/ARRASTAR.mp3");
    ultimoSomArrastarDesktop.play().catch((e) => {
      console.warn("Erro ao tocar som de arrastar (desktop):", e);
    });
  }

  gifElement.onload = function () {
    const offsetX = gifElement.offsetWidth / 2;
    const offsetY = gifElement.offsetHeight / 2;

    gifElement.style.left = `${x - offsetX}px`;
    gifElement.style.top = `${y - offsetY}px`;

    setTimeout(() => gifElement.remove(), 1000);
  };

  gifElement.onerror = function () {
    console.error("Erro ao carregar o GIF (desktop):", caminhoGif);
  };
}

// Mouse
let ultimaPosicaoDesktop = 0;
document.addEventListener('mousemove', function (e) {
  const distanciaMinima = 30;
  const atual = e.pageY + e.pageX;

  if (Math.abs(atual - ultimaPosicaoDesktop) > distanciaMinima) {
    ultimaPosicaoDesktop = atual;
    criarTrilhaMagicaDesktop(e.pageX, e.pageY);
  }
});

//******FIM DA CONFIGURAÇÃO DO MAUSE MAGICO (DESKTOP)****

// ** Código para Mobile **

// ** Código para Mobile - Eixo X **

let ultimoSomArrastarX = null;
let podeTocarSomArrastarX = false;

// Ativa o som de arrastar no eixo X após qualquer toque
document.addEventListener('touchstart', () => { podeTocarSomArrastarX = true; });

function criarTrilhaMagicaX(x) {
  const caminhoGif = "midia/clique_magico.gif?rand=" + Date.now();

  const gifElement = document.createElement('img');
  gifElement.src = caminhoGif;
  gifElement.style.position = 'fixed'; // Usamos 'fixed' para não rolar com a página
  gifElement.style.zIndex = '9999';
  gifElement.style.pointerEvents = 'none';
  gifElement.style.width = '100px';
  gifElement.style.height = '100px';

  document.body.appendChild(gifElement);

  // Toca o som apenas se permitido e se o som anterior terminou (para o eixo X)
  if (podeTocarSomArrastarX && (!ultimoSomArrastarX || ultimoSomArrastarX.ended)) {
    ultimoSomArrastarX = new Audio("sons/ARRASTAR.mp3");
    ultimoSomArrastarX.play().catch((e) => {
      console.warn("Erro ao tocar som de arrastar (eixo X):", e);
    });
  }

  gifElement.onload = function () {
    const offsetX = gifElement.offsetWidth / 2;
    const offsetY = gifElement.offsetHeight / 2;
    const y = window.innerHeight / 2; // Mantém o GIF no centro vertical da tela

    gifElement.style.left = `${x - offsetX}px`;
    gifElement.style.top = `${y - offsetY}px`; // Centraliza verticalmente

    setTimeout(() => gifElement.remove(), 1000);
  };

  gifElement.onerror = function () {
    console.error("Erro ao carregar o GIF (eixo X):", caminhoGif);
  };
}

// Touch - Movimento no Eixo X
document.addEventListener('touchmove', function (e) {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    criarTrilhaMagicaX(touch.pageX);
  }
});

//******FIM DA CONFIGURAÇÃO DO MAUSE MAGICO (MOBILE - EIXO X)****

// ** Código para Mobile - Scroll Y **

let ultimoSomScrollY = null;
let podeTocarSomScrollY = false;

// Ativa o som de arrastar no scroll Y após qualquer toque
document.addEventListener('touchstart', () => { podeTocarSomScrollY = true; });

function criarTrilhaMagicaScrollY(y) {
  const caminhoGif = "midia/clique_magico.gif?rand=" + Date.now();

  const gifElement = document.createElement('img');
  gifElement.src = caminhoGif;
  gifElement.style.position = 'fixed'; // Essencial para não rolar com a página
  gifElement.style.zIndex = '9999';
  gifElement.style.pointerEvents = 'none';
  gifElement.style.width = '100px';
  gifElement.style.height = '100px';

  document.body.appendChild(gifElement);

  // Toca o som apenas se permitido e se o som anterior terminou (para o scroll Y)
  if (podeTocarSomScrollY && (!ultimoSomScrollY || ultimoSomScrollY.ended)) {
    ultimoSomScrollY = new Audio("sons/ARRASTAR.mp3");
    ultimoSomScrollY.play().catch((e) => {
      console.warn("Erro ao tocar som de arrastar (scroll Y):", e);
    });
  }

  gifElement.onload = function () {
    const offsetX = gifElement.offsetWidth / 2;
    const offsetY = gifElement.offsetHeight / 2;
    const x = window.innerWidth / 2; // Mantém o GIF no centro horizontal da tela

    gifElement.style.left = `${x - offsetX}px`; // Centraliza horizontalmente
    gifElement.style.top = `${y - offsetY}px`;

    setTimeout(() => gifElement.remove(), 1000);
  };

  gifElement.onerror = function () {
    console.error("Erro ao carregar o GIF (scroll Y):", caminhoGif);
  };
}

// Touch - Scroll Y
document.addEventListener('touchmove', function (e) {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    criarTrilhaMagicaScrollY(touch.clientY);
  }
});

//******FIM DA CONFIGURAÇÃO DO MAUSE MAGICO (MOBILE - SCROLL Y)****

//******FIM DA CONFIGURAÇÃO DO MAUSE MAGICO (MOBILE)****


    

//******FIM DA CONFIGURAÇÃO DO MAUSE MAGICO****
  
        // 