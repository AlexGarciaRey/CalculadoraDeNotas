var notas = document.getElementsByClassName("nota");
    var agregarNota = document.getElementById("agregarNota");
    var calcularMedia = document.getElementById("calcularMedia");
    var resultado = document.getElementById("resultado");

    agregarNota.addEventListener("click", function() {
        var div = document.createElement("div");
        div.innerHTML = '<label for="nota">Nota:</label><input type="number" class="nota"><button class="eliminarNota">Eliminar</button>';
        document.getElementById("notas").appendChild(div);
    });

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("eliminarNota")) {
            event.target.parentNode.remove();
        }
    });

    calcularMedia.addEventListener("click", function() {
        var sumatoria = 0;
        for (var i = 0; i < notas.length; i++) {
            sumatoria += parseFloat(notas[i].value);
        }
        var media = sumatoria / notas.length;
        resultado.innerHTML = "La media es: " + media.toFixed(2);
    });
