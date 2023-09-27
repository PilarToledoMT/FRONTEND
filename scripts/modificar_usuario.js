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