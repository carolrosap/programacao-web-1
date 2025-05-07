const contarVogais = (str) => {
    const listaVogais = "aeiouAEIOU";
    let quantidade = 0;
  
    for (let char of str) {
      if (listaVogais.includes(char)) {
        quantidade++;
      }
    }

    return quantidade;
};
  
const entrada = prompt("Exercício 5:\nDigite uma string:");
if (entrada !== null) {
    const quantidade = contarVogais(entrada);
    alert(`Quantidade de vogais em "${entrada}": ${quantidade}`);
}