            //CALCULA IDADE**************
            function calcularEAtualizarIdade() {    
                const dataNascimentoTexto = document.getElementById('dataNascimento').textContent;
                const [dia, mes, ano] = dataNascimentoTexto.split('/').map(Number);
                const dataNascimento = new Date(ano, mes - 1, dia); // Meses em JavaScript começam do 0
        
                const hoje = new Date();
                let idade = hoje.getFullYear() - dataNascimento.getFullYear();
                const mesAtual = hoje.getMonth();
                const diaAtual = hoje.getDate();
        
                if (mesAtual < dataNascimento.getMonth() || (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())) {
                    idade--;
                }
        
                document.getElementById('idade').textContent = idade;
                }
        
                // Chama a função quando a página carregar
                window.onload = calcularEAtualizarIdade;
        
        
                // FIM DE CALCULA IDADE**************