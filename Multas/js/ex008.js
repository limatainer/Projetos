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
  var txtv = document.querySelector('input#txtvel');
  var res = document.querySelector('div#res');
  var vel = Number(txtv.value);
  res.innerHTML = `<p>Sua velocidade atual e de <i> ${vel}Km/h</i></p>`;
  if (vel > 60) {
    res.innerHTML += `<p>Você será <strong> MULTADO! </strong> por excesso de velocidade</p>`;
  }
  res.innerHTML += `<p>Dirija sempre com sinto de segurança!</p>`;
}
