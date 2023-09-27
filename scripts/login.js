document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password-input");
    const togglePassword = document.getElementById("toggle-password");
  
    function togglePasswordVisibility() {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    }
  
    togglePassword.addEventListener("click", togglePasswordVisibility);
  });

document.addEventListener('DOMContentLoaded', function () {
  const loginButton = document.querySelector('.desktop2-button');

  loginButton.addEventListener('click', function () {
      const email = document.querySelector('.desktop2-divinput3o04eu').value;
      const contrasenia = document.querySelector('#password-input').value;

      const userData = {
          email: email,
          contrasenia: contrasenia
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
              alert("Usuario o contraseña incorrectos")
          }
      })
      .catch(error => {
          console.error('Error de red:', error);
      });
  });
});
