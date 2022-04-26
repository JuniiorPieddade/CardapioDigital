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
let ValorBebida1 = document.getElementById('bebida1')
let ValorBebida2 = document.getElementById('bebida2')
let ValorBebida3 = document.getElementById('bebida3')
let ValorBebida4 = document.getElementById('bebida4')
let ValorBebida5 = document.getElementById('bebida5')
let ValorBebida6 = document.getElementById('bebida6')
let botoes = document.getElementsByTagName('input')
let botaoCheckout = document.getElementsByClassName('Checkout')[0]
let linhaHorizontal = document.getElementsByClassName('linhaHorizontal1')
let botaoEnviar = document.getElementById('botaoEnviar')

//eventes

document.getElementsByClassName('botaoEnviar')[0].addEventListener('click', enviarPedido)
document.getElementsByClassName('Bebidas')[0].addEventListener('click', mudarCategoria1)
document.getElementsByClassName('Lanches')[0].addEventListener('click', mudarCategoria2)
document.getElementsByClassName('botaoEnviar')[0].addEventListener('click', proximoPasso)
document.getElementById('lanche+1').addEventListener('click', adicionarValor1)
document.getElementById('lanche+2').addEventListener('click', adicionarValor2)
document.getElementById('lanche+3').addEventListener('click', adicionarValor3)
document.getElementById('lanche+4').addEventListener('click', adicionarValor4)
document.getElementById('lanche+5').addEventListener('click', adicionarValor5)
document.getElementById('lanche+6').addEventListener('click', adicionarValor6)
document.getElementById('lanche-1').addEventListener('click', subtrairValor1)
document.getElementById('lanche-2').addEventListener('click', subtrairValor2)
document.getElementById('lanche-3').addEventListener('click', subtrairValor3)
document.getElementById('lanche-4').addEventListener('click', subtrairValor4)
document.getElementById('lanche-5').addEventListener('click', subtrairValor5)
document.getElementById('lanche-6').addEventListener('click', subtrairValor6)

// funções para selecionar a quantidade de produto

function adicionarValor1(){

    let adicionarValor = document.getElementById('lanche1')
    if (adicionarValor.innerText >= 0)
    return adicionarValor.innerText ++;

}

function adicionarValor2(){

    let adicionarValor = document.getElementById('lanche2')
    if (adicionarValor.innerText >= 0)
    return adicionarValor.innerText ++;

}

function adicionarValor3(){

    let adicionarValor = document.getElementById('lanche3')
    if (adicionarValor.innerText >= 0)
    return adicionarValor.innerText ++;

}

function adicionarValor4(){

    let adicionarValor = document.getElementById('lanche4')
    if (adicionarValor.innerText >= 0)
    return adicionarValor.innerText ++;

}

function adicionarValor5(){

    let adicionarValor = document.getElementById('lanche5')
    if (adicionarValor.innerText >= 0)
    return adicionarValor.innerText ++;

}

function adicionarValor6(){

    let adicionarValor = document.getElementById('lanche6')
    if (adicionarValor.innerText >= 0)
    return adicionarValor.innerText ++;

}

function subtrairValor1(){
    let subtrairValor = document.getElementById('lanche1')
    if (subtrairValor.innerText >= 1)
    return subtrairValor.innerText --;
}

function subtrairValor2(){
    let subtrairValor = document.getElementById('lanche2')
    if (subtrairValor.innerText >= 1)
    return subtrairValor.innerText --;
}

function subtrairValor3(){
    let subtrairValor = document.getElementById('lanche3')
    if (subtrairValor.innerText >= 1)
    return subtrairValor.innerText --;
}

function subtrairValor4(){
    let subtrairValor = document.getElementById('lanche4')
    if (subtrairValor.innerText >= 1)
    return subtrairValor.innerText --;
}

function subtrairValor5(){
    let subtrairValor = document.getElementById('lanche5')
    if (subtrairValor.innerText >= 1)
    return subtrairValor.innerText --;
}

function subtrairValor6(){
    let subtrairValor = document.getElementById('lanche6')
    if (subtrairValor.innerText >= 1)
    return subtrairValor.innerText --;
}

// função 
function enviarPedido(){
    let ValorAtual = document.getElementById('lanche1')
    if (ValorAtual.innerText >= 1)
    return alert(ValorAtual.innerText)
}

// função

function mudarCategoria1(){
    
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
    ValorBebida1.style.display = 'block'
    ValorBebida2.style.display = 'block'
    ValorBebida3.style.display = 'block'
    ValorBebida4.style.display = 'block'
    ValorBebida5.style.display = 'block'
    ValorBebida6.style.display = 'block'
   
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

}

function mudarCategoria2(){
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
    ValorBebida1.style.display = 'none'
    ValorBebida2.style.display = 'none'
    ValorBebida3.style.display = 'none'
    ValorBebida4.style.display = 'none'
    ValorBebida5.style.display = 'none'
    ValorBebida6.style.display = 'none'

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

