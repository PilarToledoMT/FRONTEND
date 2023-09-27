function cargarImagenYObtenerId() {
    const inputImagen = document.querySelector('#input-imagen');
    
    const direccionImagen = inputImagen.value;

    if (!direccionImagen) {
        console.error("No se ha seleccionado una imagen");
        return;
    }

    const formDataImagen = new FormData();
    formDataImagen.append('imagen', direccionImagen);

    fetch('http://127.0.0.1:5000/cargar_imagen')
}

function guardarCambios() {
    const nombre = document.querySelector('.desktop11-divinput3o04eu').value;
    const apellido = document.querySelector('.desktop11-input-password').value;
    const email = document.querySelector('.desktop11-input-password1').value;
    const nombre_usuario = document.querySelector('.desktop11-input-password2').value;
    const contrasenia = document.querySelector('.desktop11-input-password3').value;

    const userId = localStorage.getItem('userId');

    const data = {
        id_usuario: userId,
        nombre_usuario: nombre_usuario,
        nombre: nombre,
        apellido: apellido,
        email: email,
        contrasenia: contrasenia,
    }
}