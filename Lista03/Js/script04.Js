let contador = 1;
let soma = 0;

while (contador <= 5) {
  let numero = parseInt(prompt("Digite o " + contador + "º número:"));
  soma = soma + numero; // acumula os valores
  contador++; // aumenta o contador
}

let media = soma / 5;
alert("A média dos números digitados é: " + media);
