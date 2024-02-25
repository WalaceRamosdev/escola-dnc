async function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`viacep.com.br/ws/${}/json/`)
        const data = await response.json()
        console.log(data);
        document.getElementById('rua').value = data.logradouro
        document.getElementById('bairro').value = data.bairro
        document.getElementById('cidade').value = data.localidade
    } catch(error) {
        alert(error.message);
    }
}