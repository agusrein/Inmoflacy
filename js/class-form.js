let contactForm = document.getElementById("formulario");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    validarFormulario();
});

function validarFormulario(){

    let errores = 0;

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const contraseña = document.getElementById("contraseña");
    const correo = document.getElementById("correo");

    const mensajes = document.querySelectorAll(".p__message");

    // limpiar errores anteriores
    mensajes.forEach(m => {
        m.style.display = "none";
        m.innerText = "";
    });

    // validar nombre
    if(nombre.value.trim() === ""){
        mostrarError(nombre, "Debe ingresar un nombre");
        errores++;
    }

    // validar apellido
    if(apellido.value.trim() === ""){
        mostrarError(apellido, "Debe ingresar un apellido");
        errores++;
    }

    // validar contraseña
    if(contraseña.value.trim() === ""){
    mostrarError(contraseña, "Debe ingresar una contraseña");
    errores++;
}

    // validar email
    if(correo.value.trim() === ""){
        mostrarError(correo, "Debe ingresar un email");
        errores++;
    }


    if(errores === 0){
        contactForm.submit();
    }
}
function mostrarError(input, mensaje){

    const contenedor = input.parentElement;
    const p = contenedor.querySelector(".p__message");

    p.innerText = mensaje;
    p.style.display = "block";
}