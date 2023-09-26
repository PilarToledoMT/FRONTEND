document.addEventListener("DOMContentLoaded", function () {
  const botonCrearServidor = document.getElementById("crear_servidor");
  
  botonCrearServidor.addEventListener("click", function () {
    const nombreInput = document.getElementById("texto_nombre");
    const nombre = nombreInput.value;

    const requestData = {
      nombre_servidor: nombre,
      imagen_servidor: null,
    };

    fetch("http://127.0.0.1:5000/servidores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle successful response
        } else {
          // Handle failed response
        }
      })
      .catch((error) => {
        // Handle network or other errors
      });
  });
});
  