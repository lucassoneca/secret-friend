//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {

    let amigoAdicionado = document.getElementById('amigo').value;

    if (amigoAdicionado == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigoAdicionado);
        console.log(amigos);
        limparCampo();
        atualizarLista();
    }
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let index = 0; index < amigos.length; index++) {
        listaAmigos.innerHTML += `<li>${amigos[index]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos == '') {
        alert('ta vazio');
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = amigos[numeroAleatorio];
        console.log("rodou");
        limparLista();
    }
}

function limparLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}