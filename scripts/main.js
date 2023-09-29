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
            localStorage.setItem('userId', userId)

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
                    const primerServidor = serverData[0];
                    const nombreServidorElement = document.querySelector('.desktop3-text12');
                    nombreServidorElement.textContent = primerServidor.nombre_servidor;
                    localStorage.setItem('id_servidor', primerServidor.id_servidor);

                } else {
                    const nombreServidorElement = document.querySelector('.desktop3-text12');
                    nombreServidorElement.textContent = '';
                }
                fetch(`http://127.0.0.1:5000/canal`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    .then(response => response.json())
                    .then(canalesData => {

                        if (canalesData && Array.isArray(canalesData.canales)) {
                            const channelContainer = document.querySelector('.desktop3-channel-container');
                    
                            channelContainer.innerHTML = '';
                    
                            canalesData.canales.forEach(channel => {
                                const channelElement = document.createElement('div');
                                channelElement.className = 'desktop3-channel-element';
                    
                                const channelImage = document.createElement('img');
                                channelImage.src = '../assets/hashtag.png';
                                channelImage.alt = 'Canal';

                                channelImage.style.width = '30px';
                                channelImage.style.height = '30px';
                    
                                const channelButton = document.createElement('button');
                                channelButton.textContent = channel.nombre_canal;
                                channelButton.className = "channel-button";

                                channelButton.setAttribute('data-channel-id', channel.id_canal);

                                const settingsLink = document.createElement('a');
                                settingsLink.href = '../templates/modificar_canal.html';

                                const settingsIcon = document.createElement('img');
                                settingsIcon.src = '../assets/configuraciones.png';
                                settingsIcon.alt = 'Configuraciones';

                                settingsIcon.style.widht = '20px';
                                settingsIcon.style.height = '20px';
                                settingsLink.appendChild(settingsIcon);
                                settingsIcon.className = 'desktop3-settings-image';
                    
                                channelElement.appendChild(channelImage);
                                channelElement.appendChild(channelButton);
                                channelElement.appendChild(settingsLink);
                    
                                channelContainer.appendChild(channelElement);

                                channelButton.addEventListener('click', function () {
                                    const canalNombre = channelButton.textContent;

                                    fetch(`http://127.0.0.1:5000/mensajes/${canalNombre}`, {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        }
                                    })
                                    .then(response => response.json())
                                    .then (messagesData => {
                                        const chatbox = document.getElementById('messages-container');
                                        chatbox.innerHTML = '';
                                        
                                        if (messagesData && Array.isArray(messagesData.mensajes)) {
                                            messagesData.mensajes.forEach (message => {
                                                const messageElement = document.createElement('div');
                                                messageElement.classList.add('message-container');
                                                
                                                const usernameAndTimestampElement = document.createElement('strong');
                                                usernameAndTimestampElement.textContent = `${message.nombre_usuario} (${message.fecha_hora})`;

                                                const messageTextElement = document.createElement('span');
                                                messageTextElement.textContent = message.mensaje;

                                                messageElement.appendChild(usernameAndTimestampElement);
                                                messageElement.appendChild(document.createElement('br')); 
                                                messageElement.appendChild(messageTextElement);

                                                chatbox.appendChild(messageElement);
                                        });
                                    } else {
                                        console.error('Los datos de los mensajes no son válidos');
                                    } 
                                    })
                                    .catch(error => {
                                        console.error("Error al obtener los mensajes del canal:", error);
                                    });
                                });
                            });
                        } else {
                            console.error('Los datos de los canales no son válidos.');
                        }
                    })
                    .catch(error => {
                        console.error('Error al obtener los canales:', error);
                    });
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

