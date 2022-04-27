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
let botaoProximo = document.getElementById('botaoProximo')
let botaoEnviar = document.getElementById('botaoEnviar')
let = painel = document.getElementsByClassName('PedidoTotal')[0]
let = valorLanche = document.getElementsByClassName('preco')


//eventos

document.getElementsByClassName('Bebidas')[0].addEventListener('click', mudarCategoria1)
document.getElementsByClassName('Lanches')[0].addEventListener('click', mudarCategoria2)
document.getElementById('lanche+1').addEventListener('click', adicionarValorLanche1)
document.getElementById('lanche+2').addEventListener('click', adicionarValorLanche2)
document.getElementById('lanche+3').addEventListener('click', adicionarValorLanche3)
document.getElementById('lanche+4').addEventListener('click', adicionarValorLanche4)
document.getElementById('lanche+5').addEventListener('click', adicionarValorLanche5)
document.getElementById('lanche+6').addEventListener('click', adicionarValorLanche6)
document.getElementById('lanche-1').addEventListener('click', subtrairValorLanche1)
document.getElementById('lanche-2').addEventListener('click', subtrairValorLanche2)
document.getElementById('lanche-3').addEventListener('click', subtrairValorLanche3)
document.getElementById('lanche-4').addEventListener('click', subtrairValorLanche4)
document.getElementById('lanche-5').addEventListener('click', subtrairValorLanche5)
document.getElementById('lanche-6').addEventListener('click', subtrairValorLanche6)

// funções para selecionar a quantidade de produto

function adicionarValorLanche1(){

    let adicionarValor = document.getElementById('lanche1')
    if (adicionarValor.innerText >= 0){
    adicionarValor.innerText ++
    painel.innerHTML = `<strong>Pedido Total<br>R$${adicionarValor.innerText*5}.00</strong>`
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

// painel 


// funções
function enviarParaCheckout(){
    let ValorAtual = document.getElementById('lanche1')
    if (ValorAtual.innerText >= 1)
    return alert(ValorAtual.innerText)
}



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
    botaoProximo.style.display = 'block'

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

