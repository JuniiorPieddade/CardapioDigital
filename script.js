// variaveis

let botaoBebidas = document.getElementsByClassName('Bebidas')[0]
let botaoLanches = document.getElementsByClassName('Lanches')[0]
let Hamburguer = document.getElementsByTagName('h3')[0]
let xBurger = document.getElementsByTagName('h3')[1]
let eggsBurguer = document.getElementsByTagName('h3')[2]
let eggsFrango = document.getElementsByTagName('h3')[3]
let eggsBacon = document.getElementsByTagName('h3')[4]
let eggsCalabresa = document.getElementsByTagName('h3')[5]
let apagarDescricao = document.getElementsByTagName('h5')[0]
let apagarDescricao1 = document.getElementsByTagName('h5')[1]
let apagarDescricao2 = document.getElementsByTagName('h5')[2]
let apagarDescricao3 = document.getElementsByTagName('h5')[3]
let apagarDescricao4 = document.getElementsByTagName('h5')[4]
let apagarDescricao5 = document.getElementsByTagName('h5')[5]
let valorLanche1 = document.getElementById('lanche1')
let valorLanche2 = document.getElementById('lanche2')
let valorLanche3 = document.getElementById('lanche3')
let valorLanche4 = document.getElementById('lanche4')
let valorLanche5 = document.getElementById('lanche5')
let valorLanche6 = document.getElementById('lanche6')
let valorBebida1 = document.getElementById('bebida1')
let valorBebida2 = document.getElementById('bebida2')
let valorBebida3 = document.getElementById('bebida3')
let valorBebida4 = document.getElementById('bebida4')
let valorBebida5 = document.getElementById('bebida5')
let valorBebida6 = document.getElementById('bebida6')
let botoes = document.getElementsByTagName('input')
let botaoCheckout = document.getElementsByClassName('Checkout')[0]
let linhaHorizontal = document.getElementsByClassName('linhaHorizontal1')
let botaoProximo = document.getElementById('botaoProximo')
let botaoEnviar = document.getElementById('botaoEnviar')
let painel = document.getElementsByClassName('PedidoTotal')[0]
let valorLanche = document.getElementsByClassName('preco')
let CategoriaBebidas = document.getElementsByClassName('Bebidas')[0]
let CategoriaLanches = document.getElementsByClassName('Lanches')[0]
let botaoAddLanche = document.getElementsByClassName('checkLanche2')
let botaoSubLanche = document.getElementsByClassName('checkLanche1')
let botaoAddBebida = document.getElementsByClassName('checkBebida2')
let botaoSubBebida = document.getElementsByClassName('checkBebida1')

//eventos

CategoriaBebidas.addEventListener('click', mudarCategoriaBebidas)
CategoriaLanches.addEventListener('click', mudarCategoriaLanches)
botaoAddLanche[0].addEventListener('click', adicionarValorLanche1)
botaoAddLanche[1].addEventListener('click', adicionarValorLanche2)
botaoAddLanche[2].addEventListener('click', adicionarValorLanche3)
botaoAddLanche[3].addEventListener('click', adicionarValorLanche4)
botaoAddLanche[4].addEventListener('click', adicionarValorLanche5)
botaoAddLanche[5].addEventListener('click', adicionarValorLanche6)
botaoSubLanche[0].addEventListener('click', subtrairValorLanche1)
botaoSubLanche[1].addEventListener('click', subtrairValorLanche2)
botaoSubLanche[2].addEventListener('click', subtrairValorLanche3)
botaoSubLanche[3].addEventListener('click', subtrairValorLanche4)
botaoSubLanche[4].addEventListener('click', subtrairValorLanche5)
botaoSubLanche[5].addEventListener('click', subtrairValorLanche6)
botaoAddBebida[0].addEventListener('click', adicionarValorBebida1)
botaoAddBebida[1].addEventListener('click', adicionarValorBebida2)
botaoAddBebida[2].addEventListener('click', adicionarValorBebida3)
botaoAddBebida[3].addEventListener('click', adicionarValorBebida4)
botaoAddBebida[4].addEventListener('click', adicionarValorBebida5)
botaoAddBebida[5].addEventListener('click', adicionarValorBebida6)
botaoSubBebida[0].addEventListener('click', subtrairValorBebida1)
botaoSubBebida[1].addEventListener('click', subtrairValorBebida2)
botaoSubBebida[2].addEventListener('click', subtrairValorBebida3)
botaoSubBebida[3].addEventListener('click', subtrairValorBebida4)
botaoSubBebida[4].addEventListener('click', subtrairValorBebida5)
botaoSubBebida[5].addEventListener('click', subtrairValorBebida6)

// funções para selecionar a quantidade de produto

function adicionarValorLanche1(){

    if (valorLanche1.innerText >= 0){
    valorLanche1.innerText ++
    }

}

function adicionarValorLanche2(){

    let adicionarValor = document.getElementById('lanche2')
    if (adicionarValor.innerText >= 0){
    adicionarValor.innerText ++
}

}

function adicionarValorLanche3(){

    let adicionarValor = document.getElementById('lanche3')
    if (adicionarValor.innerText >= 0){
        adicionarValor.innerText ++
        }

}

function adicionarValorLanche4(){

    let adicionarValor = document.getElementById('lanche4')
    if (adicionarValor.innerText >= 0){
        adicionarValor.innerText ++
        }

}

function adicionarValorLanche5(){

    let adicionarValor = document.getElementById('lanche5')
    if (adicionarValor.innerText >= 0){
        adicionarValor.innerText ++
        }

}

function adicionarValorLanche6(){

    let adicionarValor = document.getElementById('lanche6')
    if (adicionarValor.innerText >= 0){
        adicionarValor.innerText ++
        }

}

function subtrairValorLanche1(){
    let subtrairValor = document.getElementById('lanche1')
    if (subtrairValor.innerText >= 1){
    subtrairValor.innerText --
    painel.innerHTML = `<strong>Pedido Total<br>R$${subtrairValor.innerText*5}.00</strong>`
}
}

function subtrairValorLanche2(){
    let subtrairValor = document.getElementById('lanche2')
    if (subtrairValor.innerText >= 1){
        subtrairValor.innerText --}
}

function subtrairValorLanche3(){
    let subtrairValor = document.getElementById('lanche3')
    if (subtrairValor.innerText >= 1){
        subtrairValor.innerText --}
}

function subtrairValorLanche4(){
    let subtrairValor = document.getElementById('lanche4')
    if (subtrairValor.innerText >= 1){
        subtrairValor.innerText --}
}

function subtrairValorLanche5(){
    let subtrairValor = document.getElementById('lanche5')
    if (subtrairValor.innerText >= 1){
        subtrairValor.innerText --}
}

function subtrairValorLanche6(){
    let subtrairValor = document.getElementById('lanche6')
    if (subtrairValor.innerText >= 1){
        subtrairValor.innerText --}
}

function adicionarValorBebida1(){

    if (valorBebida1.innerText >= 0){
    valorBebida1.innerText ++
    }

}

function adicionarValorBebida2(){

    if (valorBebida2.innerText >= 0){
    valorBebida2.innerText ++
    }

}
function adicionarValorBebida3(){

    if (valorBebida3.innerText >= 0){
    valorBebida3.innerText ++
    }

}
function adicionarValorBebida4(){

    if (valorBebida4.innerText >= 0){
    valorBebida4.innerText ++
    }

}
function adicionarValorBebida5(){

    if (valorBebida5.innerText >= 0){
    valorBebida5.innerText ++
    }

}
function adicionarValorBebida6(){

    if (valorBebida6.innerText >= 0){
    valorBebida6.innerText ++
    }

}

function subtrairValorBebida1(){
    if (valorBebida1.innerText >= 1){
    valorBebida1.innerText --}
}

function subtrairValorBebida2(){
    if (valorBebida2.innerText >= 1){
        valorBebida2.innerText --}
}

function subtrairValorBebida3(){
    if (valorBebida3.innerText >= 1){
        valorBebida3.innerText --}
}

function subtrairValorBebida4(){
    if (valorBebida4.innerText >= 1){
        valorBebida4.innerText --}
}

function subtrairValorBebida5(){
    if (valorBebida5.innerText >= 1){
        valorBebida5.innerText --}
}

function subtrairValorBebida6(){
    if (valorBebida6.innerText >= 1){
        valorBebida6.innerText --}
}

// painel 


// funções
function enviarParaCheckout(){
    let ValorAtual = document.getElementById('lanche1')
    if (ValorAtual.innerText >= 1)
    return alert(ValorAtual.innerText)
}



function mudarCategoriaBebidas(){
    //botoes superiores

    botaoBebidas.style.background = 'black';
    botaoBebidas.style.color = 'white';
    botaoLanches.style.background = 'yellow';
    botaoLanches.style.color = 'black';
    // quantidade de produtos
    valorLanche1.style.display = 'none'
    valorLanche2.style.display = 'none'
    valorLanche3.style.display = 'none'
    valorLanche4.style.display = 'none'
    valorLanche5.style.display = 'none'
    valorLanche6.style.display = 'none'
    valorBebida1.style.display = 'block'
    valorBebida2.style.display = 'block'
    valorBebida3.style.display = 'block'
    valorBebida4.style.display = 'block'
    valorBebida5.style.display = 'block'
    valorBebida6.style.display = 'block'
    botaoAddLanche[0].style.display = 'none'
    botaoAddLanche[1].style.display = 'none'
    botaoAddLanche[2].style.display = 'none'
    botaoAddLanche[3].style.display = 'none'
    botaoAddLanche[4].style.display = 'none'
    botaoAddLanche[5].style.display = 'none'
    botaoSubLanche[0].style.display = 'none'
    botaoSubLanche[1].style.display = 'none'
    botaoSubLanche[2].style.display = 'none'
    botaoSubLanche[3].style.display = 'none'
    botaoSubLanche[4].style.display = 'none'
    botaoSubLanche[5].style.display = 'none'
    botaoAddBebida[0].style.display = 'block'
    botaoAddBebida[1].style.display = 'block'
    botaoAddBebida[2].style.display = 'block'
    botaoAddBebida[3].style.display = 'block'
    botaoAddBebida[4].style.display = 'block'
    botaoAddBebida[5].style.display = 'block'
    botaoSubBebida[0].style.display = 'block'
    botaoSubBebida[1].style.display = 'block'
    botaoSubBebida[2].style.display = 'block'
    botaoSubBebida[3].style.display = 'block'
    botaoSubBebida[4].style.display = 'block'
    botaoSubBebida[5].style.display = 'block'

   
    // nomes lanches para bebidas

    Hamburguer.innerText = 'Coca Cola 1L: R$7,00'
    xBurger.innerText = 'Coca Cola Lata: R$3,50'
    eggsBurguer.innerText = 'Fanta 1L: R$6,00'
    eggsFrango.innerText = 'Fanta Lata: R$3,50'
    eggsBacon.innerHTML = 'Guaraná 1L: R$6,00'
    eggsCalabresa.innerText = 'Guaraná Lata: R$3,50'
    apagarDescricao.style.display = 'none'
    apagarDescricao1.style.display = 'none'
    apagarDescricao2.style.display = 'none'
    apagarDescricao3.style.display = 'none'
    apagarDescricao4.style.display = 'none'
    apagarDescricao5.style.display = 'none'
    // botao proximo
    botaoProximo.style.display = 'block'

}

function mudarCategoriaLanches(){
    //botoes superiores
    botaoBebidas.style.background = 'yellow';
    botaoBebidas.style.color = 'black';
    botaoLanches.style.background = 'black';
    botaoLanches.style.color = 'white';
    // quantidade de produtos
    valorLanche1.style.display = 'block'
    valorLanche2.style.display = 'block'
    valorLanche3.style.display = 'block'
    valorLanche4.style.display = 'block'
    valorLanche5.style.display = 'block'
    valorLanche6.style.display = 'block'
    valorBebida1.style.display = 'none'
    valorBebida2.style.display = 'none'
    valorBebida3.style.display = 'none'
    valorBebida4.style.display = 'none'
    valorBebida5.style.display = 'none'
    valorBebida6.style.display = 'none'
    botaoAddLanche[0].style.display = 'block'
    botaoAddLanche[1].style.display = 'block'
    botaoAddLanche[2].style.display = 'block'
    botaoAddLanche[3].style.display = 'block'
    botaoAddLanche[4].style.display = 'block'
    botaoAddLanche[5].style.display = 'block'
    botaoSubLanche[0].style.display = 'block'
    botaoSubLanche[1].style.display = 'block'
    botaoSubLanche[2].style.display = 'block'
    botaoSubLanche[3].style.display = 'block'
    botaoSubLanche[4].style.display = 'block'
    botaoSubLanche[5].style.display = 'block'
    botaoAddBebida[0].style.display = 'none'
    botaoAddBebida[1].style.display = 'none'
    botaoAddBebida[2].style.display = 'none'
    botaoAddBebida[3].style.display = 'none'
    botaoAddBebida[4].style.display = 'none'
    botaoAddBebida[5].style.display = 'none'
    botaoSubBebida[0].style.display = 'none'
    botaoSubBebida[1].style.display = 'none'
    botaoSubBebida[2].style.display = 'none'
    botaoSubBebida[3].style.display = 'none'
    botaoSubBebida[4].style.display = 'none'
    botaoSubBebida[5].style.display = 'none'
    // botao prox
    botaoProximo.style.display = 'none'

    // nomes lanches para bebidas

    Hamburguer.innerText = 'Hamburguer:'
    xBurger.innerText = 'XBurger:'
    eggsBurguer.innerText = 'EggsBurguer:'
    eggsFrango.innerText = 'EggsFrango:'
    eggsBacon.innerText = 'EggsBacon:'
    eggsCalabresa.innerText = 'EggsCalabresa:'
    apagarDescricao.style.display = 'block'
    apagarDescricao1.style.display = 'block'
    apagarDescricao2.style.display = 'block'
    apagarDescricao3.style.display = 'block'
    apagarDescricao4.style.display = 'block'
    apagarDescricao5.style.display = 'block'

}

function proximoPasso(){  
    Hamburguer.style.display = 'none'
    xBurger.style.display = 'none'
    eggsBurguer.style.display = 'none'
    eggsFrango.style.display = 'none'
    eggsBacon.style.display = 'none'
    eggsCalabresa.style.display = 'none'
    apagarDescricao.style.display = 'none'
    apagarDescricao1.style.display = 'none'
    apagarDescricao2.style.display = 'none'
    apagarDescricao3.style.display = 'none'
    apagarDescricao4.style.display = 'none'
    apagarDescricao5.style.display = 'none'
    valorLanche1.style.display = 'none'
    valorLanche2.style.display = 'none'
    valorLanche3.style.display = 'none'
    valorLanche4.style.display = 'none'
    valorLanche5.style.display = 'none'
    valorLanche6.style.display = 'none'
    ValorBebida1.style.display = 'none'
    ValorBebida2.style.display = 'none'
    ValorBebida3.style.display = 'none'
    ValorBebida4.style.display = 'none'
    ValorBebida5.style.display = 'none'
    ValorBebida6.style.display = 'none'
    botoes[0].style.display = 'none'
    botoes[1].style.display = 'none'
    botoes[2].style.display = 'none'
    botoes[3].style.display = 'none'
    botoes[4].style.display = 'none'
    botoes[5].style.display = 'none'
    botoes[6].style.display = 'none'
    botoes[7].style.display = 'none'
    botoes[8].style.display = 'none'
    botoes[9].style.display = 'none'
    botoes[10].style.display = 'none'
    botoes[11].style.display = 'none'
    botoes[12].style.display = 'none'
    botoes[13].style.display = 'none'
    botoes[14].style.display = 'none'
    botoes[15].style.display = 'none'
    botoes[16].style.display = 'none'
    botoes[17].style.display = 'none'
    botoes[18].style.display = 'none'
    botoes[19].style.display = 'none'
    botoes[20].style.display = 'none'
    botoes[21].style.display = 'none'
    botoes[22].style.display = 'none'
    botaoBebidas.style.background = 'black';
    botaoBebidas.style.color = 'White';
    botaoLanches.style.background = 'black';
    botaoLanches.style.color = 'white';
    botaoCheckout.style.background = 'Yellow'
    botaoCheckout.style.color = 'black'
    linhaHorizontal[0].style.display = 'none'
    linhaHorizontal[1].style.display = 'none'
    linhaHorizontal[2].style.display = 'none'
    linhaHorizontal[3].style.display = 'none'
    linhaHorizontal[4].style.display = 'none'
    linhaHorizontal[5].style.display = 'none'
    linhaHorizontal[6].style.display = 'none'
    linhaHorizontal[7].style.display = 'none'

}

