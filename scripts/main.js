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
                    
                    serverButton.setAttribute('data-server-id', server.id_servidor);

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

                const serverButtons = document.querySelectorAll('.server-button');
                serverButtons.forEach(button => {
                    button.addEventListener("click", function () {
                        const serverId = button.getAttribute('data-server-id');

                        fetch(`http://127.0.0.1:5000/canal/${serverId}/`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                        .then(response => response.json())
                        .then(canalesData => {
                            const channelContainer = document.querySelector('.desktop3-channel-container');
                            channelContainer.innerHTML = '';

                            canalesData.forEach(nombre_canal => {
                                const channelDiv = document.createElement('div');
                                channelDiv.classList.add('desktop3-channel-item');

                                const numeralImage = document.createElement('img');
                                numeralImage.src = '../assets/hashtag.png';
                                numeralImage.alt = '#';
                                channelDiv.appendChild(numeralImage);

                                const channelNameElement = document.createElement('span');
                                channelNameElement.textContent = nombre_canal;
                                channelDiv.appendChild(channelNameElement);

                                channelContainer.appendChild(channelDiv);
                            })
                        })
                    })
                })
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

