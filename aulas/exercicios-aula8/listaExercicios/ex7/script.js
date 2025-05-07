const preencherFormulario = (nome, email) => {
    document.getElementById('campo-nome').value = nome;
    document.getElementById('campo-email').value = email;
};
  
window.addEventListener('DOMContentLoaded', () => {
    const nome = prompt("Exercício 7:\nDigite um nome:");
    const email = prompt("Digite um email:");
    if (nome && email) {
      preencherFormulario(nome, email);
    }
});