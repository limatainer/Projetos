var saldo = 0;
function adicionar() {
  var add = Number(document.getElementById('nbr1').value);
  var msg = '';
  if (add > 0) {
    saldo += add;
    msg = `Você depositou EUR ${add.toFixed(2)}`;
  }
  document.getElementById('tot').textContent = msg;
  return saldo; //vai retornar o valor para usar em qualquer parte do codigo
}
function total() {
  var msg = `Seu saldo é EUR ${saldo.toFixed(2)}`;
  document.getElementById('tot').textContent = msg;
}
