let numero = parseInt(prompt("Digite um número inteiro:"));
let divisor = 1;
let contadorDivisores = 0;

while (divisor <= numero) {
  if (numero % divisor === 0) { // verifica se o divisor é exato
    contadorDivisores++;
  }
  divisor++;
}

if (contadorDivisores === 2) {
  alert(numero + " é um número primo.");
} else {
  alert(numero + " não é um número primo.");
}
