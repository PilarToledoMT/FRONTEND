document.addEventListener("DOMContentLoaded", function () {
    const botonCrearServidor = document.getElementById("crear_servidor");
    console.log("Botón clickeado");
  
    botonCrearServidor.addEventListener("click", function () {
      // Realizar una solicitud al servidor backend usando fetch
      fetch("http://127.0.0.1:5000/servidores", {  // Esta es la ruta que corresponde a create_server_controller
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ajusta el tipo de contenido según tus necesidades
          // Otros encabezados si es necesario
        },
        body: JSON.stringify({/* Puedes enviar datos en el cuerpo de la solicitud si es necesario */}),
      })
        .then((response) => {
          // Verificar la respuesta del servidor y tomar medidas según sea necesario
          if (response.status === 200) {
            // La solicitud se completó con éxito
            // Realiza acciones adicionales si es necesario
          } else {
            // La solicitud falló, manejar el error aquí
          }
        })
        .catch((error) => {
          // Manejar errores de red o de otro tipo aquí
        });
    });
  });
  