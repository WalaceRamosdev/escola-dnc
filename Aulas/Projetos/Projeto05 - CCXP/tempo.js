const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "01 Jan 2024"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDia = Math.floor (segTotal / 60 / 60 / 24);
    const finalHora = Math.floor (segTotal / 60/ 60)%24;
    const finalMinuto = Math.floor (segTotal / 60)%60;
    const finalSegundo = Math.floor (segTotal) %60;

    dia.innerHTML = `${finalDia}D`
    hora.innerHTML = formatoTempo (`${finalHora}H`)
    minuto.innerHTML = formatoTempo (`${finalMinuto}M`)
    segundo.innerHTML = formatoTempo (`${finalSegundo}S`)
}

//function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)