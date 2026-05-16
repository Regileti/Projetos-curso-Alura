 let amigos = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let listaDeAmigos = document.getElementById('lista-amigos');
    
    // remove espaços extras
    let nomeDigitado = nome.value.trim();

    // verifica se está vazio
    if (nomeDigitado === '') {
        alert('Digite um nome válido!');
        return;
    }

    // verifica se já existe ignorando maiúsculas/minúsculas
    if (amigos.some(amigo => amigo.toLowerCase() === nomeDigitado.toLowerCase())) {
        alert('Esse amigo já foi adicionado!');
        return;
    }
    
    amigos.push(nomeDigitado);

    if (listaDeAmigos.textContent == ''){
        listaDeAmigos.textContent = nome.value;
    } else {
        listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' + nome.value;
    }

    nome.value = '';
}

function sortear(listaDeAmigos){
    // valida mínimo de participantes
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos para realizar o sorteio!');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista){
    for (let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function remover(){
    let nome = document.getElementById('nome-amigo');
    let nomeDigitado = nome.value.trim();

    // verifica se o campo está vazio
    if (nomeDigitado === '') {
        alert('Digite um nome para remover!');
        return;
    }

    // procura o índice ignorando maiúsculas/minúsculas
    let indice = amigos.findIndex(
        amigo => amigo.toLowerCase() === nomeDigitado.toLowerCase()
    );

    // verifica se encontrou
    if (indice === -1) {
        alert('Amigo não encontrado!');
        return;
    }

    // remove do array
    amigos.splice(indice, 1);

    // atualiza lista visual
    let listaDeAmigos = document.getElementById('lista-amigos');
    listaDeAmigos.textContent = amigos.join(', ');

    // limpa input
    nome.value = '';
}
