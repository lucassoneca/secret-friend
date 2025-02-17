//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

//se o campo estiver vazio, aparecerá uma mensagem de erro
//se nao, será adicionado no array
//console.log para verificar no console se foi capturado
//limparCampo() para o input ficar vazio após adicionar um item no array
//atualizarLista() para adicionar o ultimo item adicionado no array

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

//função para limpar o input após adicionar um item

function limparCampo() {
    document.getElementById('amigo').value = '';
}

//função para adicionar o item do input a lista vertical

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let index = 0; index < amigos.length; index++) {
        listaAmigos.innerHTML += `<li>${amigos[index]}</li>`;
    }
}

//função para sortear os itens que foram adicionado na lista vertical

function sortearAmigo() {
    if (amigos == '') {
        alert('Adicione um nome a lista');
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = amigos[numeroAleatorio];
        limparLista();
    }
}

//função para limpar a lista vertical sempre que um item for sorteado

function limparLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}