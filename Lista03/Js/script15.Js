let somaIdades = 0;
let contador = 0;
let nome = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");

while (nome.toLowerCase() !== "fim") {
  let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
  somaIdades = somaIdades + idade;
  contador++;

  nome = prompt("Digite o nome da próxima pessoa (ou 'fim' para encerrar):");
}

if (contador > 0) {
  let media = somaIdades / contador;
  alert("A média das idades é: " + media);
} else {
  alert("Nenhuma idade foi informada.");
}
