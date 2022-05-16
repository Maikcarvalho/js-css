const paragrafo = document.createElement("p")
paragrafo.innerHTML = "É culpa do Maik!"

document.body.appendChild(paragrafo)

function mostrarTelefone(){
    document.getElementById("telefone").style.display = "block"
}

function apagarTelefone(){
    document.body.removeChild(telefone)
}