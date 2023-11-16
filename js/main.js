const DateTime = luxon.DateTime;
setTimeout(() => {
    actualizacion = new Actualizacion;
    actualizacion.datosRelevantes()
    actualizacion.mostrarRegistros()
}, 1)


// ***********************IMPORTANTE***********************
// Solo pude hacer uso de la API oficial del BCRA con una extension en el navegador llamada CORS Unblock, ya que por protocolos de seguridad me tiraba error 'Cors' al querer acceder, de hecho los sigue mostrando si no se cuenta con esa extensión.

fetch('https://api.estadisticasbcra.com/inflacion_interanual_oficial', {
    headers: {
        Authorization: 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzE2Mjc3NzMsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJhZ3VzcmVpbmFsZGkxMEBnbWFpbC5jb20ifQ.Ma03O3XxKWHSvfDLJmER4tnB9HaiZIM5VOeKMOLp9dHJAymwd7O3BIf1rd9-BlAU1fg7unF7IW5dwIC4qfpP6g',
    },
})
    .then((response) => response.json())
    .then((data) => {
        const inflacionInteranual = data[data.length - 1].v //Accedo al ultimo elemento del array, que es un objeto, y a la propiedad 'v'
        let divContainer = document.getElementById('div__container__registres--all')
        let divInflacion = document.createElement('div')
        if(divContainer&&divInflacion){
        divInflacion.className = 'col-xxl-6 col-xl-6 col-lg-6 col-11 div__container--registres pt-4 pb-4 mt-5 rounded-3 shadow-lg d-flex flex-column ms-xxl-3 ms-xl-3 ms-lg-3'
        divInflacion.innerHTML = `
                <h5 class="text-center m-0 fs-3 mb-sm-3 mb-3 mb-md-0 mb-xl-0 mb-lg-0 mb-xxl-0">Inflacion Interanual</h5>
                <div class="d-flex col-12 justify-content-evenly align-items-center">
                    <p id="anualInflation" class=" fw-bold text-center m-0"></p>
                    <img class="col-2 img-fluid mb-xxl-4 mb-xl-4 mb-lg-4 mb-md-4 mb-sm-2 mb-2" src="../images/precio.png" alt="imagen de una casa animada" width="200">
                </div>
                <div class="div__container-dividier--modifier rounded-pill align-self-center mb-4"></div>`

        divContainer.appendChild(divInflacion)
        document.getElementById('anualInflation').innerText = `${inflacionInteranual} %`}
    })
    .catch((error) => {
        error(console.log(`Para conectar con la API solicitada, es necesaria extension 'CORS Unblock' url chrome: https://chromewebstore.google.com/detail/lfhmikememgdcahcdlaciloancbhjino?hl=es&utm_source=ext_sidebar`))
    })

