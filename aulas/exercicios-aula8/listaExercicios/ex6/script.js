const frutas = ["Banana", "Maçã", "Morango", "Uva"];

const criarLista = (items, ulId) => {
  const ul = document.getElementById(ulId);
  items.forEach(fruta => {
    const li = document.createElement('li');
    li.textContent = fruta;
    ul.appendChild(li);
  });
};

// Ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  criarLista(frutas, 'lista-frutas');
});
