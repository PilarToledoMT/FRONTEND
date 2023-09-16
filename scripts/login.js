const passwordInput = document.getElementById('password-input');
  const togglePassword = document.getElementById('toggle-password');

  togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });