const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const lancamento = "25 dec 2023"

function countdown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor (segTotal / 60 / 60 / 24); 
    const finalHoras = Math.floor (segTotal /60 / 60) %24;
    const finalMinutos = Math.floor (segTotal /60 ) %60;
    const finalSegundos = Math.floor (segTotal) %60;
}