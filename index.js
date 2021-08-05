
function validarCep() {
    var cep = getCepFromInput()
    if (cep == "") {
        alert("o cep nao pode ser vazio")
    }
    if(cep.match(/[a-zA-Z]/) != null) {
        alert("somente numeros")
    }
}

function clean() {
    document.querySelectorAll("td").forEach(x => x.innerHTML = "");
    document.getElementById("cep").value = "";
}

const findCep = () => {
    const cep = getCepFromInput();

    const table = document.querySelector('[id=tbodyCep] > tr');

    console.log(table);

    getCepFromViaCep(cep)
    .then(x => x.json())
    .then(x => {
        console.log(x);
        table.innerHTML = `<td>${x.logradouro}</td>`
    });
}

function getCepFromInput() {
    const cep = document.getElementById('cep').value ;

    return cep;
}

function getCepFromViaCep(cep) {
    return fetch(`http://localhost:3333/${cep}`);
}
