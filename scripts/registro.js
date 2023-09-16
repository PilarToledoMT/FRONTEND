document.addEventListener('DOMContentLoaded', function (){
    const registroForm = document.getElementById('registro-form');

    registroForm.addEventListener('submit', function (e){
        e.preventDefault();
        //Falta la lógica del formulario conexión back y bd
        alert('Registro exitoso. ¡Bienvenido a ChatMaster!');
        registroForm.reset();
    })
})