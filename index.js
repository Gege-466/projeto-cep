
function validarCep() {
    var cep = document.getElementById("cep").value
    if (cep == "") {
        alert("o cep nao pode ser vazio")
    }
    if(cep.match(/[a-zA-Z]/) != null) {
        alert("somente numeros")
    }
}