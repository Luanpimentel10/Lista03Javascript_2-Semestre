let numero = parseInt(prompt("Digite um número inteiro:"));
let fatorial = 1;
let contador = 1;

while (contador <= numero) {
  fatorial = fatorial * contador; // multiplica o fatorial pelo contador
  contador++; // aumenta o contador
}

alert("O fatorial de " + numero + " é: " + fatorial);
