let limite = parseInt(prompt("Digite um número inteiro:"));

let a = 0; 
let b = 1; 
let proximo;

console.log("Sequência de Fibonacci até " + limite + ":");

while (a <= limite) {
  console.log(a); 
  proximo = a + b; 
  a = b; 
  b = proximo; 
}
