let numero = parseInt(prompt("Digite um número inteiro:"));
let contador = 1;
let soma = 0;

while (contador <= numero) {
  if (contador % 2 === 0) { // verifica se é par
    soma = soma + contador; // acumula na soma
  }
  contador++;
}

alert("A soma de todos os números pares entre 1 e " + numero + " é: " + soma);
