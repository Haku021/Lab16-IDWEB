let inputTexto = document.getElementById("inputTexto");
let btnAgregar = document.getElementById("btnAgregar");
let btnEliminar = document.getElementById("btnEliminar");
let miLista = document.getElementById("miLista");
let contador = document.getElementById("contador");

function actualizarContador() {
    let numElementos = miLista.children.length;
    contador.textContent = `${numElementos} elemento${numElementos !== 1 ? 's' : ''} en la lista`;
    btnEliminar.disabled = numElementos === 0;
}
function agregarElemento() {
    let texto = inputTexto.value.trim();
    if (texto === '') {
        alert('Por favor, escribe algo antes de agregar');
        return;
    }
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = texto;
    
    miLista.appendChild(nuevoElemento);
    inputTexto.value = '';
    inputTexto.focus();
    
    actualizarContador();
}
function eliminarUltimo() {
    if (miLista.children.length > 0) {
        miLista.removeChild(miLista.lastElementChild);
        actualizarContador();
    }
}
btnAgregar.addEventListener('click', agregarElemento);
btnEliminar.addEventListener('click', eliminarUltimo);

inputTexto.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarElemento();
    }
});
actualizarContador();


