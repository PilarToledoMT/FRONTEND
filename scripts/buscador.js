document.addEventListener("DOMContentLoaded", function () {
    const botonBuscar = document.getElementById("searchButton");
    const buscarInput = document.getElementById("searchInput");
    const serverDropdown = document.getElementById("serverDropdown");
  
    botonBuscar.addEventListener("click", function () {
      const buscar = buscarInput.value;
      const requestData = {
        partial_name: buscar,
      };
  
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
          alert('¡Servidor buscado con exito!');
        } else {
          // Handle failed response
          alert('¡Servidor no encontrado!');
        }
      })
/* Esta sección maneja la respuesta del servidor. Si el estado de la respuesta es 200 (OK), ejecuta el código 
en el primer bloque (para una respuesta exitosa). De lo contrario, ejecuta el código en el segundo bloque 
(para una respuesta fallida).*/
      .catch((error) => {
       //Esta sección maneja cualquier error que pueda ocurrir durante la operación de búsqueda, como errores de red.
       
      });
  });
});
  