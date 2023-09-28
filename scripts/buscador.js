document.addEventListener("DOMContentLoaded", function () {
  const botonBuscar = document.getElementById("searchButton");
  const buscarInput = document.getElementById("searchInput");
  const divSelect = document.getElementById("selectBox"); // Obtener el div del cuadro seleccionable
  const divUnir = document.getElementById("botonUnir"); // Obtener el div del botón "UNIRME"

  botonBuscar.addEventListener("click", function () {
    const buscar = buscarInput.value;
    const requestData = {
      partial_name: buscar,
    };

    // Limpiar resultados anteriores
    divSelect.innerHTML = ""; // Eliminar contenido del cuadro seleccionable
    divUnir.innerHTML = ""; // Eliminar contenido del botón "UNIRME"

    fetch("http://127.0.0.1:5000/servidores/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })

      .then((response) => {
        if (response.status === 200) {
          // Handle successful response
          return response.json(); // Obtener la respuesta como objeto JSON
        } else {
          // Handle failed response
          alert("¡Servidor no encontrado!");
          throw new Error("No se pudo encontrar el servidor");
        }
      })
      .then((data) => {
        // Crear un botón
        var boton = document.createElement("button");
        boton.innerHTML = "UNIRME";

        // Crear un elemento select
        var selectBox = document.createElement("select");

        // Verificar y agregar opciones si están definidas
        if (data.servers && data.servers.length > 0) {
          for (let i = 0; i < data.servers.length; i++) {
            if (data.servers[i]) {
              var option = document.createElement("option");
              option.text = data.servers[i];
              selectBox.add(option);
            }
          }
        }

        // Agregar el botón y el cuadro seleccionable al div
        divSelect.appendChild(selectBox);
        divUnir.appendChild(boton);
      })
      .catch((error) => {
        // Esta sección maneja cualquier error que pueda ocurrir durante la operación de búsqueda, como errores de red.
        console.error("Error:", error);
      });
  });
});
