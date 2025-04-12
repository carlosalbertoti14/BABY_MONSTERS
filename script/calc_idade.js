function calcularIdade(dataNascimentoTexto) {
    const [dia, mes, ano] = dataNascimentoTexto.split('/').map(Number);
    const dataNascimento = new Date(ano, mes - 1, dia);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
  
    if (mesAtual < dataNascimento.getMonth() || (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())) {
      idade--;
    }
    return idade;
  }
  
  function atualizarIdadeMembro(idMembro) {
    const dataNascimentoElement = document.getElementById(`${idMembro}-dataNascimento`);
    const idadeElement = document.getElementById(`${idMembro}-idade`);
  
    if (dataNascimentoElement && idadeElement) {
      const dataNascimentoTexto = dataNascimentoElement.textContent;
      const idadeCalculada = calcularIdade(dataNascimentoTexto);
      idadeElement.textContent = idadeCalculada;
    }
  }
  
  function calcularEAtualizarIdades() {
    const membros = ['ahyeon', 'asa', 'chiquita', 'pharita', 'rami', 'rora', 'ruka'];
    membros.forEach(atualizarIdadeMembro);
  }
  
  window.onload = calcularEAtualizarIdades;