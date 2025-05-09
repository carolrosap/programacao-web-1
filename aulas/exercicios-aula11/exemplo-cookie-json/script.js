const usuario = {
    id: 123,
    nome: "Alice",
    preferencias: {
      tema: "escuro",
      notificacoes: true
    },
    tags: ["admin", "editor"]
  };
  const jsonString = JSON.stringify(usuario);
  const valorCodificado = encodeURIComponent(jsonString);

  function setCookie(name, value, days) {
    const data = new Date();
    data.setTime(data.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + data.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  function getCookie(name) {
    const prefix = name + "=";
    const partes = document.cookie.split("; ");
    for (let parte of partes) {
      if (parte.indexOf(prefix) === 0) {
        return parte.substring(prefix.length);
      }
    }
    return null;
  }

  setCookie("usuario", valorCodificado, 7);
  const cookieValor = getCookie("usuario");
  if (cookieValor) {
    try {
      const jsonDecodificado = decodeURIComponent(cookieValor);
      const objetoUsuario = JSON.parse(jsonDecodificado);
      console.log("Objeto recuperado do cookie:", objetoUsuario);
    } catch (e) {
      console.error("Erro ao parsear JSON do cookie:", e);
    }
  } else {
    console.log("Cookie 'usuario' não encontrado.");
  }