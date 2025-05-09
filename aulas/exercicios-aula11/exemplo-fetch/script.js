const output = document.getElementById("output");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) throw new Error("Erro na requisição");
    return response.json();
  })
  .then((post) => {
    output.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
  })
  .catch((err) => {
    output.textContent = "Falha ao carregar dados.";
    console.error(err);
  });
