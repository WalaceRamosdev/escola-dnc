
async function getAddressByCep() {

    /* A partir desta primeira variavel const Cep, iremos estar capturando o que o usuario estará fornecendo na página*/

    const Cep = document.getElementById('cepi').value;

    /* Aqui daremos inicio ao processo de consumo da api */

    try {

        /* Iniciamos com o processo fetch aonde são criadas variaveis const.
        Nelas serão armazenadas os valores de endereço da api junto com as respostas em json */

        const response = await fetch(`https://viacep.com.br/ws/${Cep}/json/`);
        const data = await response.json();
        console.log(data);

        /* Segundo passo é capturar por forma de Id, os elementos HTML que irão receber os dados fornecidos pela resposta da api */

        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;

        /* Último passo é enviar uma mensagem de erro ao usuario, caso algum dado fornecido por ele esteja incorreto */

    } catch(error) {
        alert('Neste momento você receberá apenas os dados da temperatura de Região. Para receber informações sobre o endereço, informe o seu CEP');
    }
}

/* Aqui o processo se repete, mas com algumas pequenas alterações */

async function getPrevisao() {
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;
    try {

        /* Repetimos o processo para consumo da api, como foi feito acima */

        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`)
        const data = await response.json()
        console.log(data);

        

        if (data.hourly && Array.isArray(data.hourly.temperature_2m)) {
            const ultimaTemperatura = data.hourly.temperature_2m[data.hourly.temperature_2m.length - 1];
            document.getElementById('celsius').innerHTML = `${ultimaTemperatura}° C`;
        } else {}

    } catch (error) {
        alert('Neste momento você receberá apenas os dados do seu endereço. Para receber informações sobre a temperatura da região, informe sua Latitude e Longitude')
    }
}



