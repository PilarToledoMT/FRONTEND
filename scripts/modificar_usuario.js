document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del primer formulario
    const inputRutaImagen = document.getElementById('input-imagen');

    // Obtener elementos del segundo formulario
    const botonGuardarCambios = document.getElementById('guardarCambiosButton');
    const nombreInput = document.getElementById('nombreInput');
    const apellidoInput = document.getElementById('apellidoInput');
    const emailInput = document.getElementById('emailInput');
    const nombreUsuarioInput = document.getElementById('nombreUsuarioInput');
    const contraseniaInput = document.getElementById('contraseniaInput');

    // Manejar el evento de envío del primer formulario
    if (inputRutaImagen) {
        inputRutaImagen.addEventListener('change', function (e) {
            // Lógica para procesar el cambio de imagen
            // e.g., obtener el valor del archivo seleccionado
        });
    }

    // Manejar el evento de clic en el segundo formulario
    if (botonGuardarCambios) {
        botonGuardarCambios.addEventListener('click', function () {
            const email = emailInput.value;
            const idImagen = localStorage.getItem('id_imagen');
            const idUsuario = localStorage.getItem('userId');

            if (email && idImagen && idUsuario) {
                const nombre = nombreInput.value;
                const apellido = apellidoInput.value;
                const nombreUsuario = nombreUsuarioInput.value;
                const contrasenia = contraseniaInput.value;

                const datosUsuario = {
                    id_usuario: idUsuario,
                    nombre_usuario: nombreUsuario,
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    contrasenia: contrasenia,
                    id_imagen: idImagen,
                };

                fetch(`http://127.0.0.1:5000/usuarios/${email}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(datosUsuario),
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        console.log('Usuario actualizado con éxito');
                    } else {
                        console.error('No se pudo actualizar el usuario');
                    }
                })
                .catch(error => {
                    console.error('Error en la solicitud PUT:', error);
                });
            } else {
                console.error('No se encontraron datos necesarios en el localStorage');
            }
        });
    }
});
