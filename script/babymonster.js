//CONFIGURAÇÃO DA MIDIA DO CABEÇALHO VIDEO IMAGEM E SOM

const video = document.getElementById('intro-video');
const image = document.getElementById('substitute-image');
const homeButton = document.querySelector('nav a:first-child'); // Primeiro botão, que é "HOME"
const soundButton = document.getElementById('sound-toggle');

// Variáveis para controlar o estado de mudo dos sons de clique e arrastar
let somCliqueMuted = false;
let somArrastarMuted = false;

//CONFIGURAÇÃO DO VÍDEO QUANDO TERMINA
video.addEventListener('ended', () => {
    video.style.display = 'none';
    image.style.display = 'flex';
});

// CONFIGURAÇÃO PARA QUANDO A IMAGEM FOR CLICADA
image.addEventListener('click', () => {
    video.pause(); // Pausa o vídeo antes de voltar ao início
    video.currentTime = 0; // Define o tempo do vídeo para o início
    video.muted = false;    // Ativa o som do vídeo
    video.style.display = 'flex'; // Mostra o vídeo novamente
    image.style.display = 'none'; // Esconde a imagem
    soundButton.textContent = '🔊'; // Garante que o ícone de som esteja ligado
    somCliqueMuted = false; // Garante que o som de clique esteja ligado
    somArrastarMuted = false; // Garante que o som de arrastar esteja ligado
    video.play(); // Inicia a reprodução do vídeo
});

//CONFIGURAÇÃO DO DE ATIVAÇÃO DO ICONE DE SOM
soundButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false; // Ativar som do vídeo
        soundButton.textContent = '🔊'; // Ícone de som ligado
        somCliqueMuted = false; // Ativar som de clique
        somArrastarMuted = false; // Ativar som de arrastar
    } else {
        video.muted = true; // Desativar som do vídeo
        soundButton.textContent = '🔇'; // Ícone de som desligado
        somCliqueMuted = true; // Desativar som de clique
        somArrastarMuted = true; // Desativar som de arrastar
    }
});


// FIM DA CONFIGURAÇÃO DA MIDIA DO CABEÇALHO VIDEO IMAGEM E SOM

//INICIO DA CONFIGURAÇÃO DA BARRA DE MENUS

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

        //FIM DA CONFIGURAÇÃO DA BARRA DE MENUS

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
        
// FIM DA CAIXA DE EXPLICAÇÃO



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

  if (!somCliqueMuted) { // Verifica se o som de clique não está mudo
      const somClique = new Audio("sons/CLIQUE.mp3");
      somClique.play().catch((e) => {
          console.warn("Erro ao tocar som de clique:", e);
      });
  }
});

// ============================
// ARRASTAR MÁGICO (DESKTOP) - UNIFICADO
// ============================
let ultimoSomArrastarDesktop = null;
let podeTocarSomArrastarDesktop = false;
let ultimaPosicaoDesktop = 0;
const distanciaMinimaDesktop = 30; // Ajuste conforme necessário

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

  if (podeTocarSomArrastarDesktop && (!ultimoSomArrastarDesktop || ultimoSomArrastarDesktop.ended)) {
      if (!somArrastarMuted) { // Verifica se o som de arrastar não está mudo
          ultimoSomArrastarDesktop = new Audio("sons/ARRASTAR.mp3");
          ultimoSomArrastarDesktop.play().catch((e) => {
              console.warn("Erro ao tocar som de arrastar (desktop):", e);
          });
      }
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

if (!('ontouchstart' in window)) {
  document.addEventListener('mousemove', function (e) {
      const atual = e.pageY + e.pageX;
      if (Math.abs(atual - ultimaPosicaoDesktop) > distanciaMinimaDesktop) {
          ultimaPosicaoDesktop = atual;
          criarTrilhaMagicaDesktop(e.pageX, e.pageY);
      }
  });
}

// ============================
// ARRASTAR MÁGICO NO MOBILE
// (com GIFs fixos que acompanham o conteúdo da tela)
// ============================

// ** Código para Mobile **

let ultimoSomArrastarMobile = null;
let podeTocarSomArrastarMobile = false;
let primeiroToque = null;
const distanciaMinimaMobile = 30; // Distância mínima para ativar o efeito - Renomeei para clareza
let podeCriarGifMobile = true; // Renomeei para clareza
const intervaloMinimoGifMobile = 50; // Intervalo mínimo em milissegundos - Renomeei para clareza
let ultimoTempoCriacaoGifMobile = 0; // Renomeei para clareza

// Ativa o som de arrastar após qualquer toque e guarda a posição inicial
document.addEventListener('touchstart', (e) => {
  podeTocarSomArrastarMobile = true;
  if (e.touches.length > 0) {
      primeiroToque = {
          clientX: e.touches[0].clientX,
          clientY: e.touches[0].clientY
      };
  }
});

function criarTrilhaMagicaMobile(clientX, clientY) {
  const agora = Date.now();
  if (!podeCriarGifMobile || (agora - ultimoTempoCriacaoGifMobile < intervaloMinimoGifMobile)) {
      return; // Impede a criação se o intervalo mínimo não foi atingido
  }
  podeCriarGifMobile = false;
  ultimoTempoCriacaoGifMobile = agora;
  setTimeout(() => { podeCriarGifMobile = true; }, intervaloMinimoGifMobile);

  const caminhoGif = "midia/clique_magico.gif?rand=" + agora;

  const gifElement = document.createElement('img');
  gifElement.src = caminhoGif;
  gifElement.style.position = 'fixed';
  gifElement.style.zIndex = '9999';
  gifElement.style.pointerEvents = 'none';
  gifElement.style.width = '100px';
  gifElement.style.height = '100px';

  document.body.appendChild(gifElement);

  // Toca o som apenas se permitido e se o som anterior terminou
  if (podeTocarSomArrastarMobile && (!ultimoSomArrastarMobile || ultimoSomArrastarMobile.ended)) {
      if (!somArrastarMuted) { // Verifica se o som de arrastar não está mudo
          ultimoSomArrastarMobile = new Audio("sons/ARRASTAR.mp3");
          ultimoSomArrastarMobile.play().catch((e) => {
              console.warn("Erro ao tocar som de arrastar (mobile):", e);
          });
      }
  }

  gifElement.onload = function () {
      const offsetX = gifElement.offsetWidth / 2;
      const offsetY = gifElement.offsetHeight / 2;

      gifElement.style.left = `${clientX - offsetX}px`;
      gifElement.style.top = `${clientY - offsetY}px`;

      setTimeout(() => gifElement.remove(), 1000);
  };

  gifElement.onerror = function () {
      console.error("Erro ao carregar o GIF (mobile):", caminhoGif);
  };
}

// Touch
document.addEventListener('touchmove', function (e) {
  if (e.touches.length > 0 && primeiroToque) {
      const touch = e.touches[0];
      const deltaX = Math.abs(touch.clientX - primeiroToque.clientX);
      const deltaY = Math.abs(touch.clientY - primeiroToque.clientY);

      if (deltaX > distanciaMinimaMobile || deltaY > distanciaMinimaMobile) {
          criarTrilhaMagicaMobile(touch.clientX, touch.clientY);
          primeiroToque = { clientX: touch.clientX, clientY: touch.clientY };
      }
  }
});

// Reseta a posição inicial quando o toque termina
document.addEventListener('touchend', () => {
  primeiroToque = null;
});

document.addEventListener('touchcancel', () => {
  primeiroToque = null;
});

//******FIM DA CONFIGURAÇÃO DO MAUSE MAGICO (MOBILE)****

//******FIM DA CONFIGURAÇÃO DO MAUSE MAGICO****