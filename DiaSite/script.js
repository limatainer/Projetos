function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} Horas`;
  if (hora >= 0 && hora < 12) {
    img.src = './img/Picture1.png';
    document.body.style.background = '#F0F55F';
  } else if (hora >= 12 && hora <= 18) {
    img.src = './img/Picture2.png';
    document.body.style.background = '#F77838';
  } else {
    img.src = './img/Picture3.png';
    document.body.style.background = '#4169E1';
  }
}
