document.addEventListener('DOMContentLoaded', function() {
    const nombreServidorInput = document.querySelector('.desktop9-divinput3o04eu');
    const imagenServidorInput = document.querySelector('.desktop9-divinput3o04eu1');
    const modificarButton = document.querySelector('.desktop9-button');
    const volverAlInicioLink = document.querySelector('.desktop9-frame3');

    modificarButton.addEventListener('click', function() {
        const nombreServidor = nombreServidorInput.value;
        const imagenServidorFile = imagenServidorInput.files[0];

        if (!nombreServidor) {
            alert('Por favor, ingrese el nombre del servidor.');
            return;
        }

        const formData = new FormData();
        formData.append('nombre_servidor', nombreServidor);
        formData.append('imagen_servidor', imagenServidorFile);

        fetch('/servidores', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la solicitud.');
            }
        })
        .then(data => {
            if (data.message === 'Servidor creado con éxito') {
                alert('Servidor modificado con éxito.');
            } else {
                alert('Error al modificar el servidor: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error en la solicitud: ' + error.message);
        });
    });

    volverAlInicioLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '../templates/main.html';
    });
});
