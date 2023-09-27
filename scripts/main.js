document.addEventListener('DOMContentLoaded', function () {
    const email = localStorage.getItem('email');

    if (email) {
        fetch(`http://127.0.0.1:5000/usuarios/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(userData => {
            const usernameElement = document.querySelector('.desktop3-text06 span');
            usernameElement.textContent = userData.nombre_usuario;

            const imageUrl = userData.imagen_perfil.imagen;

            const userImageElement = document.querySelector('.desktop3-divavatar1');
            userImageElement.src = imageUrl;

            const userId = userData.id_usuario;

            fetch(`http://127.0.0.1:5000/servidor/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(serverData => {
                const serverImagesContainer = document.getElementById('server-images-container');

                serverData.forEach(server => {
                    const serverButton = document.createElement('button');
                    serverButton.style.backgroundImage = `url(${server.imagen_servidor})`;
                    serverButton.alt = server.nombre_servidor;
                    serverButton.classList.add('server-button'); 

                    serverImagesContainer.appendChild(serverButton);
                });

                if (serverData.length > 0) {
                    const primerServidor = serverData[0].nombre_servidor;
                    const nombreServidorElement = document.querySelector('.desktop3-text12');
                    nombreServidorElement.textContent = primerServidor;
                } else {
                    const nombreServidorElement = document.querySelector('.desktop3-text12');
                    nombreServidorElement.textContent = '';
                }
            })
            .catch(error => {
                console.error('Error al obtener los servidores del usuario:', error);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos del usuario:', error);
        });
    }
});
