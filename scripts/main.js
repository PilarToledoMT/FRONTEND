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
        })
        .catch(error => {
            console.error('Error al obtener los datos del usuario:', error);
        });
    }
});