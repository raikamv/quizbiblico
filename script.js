function salvar() {
  const respostaPerguntaUm = document.querySelector(
    'input[name="pergunta1"]:checked'
  )?.value;

  const respostaPerguntaDois = document.querySelector(
    'input[name="pergunta2"]:checked'
  )?.value;

  let contador = 0;

  if (respostaPerguntaUm === "66") {
    contador = contador + 1;
  }

  if (respostaPerguntaDois === "galatas") {
    contador = contador + 1;
  }


  const divRespostas = document.getElementById("resultado");
  divRespostas.innerHTML = "Total de acertos: " + contador;
  divRespostas.setAttribute("style", "display: inherit");
}
