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
  
  //******FIM DA CONFIGURAÇÃO DO MAUSE MAGICO***