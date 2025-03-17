//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os amigos

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Captura e remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Adiciona ao array
    atualizarLista(); // Atualiza a exibição da lista
    input.value = ""; // Limpa o campo de entrada
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}