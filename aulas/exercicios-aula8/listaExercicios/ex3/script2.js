const nome = prompt("Exercício 3:\nDigite o nome da pessoa:");
const idade = prompt("Digite a idade:");
const profissao = prompt("Digite a profissão:");

if (nome && idade && profissao) {
  const pessoa = {
    nome,
    idade: parseInt(idade, 10),
    profissao
  };
  alert(descreverPessoa(pessoa));
}