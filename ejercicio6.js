let form = document.getElementById('miFormulario');
let inputs = { 
    nombre: document.getElementById('nombre'), 
    correo: document.getElementById('correo') 
};
let success = document.getElementById('mensajeExito');
const validar = (input, msg) => {
    input.classList.add('error');
    let span = document.createElement('span');
    span.className = 'error-message';
    span.textContent = msg;
    input.parentElement.appendChild(span);
};
const limpiar = () => {
    document.querySelectorAll('.error-message').forEach(e => e.remove());
    Object.values(inputs).forEach(i => i.classList.remove('error'));
    success.classList.remove('show');
};
form.addEventListener('submit', e => {
    e.preventDefault();
    limpiar();
    let { nombre, correo } = inputs;
    let v = { 
        nombre: nombre.value.trim(), 
        correo: correo.value.trim() 
    };
    let error = false;
    if (!v.nombre) {
        validar(nombre, 'El nombre no puede estar vacío');
        error = true;
    } else if (v.nombre.length < 3) {
        validar(nombre, 'El nombre debe tener al menos 3 caracteres');
        error = true;
    }
    if (!v.correo) {
        validar(correo, 'El correo no puede estar vacío');
        error = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.correo)) {
        validar(correo, 'Ingresa un correo electrónico válido');
        error = true;
    }
    if (!error) {
        success.classList.add('show');
        form.reset();
        setTimeout(() => success.classList.remove('show'), 3000);
    }
});
Object.values(inputs).forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('error');
        this.parentElement.querySelector('.error-message')?.remove();
    });
});