function calculaMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var resultado = document.getElementById("resultado");

    for (var i = 1; i <= 4; i++) {
        var nota = parseFloat(document.getElementById("nota" + i).value);
    }

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media < 0 || media > 10) {
        resultado.innerHTML = "Erro. Insira apenas um valor de 0 a 10.";
    }

    else if (media >= 6) {
        resultado.innerHTML = "Parabéns. Você foi aprovado! <br> Sua média é: " + media.toFixed(2);
    }
    else {
        resultado.innerHTML = "Você não alcançou a média necessária. <br> Reprovado!";
    }
}

function limpaNotas() {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
    document.getElementById("resultado").innerHTML = "";
}


