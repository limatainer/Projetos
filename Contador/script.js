function contar() {
  let inicio = document.getElementById('txti');
  let fim = document.getElementById('txtf');
  let passo = document.getElementById('txtp');
  let res = document.getElementById('res');
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    re.innerHTML = 'Impossível contar assim né...';
    //window.alert('ERRO Tente novamente');
  } else {
    res.innerHTML = 'Contando: <br>';
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert('Passo inválido considerando passo 1');
      p = 1;
    }
    if (i < f) {
      //contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}	`; // o unicode so funciona dentro de crases e depois do \u
      }
    } else {
      //contagem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}	`; // o unicode so funciona dentro de crases e depois do \u
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
