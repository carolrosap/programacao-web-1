function addUser(name, age, email) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      age: age,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((newUser) => {
      alert("Usuário adicionado com sucesso!");
      fetchUsers();
    })
    .catch((error) => {
      console.error("Erro ao adicionar usuário:", error);
    });
}

function deleteUser(userId) {
  fetch(`http://localhost:3000/users/${userId}`, {
    method: "DELETE",
  })
    .then(() => {
      alert("Usuário deletado com sucesso!");
      fetchUsers();
    })
    .catch((error) => {
      console.error("Erro ao deletar usuário:", error);
    });
}

function fetchUsers(userList) {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => {
      userList.innerHTML = "";
      users.forEach((user) => {
        const userItem = document.createElement("div");
        userItem.classList.add("user-item");
        userItem.innerHTML = `
                        <strong>Nome:</strong> ${user.name} <br>
                        <strong>Idade:</strong> ${user.age} <br>
                        <strong>Email:</strong> ${user.email} <br>
                        <button onclick="deleteUser(${user.id})">Deletar</button>
                    `;
        userList.appendChild(userItem);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar usuários:", error);
      userList.innerHTML = "Erro ao carregar a lista de usuários.";
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const userList = document.getElementById("user-list");
  const addUserForm = document.getElementById("add-user-form");
  const deleteUserForm = document.getElementById("delete-user-form");
  
  addUserForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const email = event.target.email.value;

    addUser(name, age, email);
  });

  deleteUserForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userId = event.target.userId.value;
    deleteUser(userId);
  });

  fetchUsers(userList);
});
