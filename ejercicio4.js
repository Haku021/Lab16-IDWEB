let contador = 0;
let Mas = document.getElementById("Mas");
let Menos = document.getElementById("Menos");
let valor = document.getElementById("valor");
let mensaje = document.getElementById("mensaje");

function aumentar() {
    contador++;
    valor.textContent = contador;
    mensaje.textContent = "";
}
function disminuir() {
    if (contador > 0) {
        contador--;
        valor.textContent = contador;
        mensaje.textContent = "";
    } else {
        mensaje.textContent = " El contador no puede ser negativo";
    }
}
Mas.addEventListener("click", aumentar);
Menos.addEventListener("click", disminuir);
