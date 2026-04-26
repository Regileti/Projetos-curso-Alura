function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

  if (quantidadeIngresso < 1){
       alert(`Quantidade ${quantidadeIngresso} é inferior a quantidade exigida!`);
       return;
        } else if (quantidadeIngresso > 10){
        alert(`Quantidade ${quantidadeIngresso} é superior a quantidade limite!`);
        return;
    }

   if(tipoIngresso.value == 'pista'){
    comprarPista(quantidadeIngresso);
   } else if(tipoIngresso.value == 'inferior'){
    comprarInferior(quantidadeIngresso);
   } else {
    comprarSuperior(quantidadeIngresso);
   }

}

function comprarPista(quantidadeIngresso){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidadeIngresso > qtdPista){
        alert('Quantidade indisponível para compra do tipo Pista!');
    }else{
        qtdPista = qtdPista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidadeIngresso){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidadeIngresso > qtdInferior){
        alert('Quantidade indisponível para compra do tipo Inferior!');
    }else{
        qtdInferior = qtdInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidadeIngresso){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidadeIngresso > qtdSuperior){
        alert('Quantidade indisponível para compra do tipo Superior!');
    }else{
        qtdSuperior = qtdSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}