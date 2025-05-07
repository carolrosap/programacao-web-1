const produtos = [
    { nome: "Camiseta", preco: 50, categoria: "Vestuário" },
    { nome: "Calça", preco: 100, categoria: "Vestuário" },
    { nome: "Geladeira", preco: 2000, categoria: "Eletrodomésticos" },
    { nome: "Micro-ondas", preco: 500, categoria: "Eletrodomésticos" },
    { nome: "Notebook", preco: 3000, categoria: "Informática" }
];

const filtrarPorCategoria = (items, categoria) => {
    const resultado = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].categoria === categoria) {
        resultado.push(items[i]);
      }
    }
    return resultado;
};
  
const filtrarPorCategoria2 = (items, categoria) => items.filter(prod => prod.categoria === categoria);

const calcularTotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].preco;
    }
    return total;
};

const calcularTotal2 = (items) => items.reduce((total, prod) => total + prod.preco, 0);

console.log(filtrarPorCategoria(produtos, "Vestuário"));

console.log(`Total da compra: R$ ${calcularTotal(produtos)}`);
  