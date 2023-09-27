document.addEventListener("DOMContentLoaded", function () {
/*Este evento se dispara cuando el documento HTML se ha cargado completamente y ha sido analizado por el navegador*/
  const botonCrearServidor = document.getElementById("boton_crear_servidor");
/*Se obtiene una referencia de un botón del HTML con el ID "crear_servidor" en la página html*/  
  botonCrearServidor.addEventListener("click", function () {
/*Esta línea adjunta un escuchador de eventos de "clic" al botón "crear_servidor". 
Cuando se hace clic en este botón, se ejecutará la función dentro del escuchador de eventos. */    
    const nombreInput = document.getElementById("nombre_servidor");
/*obtiene una referencia al campo de texto del HTML (input) con el ID "texto_nombre".*/ 
    const nombre = nombreInput.value;
/*extrae el valor ingresado en el campo de texto (id: "texto_nombre") y lo almacena en una 
variable llamada "nombre".*/
    const imagenInput = document.getElementById("imagen_path");
    const imagen = imagenInput.value

    const requestData = {
      nombre_servidor: nombre,
      imagen_servidor: imagen,
    };
/*crea un objeto llamado "requestData" que contiene los datos que deseas enviar al servidor. 
En este caso, incluye el campo "nombre_servidor" con el valor de "nombre" obtenido del campo de entrada*/

    
    fetch("http://127.0.0.1:5000/servidores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
/*Esta línea utiliza la API Fetch para realizar una solicitud HTTP POST a la URL "http://127.0.0.1:5000/servidores", 
que se asume como el punto final del servidor para crear un nuevo servidor. Incluye los datos de la solicitud en 
formato JSON en el cuerpo de la solicitud*/

      .then((response) => {
        if (response.status === 200) {
          // Handle successful response
          alert('¡Servidor creado con exito!');
          nombreInput.value = "";
          imagenInput.value = "";
        } else {
          // Handle failed response
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
  