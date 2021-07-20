

function validarCep() {
    var cep = document.getElementById("cep").value
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
