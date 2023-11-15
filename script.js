// Obtendo o botão pelo ID
var button = document.getElementById("converterCoin");

// Adicionando um evento de clique ao botão
button.addEventListener("click", function () {
  // Perguntar o nome do usuário
  var nome = prompt("Qual o seu nome?");

  // Moeda desejada (strings)
  var moedaDesejada = prompt(
    nome +
      ", qual moeda você quer realizar a conversão para R$? (Dólar, Euro, Libra ou Iene)"
  );

  if (moedaDesejada === "Dólar") {
    // Se a moeda desejada for Dólar
    var valorDesejado = prompt("Qual quantia em dólar você quer converter?");
    var cotacaoDolar = 4.91;
    var valorEmReal = valorDesejado * cotacaoDolar;
    valorEmReal = valorEmReal.toFixed(2);
    alert(nome + ", o valor da cotação convertida é de R$" + valorEmReal);
  } else if (moedaDesejada === "Euro") {
    // Se a moeda desejada for Euro
    var valorDesejado = prompt("Qual quantia em euro você quer converter?");
    var cotacaoEuro = 5.29;
    var valorEmReal = valorDesejado * cotacaoEuro;
    valorEmReal = valorEmReal.toFixed(2);
    alert(nome + ", o valor da cotação convertida é de R$" + valorEmReal);
  } else if (moedaDesejada === "Libra") {
    // Se a moeda desejada for Libra
    var valorDesejado = prompt("Qual quantia em libra você quer converter?");
    var cotacaoLibra = 6.08;
    var valorEmReal = valorDesejado * cotacaoLibra;
    valorEmReal = valorEmReal.toFixed(2);
    alert(nome + ", o valor da cotação convertida é de R$" + valorEmReal);
  } else if (moedaDesejada === "Iene") {
    // Se a moeda desejada for Iene
    var valorDesejado = prompt("Qual quantia em iene você quer converter?");
    var cotacaoIene = 0.032;
    var valorEmReal = valorDesejado * cotacaoIene;
    valorEmReal = valorEmReal.toFixed(2);
    alert(nome + ", o valor da cotação convertida é de R$" + valorEmReal);
  } else {
    // Se a moeda digitada não for reconhecida
    alert(
      "Moeda não reconhecida. Por favor, escolha entre Dólar, Euro, Libra ou Iene."
    );
  }
});
