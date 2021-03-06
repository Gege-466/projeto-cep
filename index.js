
function validarCep() {
 
    var cep = getCepFromInput()
    if (cep == "") {
        document.getElementById("erroAlert").innerHTML = ("o cep nao pode ser vazio")
    }
    if(cep.match(/[a-zA-Z]/) != null) {
        document.getElementById("erroAlert").innerHTML = ("somente numeros")
    }
}

function clean() {
    document.querySelectorAll("td").forEach(x => x.innerHTML = "");
    document.getElementById("cep").value = "";
}

function findCep() {
    const cep = getCepFromInput();

    const table = document.querySelector('[id=tbodyCep] > tr');

    console.log(table);

    getCepFromViaCep(cep)
    .then(x => x.json())
    .then(x => {
        table.innerHTML = '';
        table.innerHTML += `<td>${x.logradouro}</td>`;
        table.innerHTML += `<td>${x.bairro}</td>`;
        table.innerHTML += `<td>${x.localidade}</td>`;
        table.innerHTML += `<td>${x.uf}</td>`;
        table.innerHTML += `<td>${x.cep}</td>`;
    });
}

function getCepFromInput() {
    const cep = document.getElementById('cep').value ;

    return cep;
}

function getCepFromViaCep(cep) {
    return fetch(`http://localhost:3333/${cep}`);
}
$('#meuModal').modal('show')

function validarCepfindCep() {
    return validarCep() + findCep()
}
