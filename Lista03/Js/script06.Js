let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let divisor = 1;

while (divisor <= numero) {
  if (numero % divisor === 0) { 
    console.log(divisor); 
  }
  divisor++;
}
