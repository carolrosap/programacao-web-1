const analisarNumeros = (arr) => {
    let soma = 0;
    const pares = [];
    
    for (let i = 0; i < arr.length; i++) {
      const n = arr[i];
      soma += n;
      if (n % 2 === 0) {
        pares.push(n);
      }
    }
  
    const media = arr.length > 0 ? soma / arr.length : 0;
    return { soma, media, pares };
};
  
const entrada = prompt("Exercício 2:\nDigite números separados por vírgula, ex: 1,2,3,4");
  
if (entrada !== null) {
    const partes = entrada.split(',');
    const numeros = [];

    for (let i = 0; i < partes.length; i++) {
        const texto = partes[i].trim();
        const valor = parseFloat(texto);
        if (!isNaN(valor)) {
            numeros.push(valor);
        }
    }2,5

    const resultado = analisarNumeros(numeros);
    alert(`Soma: ${resultado.soma}\nMédia: ${resultado.media}\nPares: [${resultado.pares.join(', ')}]`);2,5
}
  