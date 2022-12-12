
let periodo = document.getElementById("verificar").value

if (periodo == "m") {
    document.getElementById("resultado").innerHTML = "Bom dia!"
}

else if (periodo == "v") {
    document.getElementById("resultado").innerHTML = "Boa Tarde!"

}
else if (periodo == "n") {
    document.getElementById("resultado").innerHTML = "Boa Noite!"
}else{
    document.getElementById("resultado").innerHTML = "Período Inválido"
}

