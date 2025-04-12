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