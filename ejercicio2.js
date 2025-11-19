let parrafo= document.querySelector("p");
let botonCambiar=document.getElementById("botonCambiar");
textoOriginal=true;

botonCambiar.addEventListener("click", function() {
    if (textoOriginal){
        parrafo.textContent = "Texto cambiado";
        parrafo.classList.add("changed");
        textoOriginal = false;
    } else {
        parrafo.textContent = "texto Prueba";
        parrafo.classList.remove(changed);
        textoOriginal = true;
    }
});

