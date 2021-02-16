/*var vel = 50.5;
console.log(`A velocidade do carro e ${vel}km por hr`);
if (vel > 60) {
  console.log('Será multado pois sua velocidade passou de 60km');
}
console.log('Use cinto!');
//no caso de uma variavel composta
var pais = 'Portugal';
console.log(`Estou morando em ${pais}`);
if (pais != 'Brasil') {
  console.log('Você é estrangeiro');
} else {
  console.log('Você é Brazuca!');
}*/

function calcular() {
  var txtpa = document.querySelector('input#txtp');
  var res = document.querySelector('div#res');
  var vel = txtpa.value;
  res.innerHTML = `<p>Seu pais de origem é <i> ${vel}</i></p>`;
  if (vel == 'Brasil' || vel == 'brasil') {
    res.innerHTML += `<p>Tu é  <strong> Brazuca! </strong> &#127463;&#127479;</p>`;
  } else {
    res.innerHTML += `<p> <i class="fas fa-plane"></i> Você é imigrante! Que bom saber, que de tudo certo aqui no Brasil para você!</p>`;
  }
}
