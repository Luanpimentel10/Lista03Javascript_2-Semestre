let numero = parseInt(prompt("Digite um número inteiro:"));
let contador = 1;

while (contador <= 10) {
  let resultado = numero * contador;
  alert(numero + " x " + contador + " = " + resultado);
  contador++;
}
