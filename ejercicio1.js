let parrafo = document.querySelector("p");
let botonCambiar = document.getElementById("botonCambiar");

botonCambiar.addEventListener("click", function() {
    parrafo.textContent = "Texto cambiado"; 
});