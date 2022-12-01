function MaiorNumero(){
    let n1 = document.getElementById("numero1").value 
    let n2 = document.getElementById("numero2").value 
    let n3 = document.getElementById("numero3").value 
    if(parseInt(n1) > parseInt(n2)> parseInt(n3)){

        document.getElementById("resultado").innerHTML = "O maior número é: " + n1
    }

    else if{
        document.getElementById("resultado").innerHTML = "O maior número é: " +n2
    }

    else{
        document.getElementById("resultado").innerHTML = "O maior número é: " +n3
    }
}