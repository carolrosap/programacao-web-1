const produtos = [
    {
        nome: "Camiseta",
        preco: 49.9,
        imagem: "https://picsum.photos/150?1",
    },
    {
        nome: "Tênis",
        preco: 199.9,
        imagem: "https://picsum.photos/150?2",
    },
    {
        nome: "Mochila",
        preco: 129.9,
        imagem: "https://picsum.photos/150?3",
    },
];

const galeria = document.getElementById("galeria");

produtos.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
    `;

    galeria.appendChild(card);
});