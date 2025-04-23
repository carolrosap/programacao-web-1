
// Seleciona os elementos
const titulo = document.getElementById("titulo");
const paragrafo = document.getElementById("paragrafo");
const imagem = document.getElementById("imagem");

// Modificando texto
titulo.textContent = "Novo título definido via JS";

// Inserindo HTML no parágrafo
paragrafo.innerHTML = "Este parágrafo tem <strong>HTML formatado</strong>";

// Mudando o atributo src da imagem
imagem.setAttribute("src", "https://placebear.com/150/150");

// Adicionando uma classe ao parágrafo
paragrafo.classList.add("destaque");
