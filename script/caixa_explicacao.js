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
