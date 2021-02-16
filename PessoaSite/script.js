function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.getElementById('res');
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('ERRO Verifique os dados e tente novamete!');
  } else {
    var fsex = document.getElementsByName('radsex'); /*se mede por index*/
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto'); /*uma alternativa do que declarar no html*/
    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './img/baby.png');
      } else if (idade < 21) {
        img.setAttribute('src', './img/menino.png');
      } else if (idade < 59) {
        img.setAttribute('src', './img/homem.png');
      } else {
        img.setAttribute('src', './img/velho.png');
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './img/baby.png');
      } else if (idade < 21) {
        img.setAttribute('src', './img/menina.png');
      } else if (idade < 50) {
        img.setAttribute('src', './img/mulher.png');
      } else {
        img.setAttribute('src', './img/velha.png');
      }
    } else if (fsex[2].checked) {
      genero = 'Trans';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './img/baby.png');
      } else if (idade < 21) {
        img.setAttribute('src', './img/transTeen.jpg');
      } else if (idade < 50) {
        img.setAttribute('src', './img/transAd.jpg');
      } else {
        img.setAttribute('src', './img/velha.png');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Já que é ${genero} tem ${idade} anos de idade`;
    res.appendChild(img);
  }
}
