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
        .then(data => {
            document.querySelector('.desktop7-text02 span').textContent = `${data.nombre} ${data.apellido}`;
            document.querySelector('.desktop7-text04 span').textContent = data.nombre_usuario;
            document.querySelector('.desktop7-text06 span').textContent = data.nombre;
            document.querySelector('.desktop7-text08 span').textContent = data.apellido;
            document.querySelector('.desktop7-text10 span').textContent = data.email;

            const avatarImg = document.querySelector('.desktop7-ellipse1');
            avatarImg.src = data.imagen_perfil.imagen;
            avatarImg.alt = data.nombre_usuario;
        })
        .catch(error => {
            console.error('Error al obtener los datos del usuario', error)
        });
    }
});