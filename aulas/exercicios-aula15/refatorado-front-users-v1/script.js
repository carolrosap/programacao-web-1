const API_BASE_URL = "https://api-node-test-6c4b0a5d4c87.herokuapp.com";

function makeRequest(endpoint, method = "GET", data = null) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(`${API_BASE_URL}${endpoint}`, options).then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response.json();
  });
}

// Coleta e ajusta os dados do formulário
function getFormData(form) {
  return {
    name: form.name.value,
    age: Number(form.age.value), // Garante tipo numérico
    email: form.email.value,
  };
}

function renderUserList(users, container) {
  container.innerHTML = "";

  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-item");

    const idText = document.createElement("p");
    idText.textContent = `ID: ${user.id}`;

    const nameText = document.createElement("p");
    nameText.textContent = `Nome: ${user.name}`;

    const ageText = document.createElement("p");
    ageText.textContent = `Idade: ${user.age}`;

    const emailText = document.createElement("p");
    emailText.textContent = `Email: ${user.email}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Deletar";
    deleteBtn.dataset.id = user.id;
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });

    userDiv.appendChild(idText);
    userDiv.appendChild(nameText);
    userDiv.appendChild(ageText);
    userDiv.appendChild(emailText);
    userDiv.appendChild(deleteBtn);
    userDiv.appendChild(document.createElement("hr"));

    container.appendChild(userDiv);
  });
}

function fetchAndDisplayUsers() {
  const userList = document.getElementById("user-list");

  makeRequest("/users", "GET")
    .then((users) => {
      renderUserList(users, userList);
    })
    .catch((error) => {
      console.error("Erro ao buscar usuários:", error);
      userList.innerHTML = "Erro ao carregar usuários.";
    });
}

function addUser(name, age, email) {
  makeRequest("/users", "POST", { name, age, email })
    .then(() => {
      alert("Usuário adicionado com sucesso!");
      fetchAndDisplayUsers();
    })
    .catch((error) => {
      console.error("Erro ao adicionar usuário:", error);
    });
}

function deleteUser(userId) {
  makeRequest(`/users/${userId}`, "DELETE")
    .then(() => {
      alert("Usuário deletado com sucesso!");
      fetchAndDisplayUsers();
    })
    .catch((error) => {
      console.error("Erro ao deletar usuário:", error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const userList = document.getElementById("user-list");
  const addUserForm = document.getElementById("add-user-form");
  const deleteUserForm = document.getElementById("delete-user-form");

  addUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const { name, age, email } = getFormData(addUserForm);
    addUser(name, age, email);
    // addUserForm.reset(); // opcional
  });

  deleteUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userId = Number(deleteUserForm.userId.value);
    deleteUser(userId);
    // deleteUserForm.reset(); // opcional
  });
  fetchAndDisplayUsers();
});
