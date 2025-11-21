let boton=document.getElementById("modOscuro");
function cambiarModo(){
    document.body.classList.toggle("oscuro");
    if(document.body.classList.contains("oscuro")){
        boton.textContent="Modo Claro";
    }else{
        boton.textContent="Modo Oscuro";
    }
}
boton.addEventListener("click",cambiarModo);
