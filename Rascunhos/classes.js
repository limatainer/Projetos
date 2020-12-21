class Carros {
  //crio a classe com primeiro nome maiusculo
  constructor(nome, ano, marca, cor) {
    //crio o construtor e dentro dos parenteses
    //incluo os parametros
    this.nome = nome; //crio os atributos e defino os parametros
    this.ano = ano;
    this.marca = marca;
    this.cor = cor;
  }
}
let carrinha = new Carros('Amarelinho', 2010, 'Ford', 'Amarela');
//vai receber os dados que o usuario vai digitar e jogar para aqui
console.log(carrinha);

class ContaBancaria {
  constructor(cliente, conta, agencia, saldo) {
    this.cliente = cliente;
    this.conta = conta;
    this.agencia = agencia;
    this.saldo = saldo;
  }
  fazerDeposito(valor) {
    //criando um método para receber um deposito
    this.saldo += valor;
  }
  fazerSaque(saque) {
    this.saldo -= saque;
  }
  mostrarSaldoAtual() {
    console.log(this.saldo);
  }
}
let dados = new ContaBancaria('Alex', 8888, 7979, 10000);
console.log(dados);
dados.fazerDeposito(900);
dados.fazerSaque(20);
dados.mostrarSaldoAtual();

class Ingredientes {
  constructor(massa, doce, cobertura, tamanho, mistura) {
    this.massa = massa;
    this.doce = doce;
    this.cobertura = cobertura;
    this.tamanho = tamanho;
    this.mistura = mistura;
  }
}
let comida = new Ingredientes(
  'farinha',
  'acucar',
  'chocolate',
  'kilos',
  'ovos'
);
console.log(Ingredientes);
