document.addEventListener("DOMContentLoaded", function () {
  
    const botonCrearCanal = document.getElementById("crear_canal");
  
    botonCrearCanal.addEventListener("click", function () {
  
      const nombreInput = document.getElementById("nombre_canal");
      const nombre = nombreInput.value;
  
      const id_servidor = localStorage.getElementById('id_servidor');
  
      const requestData = {
        nombre_canal: nombre,
        id_servidor: id_servidor,
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
            alert('¡Canal creado con exito!');
          } else {
            alert('El canal no se pudo crear.')
          }
        })
        .catch((error) => {
        });
    });
  });
    