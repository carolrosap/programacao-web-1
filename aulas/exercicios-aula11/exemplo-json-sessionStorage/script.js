const produto = {
  id: 1,
  nome: "Camisa Polo",
  preco: 150.0,
  tags: ["roupa", "masculino", "verão"],
};

const produtoJson = JSON.stringify(produto);
sessionStorage.setItem("meuProduto", produtoJson);

const produtoRecuperadoJson = sessionStorage.getItem("meuProduto");
if (produtoRecuperadoJson) {
  const produtoObj = JSON.parse(produtoRecuperadoJson);

  produtoObj.tags.push("promoção");

  produtoObj.preco = produtoObj.preco * 0.9;
  
  console.log("Produto após atualização:", produtoObj);
} else {
  console.warn("Não foi encontrado nenhum produto em sessionStorage.");
}
