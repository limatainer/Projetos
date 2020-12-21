function troca() {
  document.getElementById('troca').style.color = 'white';
}
function destroca() {
  document.getElementById('troca').style.color = 'black';
}

$(document).ready(() => {
  $('#bloca').hide();
});

function valores() {
  let valor = document.querySelector('input[name="num"]:checked').value;
  return valor;
}

function surpresa() {
  $(document).ready(() => {
    $('#opt').hide();
    $('#bloca').show();
  });
  let primeira = document.getElementById('uma');
  let valorSurpresa = valores();

  switch (valorSurpresa) {
    case 'um':
      primeira.textContent = 'Surpresa 1!';
      break;
    case 'dois':
      primeira.textContent = 'Surpresa 2!';
      break;
    case 'treis':
      primeira.textContent = 'Surpresa 3!';
      break;
    case 'quatro':
      primeira.textContent = 'Surpresa 4!';
      break;
    case 'cinco':
      primeira.textContent = 'Surpresa 5!';
      break;
  }
}

/*function envio(elemento){
  console.log(elemento.value); /*assim coleto o valor que esta sendo selecionado em cada opção e jogo em uma variável array
}*/

//var radios = document.body.querySelectorAll("input[type='radio']");

// faço um loop na coleção começando do índice 0 até o limite da
// coleção (quantidade - 1). Por isso o x só deve ser menor do que
// a quantidade de itens na coleção
//for (var x = 0; x < radios.length; x++) {
// crio um evento onclick individual para cada elemento
//radios[x].onclick = function () {
// this.value => o "this" é o elemento clicado
// e "value" o valor dele. Envio para a função "clique()"
// o valor em forma de parâmetro
//  clique(this.value);
//  };
//}
//let result = document.getElementById('result');
// função que vai receber o valor do radio clicado
// em forma de um parâmetro que chamei de "i"
//function clique(i) {
//  console.log(i);
//}

/*function resposta() {
  document.getElementById('opt').style.visibility = 'hidden';
  //vai pegar a funcao envio e jogar aqui para mostrar na tela um resultado para cada número selecionado

  switch (radios) {
    case 1:
      result.innerHTML = 'ola';
      break;
    case 2:
      result.innerHTML = 'ola';
      break;
    case 3:
      result.innerHTML = 'ola';
      break;
    case 4:
      result.innerHTML = 'ola';
      break;
    case 5:
      result.innerHTML = 'ola';
      break;
  }
}*/

/*$(document).ready(() => {
  let valor = $('.rd').val();
  console.log(valor);
});*/

/*document.getElementsByClassName('botao').addEventListener('click', function () {
  let valor = document.getElementsByClassName('rd').value;
  console.log(valor);
});*/
