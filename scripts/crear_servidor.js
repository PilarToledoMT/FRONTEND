document.addEventListener("DOMContentLoaded", function () {
  const botonCrearServidor = document.getElementById("crear_servidor");
  console.log("Botón clickeado");

  botonCrearServidor.addEventListener("click", function () {
    // Retrieve the value from the input field
    const nombreInput = document.getElementById("texto_nombre");
    const nombre = nombreInput.value;

    // Create an object with the data to send in the request
    const requestData = {
      nombre_servidor: nombre, // Use 'nombre_servidor' to match the existing controller
      imagen_servidor: null, // Include any other fields if needed
    };

    fetch("http://127.0.0.1:5000/servidores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData), // Include the data in the request body
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
