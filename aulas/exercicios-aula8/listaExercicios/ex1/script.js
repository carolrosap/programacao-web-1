const analisarString = (str) => {
    const tamanho = str.length;
    const maiusculas = str.toUpperCase();
    const invertida = str.split('').reverse().join('');
    console.log(`Tamanho: ${tamanho}`);
    console.log(`Maiúsculas: ${maiusculas}`);
    console.log(`Invertida: ${invertida}`);

    alert(`Tamanho: ${tamanho} \nMaiúsculas: ${maiusculas} \nInvertida: ${invertida}car`)
};
  
const entrada1 = prompt("Exercício 1:\nDigite uma string:");
if (entrada1 !== null) {
  analisarString(entrada1);
}