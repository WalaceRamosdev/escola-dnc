function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    fetch()
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        return response();
    })
    .catch((error) => {
        console.log(erro);
    })
}