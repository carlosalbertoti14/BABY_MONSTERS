

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

        function toggleMenu() {
    // Pega o elemento do menu flutuante pelo ID
    const dropdown = document.getElementById("myDropdown");
    // Alterna a classe 'active' para mostrar/esconder o menu
    dropdown.classList.toggle("active");
}

// Fecha o menu se o usuário clicar fora dele
window.onclick = function(event) {
    // Verifica se o clique não foi no ícone do menu
    if (!event.target.matches('.menu-icon')) {
        // Pega todos os menus flutuantes (neste caso, só temos um)
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            // Se o menu estiver aberto, fecha-o removendo a classe 'active'
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
}


            document.addEventListener('DOMContentLoaded', function() {
              var produtosLink = document.getElementById('produtos');
              produtosLink.addEventListener('click', function(event) {
                event.preventDefault(); // Impede o link de navegar
                alert('OS PRODUTOS AINDA NÃO ESTÃO DISPONÍVEIS!');
              });
            });