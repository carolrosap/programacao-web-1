const pessoa = {
    nome: "Maria",
    idade: 25,
    profissao: "Professora"
};
  
const descreverPessoa = ({ nome, idade, profissao }) => `${nome} tem ${idade} anos e é ${profissao}.`;
  
console.log(descreverPessoa(pessoa));

  