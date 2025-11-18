let numero = parseInt(prompt("Digite um número inteiro:"));
let numeroTexto = numero.toString(); // converte o número em texto
let contador = 0;

while (contador < numeroTexto.length) {
  alert("Dígito " + (contador + 1) + ": " + numeroTexto[contador]);
  contador++;
}
