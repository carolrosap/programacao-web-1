document.addEventListener("DOMContentLoaded", checkCookie);
document.getElementById("clear").addEventListener("click", () => {
  deleteCookie("user");
  checkCookie();
});

function checkCookie() {
  const user = getCookie("user");
  const msgEl = document.getElementById("msg");

  if (user) {
    msgEl.textContent = `Bem-vindo de volta, ${user}!`;
  } else {
    const name = prompt("Digite seu nome:");
    if (name) {
      setCookie("user", name, 365);
      msgEl.textContent = `Bem-vindo, ${name}!`;
    } else {
      msgEl.textContent = "Olá, visitante!";
    }
  }
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const all = document.cookie ? document.cookie.split('; ') : [];
  for (const cookie of all) {
    const [key, val] = cookie.split('=');
    if (decodeURIComponent(key) === name) {
      return decodeURIComponent(val);
    }
  }
  return '';
}

function deleteCookie(name) {
  document.cookie = `${encodeURIComponent(
    name
  )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}
