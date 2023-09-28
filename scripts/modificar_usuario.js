document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.desktop11-form form');
    const inputRutaImagen = document.querySelector('.desktop11-input-password4');
    
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        const rutaImagen = inputRutaImagen.value;

        // Paso 1: Realiza una solicitud POST para guardar la imagen
        fetch(`http://127.0.0.1:5000/imagenes/${rutaImagen}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                console.log('Imagen guardada con éxito');
        
                fetch('http://127.0.0.1:5000/imagenes', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data.imagenes_perfil) && data.imagenes_perfil.length > 0) {
                       
                        const imagenEncontrada = data.imagenes_perfil.find(imagen => imagen.imagen === rutaImagen);
                        
                        if (imagenEncontrada) {
                            const idImagen = imagenEncontrada.id_imagen;
                            console.log('ID de la imagen encontrada:', idImagen);

                            localStorage.setItem('id_imagen', idImagen);
                            console.log('ID de la imagen almacenado en el localStorage.');
                        } else {
                            console.error('La imagen no fue encontrada.');
                        }
                    } else {
                        console.error('No se encontraron imágenes.');
                    }
                })
                .catch(error => {
                    console.error('Error en la solicitud GET de imágenes:', error);
                });
            } else {
                console.error('No se pudo guardar la imagen');
            }
        })
        .catch(error => {
            console.error('Error en la solicitud POST para guardar la imagen:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const botonGuardarCambios = document.querySelector('.desktop11-button1');
    const formulario = document.querySelector('.desktop11-form form');

    botonGuardarCambios.addEventListener('click', function () {
        const email = localStorage.getItem('email');
        const idImagen = localStorage.getItem('id_imagen');
        const idUsuario = localStorage.getItem('userId');

        if (email && idImagen && idUsuario) {
            const nombre = formulario.querySelector('.desktop11-divinput3o04eu').value;
            const apellido = formulario.querySelector('.desktop11-input-password').value;
            const nombreUsuario = formulario.querySelector('.desktop11-input-password2').value;
            const contrasenia = formulario.querySelector('.desktop11-input-password3').value;

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
});
