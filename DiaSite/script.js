function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  if (hora >= 0 && hora < 12) {
    img.src = './img/Picture1.png';
    document.body.style.background = '#F0F55F';
    msg.innerHTML = `<i class="fas fa-sun"></i> Agora são ${hora} Horas`;
  } else if (hora >= 12 && hora <= 18) {
    img.src = './img/Picture2.png';
    document.body.style.background = '#F77838';
    msg.innerHTML = `<i class="far fa-sun"></i> Agora são ${hora} Horas`;
  } else {
    img.src = './img/Picture3.png';
    document.body.style.background = '#4169E1';
    msg.innerHTML = `<i class="far fa-moon"></i> Agora são ${hora} Horas`;
  }
}
