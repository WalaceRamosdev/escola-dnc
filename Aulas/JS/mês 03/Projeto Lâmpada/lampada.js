var lamp = window.document.getElementById('lampada')

function estaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if (!estaQuebrada()){
    lamp.src = 'img/on.svg'}
}

function Desligar(){
    if (!estaQuebrada()){
    lamp.src = 'img/off.svg'}
}

lamp.addEventListener ('click', Quebrar)
function Quebrar(){
    lamp.src = 'img/broken.svg'
}