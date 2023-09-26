function togglePasswordVisibility() {
    const passwordInput = document.querySelector('#password-input');
    const togglePassword = document.querySelector('#toggle-password');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.textContent = '👁️';
    } else {
      passwordInput.type = 'password';
      togglePassword.textContent = '👁️';
    }
  }

document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.querySelector('.desktop2-button');

  loginButton.addEventListener('click', function () {
      const email = document.querySelector('.desktop2-divinput3o04eu').value;
      const password = document.querySelector('#password-input').value;

      const userData = {
          email: email,
          contrasenia: password
      };
      fetch('http://127.0.0.1:5000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      })
      .then(response => {
          if (response.ok) {
              window.location.href = '../templates/main.html';
          } else {
              console.error('Error al iniciar sesión.');
          }
      })
      .catch(error => {
          console.error('Error de red:', error);
      });
  });
});
