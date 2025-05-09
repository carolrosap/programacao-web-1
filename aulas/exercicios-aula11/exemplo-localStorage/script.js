const STORAGE_KEY = "clickCount";

document.addEventListener("DOMContentLoaded", () => {
  const countElem = document.getElementById("count");
  const btn = document.getElementById("btn");

  // Ao carregar, lê o valor de localStorage (ou zera)
  let count = parseInt(localStorage.getItem(STORAGE_KEY), 10) || 0;
  countElem.textContent = count;

  // A cada clique, incrementa, atualiza no DOM e no localStorage
  btn.addEventListener("click", () => {
    count += 1;
    countElem.textContent = count;
    localStorage.setItem(STORAGE_KEY, count);
  });
});
