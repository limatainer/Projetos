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
      primeira.textContent =
        'Alguma banda/cantor(a) que você gosta e pensava que quase ninguém conhecia, vai ficar muito conhecida. Você não vai gostar disso. Vai dizer que virou "modinha" e que todos que começaram a gostar dessas músicas depois que elas estouraram são posers.';
      break;
    case 'dois':
      primeira.textContent =
        'Em um momento de distração, você vai abrir uma bala/chiclete, jogá-la no lixo e colocar a embalagem na boca.';
      break;
    case 'treis':
      primeira.textContent =
        'Aquela sua tia vai te fazer perguntas inconvenientes. "Quando vão ter filhos? Tá na hora!", "O tempo esta passando hein!"...';
      break;
    case 'quatro':
      primeira.textContent =
        'No comecinho do ano, você vai fazer sua lista de promessas para os próximos 12 meses. Quase nenhuma delas será cumprida e, no fim do ano, vai perceber que não deseja mais as coisas que escreveu.';
      break;
    case 'cinco':
      primeira.textContent =
        'Alguém vai aparecer com alguma teoria de que o mundo vai acabar nesse ano.';
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
