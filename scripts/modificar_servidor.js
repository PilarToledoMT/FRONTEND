document.addEventListener('DOMContentLoaded', function() {
    const nombreServidorInput = document.querySelector('.desktop9-divinput3o04eu');
    const imagenServidorInput = document.querySelector('.desktop9-divinput3o04eu1');
    const modificarButton = document.querySelector('.desktop9-button');
    const volverAlInicioLink = document.querySelector('.desktop9-frame3');

    // Obtener los datos almacenados en localStorage
    const nombreServidorGuardado = localStorage.getItem('nombre_servidor');
    const imagenServidorGuardada = localStorage.getItem('imagen_servidor');
    const idServidorGuardado = localStorage.getItem('id_servidor'); // Obtener el ID del servidor

    // Llenar los campos de texto con los datos almacenados
    nombreServidorInput.value = nombreServidorGuardado; 

    // Verificar si hay una imagen almacenada y cargarla
    if (imagenServidorGuardada) {
        const imagen = document.createElement('img');
        imagen.src = imagenServidorGuardada;
        imagenServidorInput.appendChild(imagen);
    }

    modificarButton.addEventListener('click', function() {
        const nombreServidor = nombreServidorInput.value;
        const imagenServidorFile = imagenServidorInput.files[0];

        // Validar los datos antes de enviarlos al servidor
        if (!nombreServidor) {
            alert('Por favor, ingrese un nombre de servidor válido.');
            return;
        }

        const requestData = {
            nombre_servidor: nombreServidor,
            imagen_servidor: imagenServidorFile,
        };

        fetch(`http://127.0.0.1:5000/servidores/${idServidorGuardado}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then((response) => {
            if (response.status === 200) {
                // Maneja una respuesta exitosa
                alert('¡Servidor modificado con éxito!');
                // Limpiar los valores después del éxito
                nombreServidorInput.value = '';
                imagenServidorInput.value = '';
            } else {
                // Maneja una respuesta fallida
                alert('Error al modificar el servidor.');
            }
        })
        .catch((error) => {
            // Maneja errores de red u otros errores
            console.error('Error en la solicitud: ' + error.message);
            alert('Error en la solicitud. Por favor, inténtelo de nuevo más tarde.');
        });
    });

    volverAlInicioLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../templates/main.html';
    });
});
