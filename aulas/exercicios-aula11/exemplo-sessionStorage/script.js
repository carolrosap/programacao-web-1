const KEY = "sessionReloadCount";

document.addEventListener("DOMContentLoaded", () => {
  const countElem = document.getElementById("count");

  // Ler contador da sessionStorage (ou inicializar em 0)
  let count = parseInt(sessionStorage.getItem(KEY), 10) || 0;

  // Incrementar e armazenar de volta
  count += 1;
  sessionStorage.setItem(KEY, count);

  // Exibir no DOM
  countElem.textContent = count;
});
