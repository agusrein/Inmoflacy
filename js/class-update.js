class Actualizacion {
    constructor(fechaEntradaDesde, fechaEntradaHasta, importe, indices, indicesFilter, uniqueKey, fechaActual, fechaInicio, importeActualizado, registros) {
        this.fechaEntradaDesde = fechaEntradaDesde;
        this.fechaEntradaHasta = fechaEntradaHasta;
        this.importe = importe;
        this.indices = indices;
        this.indicesFilter = indicesFilter;
        this.fechaInicio = fechaInicio;
        this.fechaActual = fechaActual;
        this.importeActualizado = importeActualizado;
        this.registros = registros;
        this.uniqueKey = uniqueKey;
    }

    datosRelevantes() {
        this.indices = [
            { mes: 1, anio: 2021, valor: 1.17 },
            { mes: 2, anio: 2021, valor: 1.19 },
            { mes: 3, anio: 2021, valor: 1.23 },
            { mes: 4, anio: 2021, valor: 1.28 },
            { mes: 5, anio: 2021, valor: 1.34 },
            { mes: 6, anio: 2021, valor: 1.41 },
            { mes: 7, anio: 2021, valor: 1.46 },
            { mes: 8, anio: 2021, valor: 1.50 },
            { mes: 9, anio: 2021, valor: 1.55 },
            { mes: 10, anio: 2021, valor: 1.60 },
            { mes: 11, anio: 2021, valor: 1.65 },
            { mes: 12, anio: 2021, valor: 1.72 },
            { mes: 1, anio: 2022, valor: 1.77 },
            { mes: 2, anio: 2022, valor: 1.82 },
            { mes: 3, anio: 2022, valor: 1.89 },
            { mes: 4, anio: 2022, valor: 1.97 },
            { mes: 5, anio: 2022, valor: 2.09 },
            { mes: 6, anio: 2022, valor: 2.22 },
            { mes: 7, anio: 2022, valor: 2.34 },
            { mes: 8, anio: 2022, valor: 2.46 },
            { mes: 9, anio: 2022, valor: 2.61 },
            { mes: 10, anio: 2022, valor: 2.77 },
            { mes: 11, anio: 2022, valor: 2.93 },
            { mes: 12, anio: 2022, valor: 3.11 },
            { mes: 1, anio: 2023, valor: 3.28 },
            { mes: 2, anio: 2023, valor: 3.45 },
            { mes: 3, anio: 2023, valor: 3.63 },
            { mes: 4, anio: 2023, valor: 3.85 },
            { mes: 5, anio: 2023, valor: 4.17 },
            { mes: 6, anio: 2023, valor: 4.53 },
            { mes: 7, anio: 2023, valor: 4.91 },
            { mes: 8, anio: 2023, valor: 5.25 },
            { mes: 9, anio: 2023, valor: 5.61 },
            { mes: 10, anio: 2023, valor: 6.07 },
            { mes: 11, anio: 2023, valor: 6.35 },
        ]
        this.fechaActual = DateTime.now();
        this.fechaInicio = DateTime.fromISO('2021-01-01');

    }


    pedirInformacion() {
        this.fechaEntradaDesde = document.getElementById('from').value;
        this.fechaEntradaHasta = document.getElementById('to').value;
        this.importe = document.getElementById('amount').value;

        this.validarInformacion();
    }

    validarInformacion() {
        this.fechaEntradaDesde = DateTime.fromISO(this.fechaEntradaDesde);
        this.fechaEntradaHasta = DateTime.fromISO(this.fechaEntradaHasta);

        if (this.fechaEntradaDesde < this.fechaInicio) {
            document.getElementById('errorFrom').innerText = 'Debe ingresar una fecha igual o posterior a 2021.';
            document.getElementById('from').value = '';
            do {
                addEventListener('keydown', () => { document.getElementById('errorFrom').innerText = ''; })
                addEventListener('input', () => {
                    document.getElementById('from').value;
                })
                this.fechaEntradaDesde = document.getElementById('from').value;
                this.fechaEntradaDesde = DateTime.fromISO(this.fechaEntradaDesde);
            }
            while (this.fechaEntradaDesde > this.fechaInicio) // Corrobora que la primer fecha no sea anterior a la que tenemos de datos en el array
        }
        else if (this.fechaEntradaDesde > this.fechaActual) {
            document.getElementById('errorFrom').innerText = `Debe ingresar una fecha igual o anterior a ${this.fechaActual.toLocaleString(DateTime.DATE_SHORT)}`;
            document.getElementById('from').value = '';
            do {
                addEventListener('keydown', () => { document.getElementById('errorFrom').innerText = ''; })
                addEventListener('input', () => {
                    document.getElementById('from').value;
                })
                this.fechaEntradaDesde = document.getElementById('from').value;
                this.fechaEntradaDesde = DateTime.fromISO(this.fechaEntradaDesde);
            }
            while (this.fechaEntradaDesde < this.fechaActual) // Corrobora que la primer fecha no sea posterior a la fecha de hoy en la actualidad.
        }

        else if (this.fechaEntradaHasta < this.fechaEntradaDesde) {
            document.getElementById('errorTo').innerText = 'La fecha de inicio no puede ser mayor.';
            document.getElementById('to').value = '';
            do {
                addEventListener('keydown', () => { document.getElementById('errorTo').innerText = ''; })
                addEventListener('input', () => {
                    document.getElementById('to').value;
                })
                this.fechaEntradaHasta = document.getElementById('to').value;
                this.fechaEntradaHasta = DateTime.fromISO(this.fechaEntradaHasta);
            }
            while (this.fechaEntradaHasta > this.fechaEntradaDesde) // Corrobora que la segunda fecha no sea menor a la primer fecha

        }
        else if (this.fechaEntradaHasta > this.fechaActual) {
            document.getElementById('errorTo').innerText = `Debe ingresar una fecha igual o anterior a ${this.fechaActual.toLocaleString(DateTime.DATE_SHORT)}`;
            document.getElementById('to').value = '';
            do {
                addEventListener('keydown', () => { document.getElementById('errorTo').innerText = ''; })
                addEventListener('input', () => {
                    document.getElementById('to').value;
                })
                this.fechaEntradaHasta = document.getElementById('to').value;
                this.fechaEntradaHasta = DateTime.fromISO(this.fechaEntradaHasta);
            }
            while (this.fechaEntradaHasta > this.fechaActual) // Corrobora que la segunda fecha no sea posterior a la de hoy en la actualidad


        }
        else if (this.fechaEntradaHasta < this.fechaInicio) {
            document.getElementById('errorTo').innerText = 'Debe ingresar una fecha igual o posterior a 2021.';
            document.getElementById('to').value = '';
            do {
                addEventListener('keydown', () => { document.getElementById('errorTo').innerText = ''; })
                addEventListener('input', () => {
                    document.getElementById('to').value;
                })
                this.fechaEntradaHasta = document.getElementById('to').value;
                this.fechaEntradaHasta = DateTime.fromISO(this.fechaEntradaHasta);
            }
            while (this.fechaEntradaHasta > this.fechaInicio) // Corrobora que la segunda fecha no sea menor a la fecha en que tenemos datos en el array

        }
        else if (this.importe <= 0) {
            document.getElementById('errorAmount').innerText = 'El importe debe ser mayor o igual a 0';
            do {
                addEventListener('keydown', () => { document.getElementById('errorAmount').innerText = ''; })
                addEventListener('input', () => {
                    document.getElementById('amount').value;
                })
                this.importe = document.getElementById('amount').value;

            }
            while (this.importe > 0) { document.getElementById('errorAmount').innerText = ''; } // Corrobora que el importe nunca sea menor o igual a 0
        }
        else if (!this.fechaEntradaDesde.isValid || !this.fechaEntradaHasta.isValid) {
            document.getElementById('errorFrom').innerText = 'Ingrese una fecha válida';
            document.getElementById('errorTo').innerText = 'Ingrese una fecha válida';
            this.limpiarInputs()
            this.pedirInformacion()
        } //Si las fechas no son validas que el programa no continue al vaciarse los inputs y vuelva a empezar

        else {
            document.getElementById('errorFrom').innerText = '';
            document.getElementById('errorTo').innerText = '';
            console.log(`Fecha ingresada desde: ${this.fechaEntradaDesde.toLocaleString(DateTime.DATE_SHORT)}\nFecha ingresada hasta: ${this.fechaEntradaHasta.toLocaleString(DateTime.DATE_SHORT)}\n Importe Ingresado: ${this.importe}`);
            this.filtradoDeDatos()
        }


    }

    filtradoDeDatos() {
        this.indicesFilter = this.indices;

        let dato1 = this.fechaEntradaDesde.month;
        let dato2 = this.fechaEntradaDesde.year;
        let dato3 = this.fechaEntradaHasta.month;
        let dato4 = this.fechaEntradaHasta.year;


        let objetosEnRango = this.indicesFilter.filter((e) => { //Del array de objetos Indices, crea un nuevo array unicamente con los datos que coincidan con las fechas ingresadas

            const mesObjeto = e.mes;
            const anioObjeto = e.anio;

            if (anioObjeto > dato2 && anioObjeto < dato4) {
                return true;
            }
            if (anioObjeto === dato2 && anioObjeto === dato4) {
                return mesObjeto >= dato1 && mesObjeto <= dato3;
            }
            if (anioObjeto === dato2) {
                return mesObjeto >= dato1;
            }
            if (anioObjeto === dato4) {
                return mesObjeto <= dato3;
            }
            return false;
        });
        console.log('Objetos que se encuentran en el rango de las fechas ingresadas:')
        console.log(objetosEnRango)
        this.indicesFilter = objetosEnRango.map((e) => e.valor) // Extraigo unicamente las propiedades valor de los objetos dentro del array
        console.log(`Valores relevantes para calcular inflación del monto: ${this.indicesFilter}`)

        this.calcularNuevoImporte();
    }

    calcularNuevoImporte() {
        let valor1 = this.indicesFilter[0]  //Tomo el primer valor del array mapeado
        let valor2 = this.indicesFilter[this.indicesFilter.length - 1] //Tomo el ultimo valor del array mapeado
        this.importeActualizado = (valor2 / valor1) * this.importe; // Procedo a dividir el ultimo indice por el primer indice, y se multiplica por el importe ingresado

        let popUp = document.querySelector('.div__container--popUp')
        let amount = document.querySelector('.amount')
        amount.innerText = `$${this.importeActualizado.toLocaleString("de-DE")}` // Muestro el resultado en una card emergente
        popUp.classList.toggle('hidden')
        console.log(`Su importe actualizado: $${(Math.round(this.importeActualizado))}`)
        this.crearRegistro()
        this.limpiarInputs()
    }
    limpiarInputs() {
        document.getElementById('from').value = '';
        document.getElementById('to').value = '';
        document.getElementById('amount').value = '';
        this.importe = '';
        this.fechaEntradaDesde = DateTime.fromISO();
        this.fechaEntradaHasta = DateTime.fromISO();
    }
    crearRegistro() {
        let porcentaje = ((this.importeActualizado-this.importe) / this.importe) *100; //Porcentaje de incremento
  
        this.uniqueKey = `registro: ${DateTime.now().toFormat('dd/MM HH:mm:ss')}hs`;
        this.registros.push({
            periodoIngresado: `${this.fechaEntradaDesde.toFormat('MM/yyyy')}-${this.fechaEntradaHasta.toFormat('MM/yyyy')}`,
            importe: `${Math.round(this.importe).toLocaleString("de-DE")}`,
            actualizacion: `${Math.round(this.importeActualizado).toLocaleString("de-DE")}`,
            porcentaje: `${Math.floor(porcentaje)}`,
            id: `${this.uniqueKey}`
        })

        this.setStorage('registros', JSON.stringify(this.registros))
    }

    setStorage(key, value) {
        localStorage.setItem(key, value)
    }


    mostrarRegistros() {
        this.registros = JSON.parse(localStorage.getItem('registros')) || [] // En caso que no haya registros, que esté vacio.
    
        
        const verificacion = (registros) => {
            if (registros.length === 0) {
                let message = document.getElementById('message__register')
                if(message){
                message.innerText = 'No se encuentran registros.'}
            }
        }

        function eliminarElemento(idUnico) { //Funcion que elimina elemento registrado del array y me actualiza el storage
            const storageData = JSON.parse(localStorage.getItem('registros'));
            const index = storageData.findIndex(registro => registro.id === idUnico);

            if (index !== -1) {
                storageData.splice(index, 1); // Elimina el elemento del array
                localStorage.setItem('registros', JSON.stringify(storageData)); // Actualiza el localStorage
                verificacion(storageData)
            }
        }

        let lista = document.getElementById('register__list') // <ul>
        for (let i = 0; i < this.registros.length; i++) { // Creo cada registro realizado y guardado en storage
            let registro = this.registros[i] // El array se compone de objetos, defino variable para c/u
            let listItem = document.createElement('li')
            listItem.className = 'd-flex flex-column align-items-center'
            listItem.innerHTML = `<table class="col-10 ms-3 me-3 ms-xxl-5 me-xxl-5 ms-xl-5 me-xl-5 ms-lg-5 me-lg-5 ms-md-5 me-md-5 ms-sm-5 me-sm-5">
            <tbody>
            <tr>
              <td class="col-6">Período Ingresado</td>
              <td class="text-end col-6">${registro.periodoIngresado}</td>
            </tr>
            <tr>
              <td class="col-6">Importe</td>
              <td class="text-end col-6">$ ${registro.importe}</td>
            </tr>
            <tr>
              <td class="col-6">Actualización</td>
              <td class="text-end col-6">$ ${registro.actualizacion}</td>
            </tr>
            <tr>
              <td class="col-6">Promedio Inflacionario</td>
              <td class="text-end col-6">${registro.porcentaje}%</td>
            </tr>
            <tr>
              <td class="col-6"></td>
              <td class="text-end w-100"><button class="text-center btn btn-danger rounded-circle btn__delete--register${i}"><i class="fa-solid fa-trash-can" style="color: #090e16;"></i></button></td>
            </tr>
          </tbody>
          </table>         
          <div class="div__container-dividier--modifier rounded-pill align-self-center mb-3 mt-4"></div>`

            if (lista) { lista.appendChild(listItem) }

            let btnDelete = document.querySelector(`.btn__delete--register${i}`) 
            if (btnDelete) {
                btnDelete.style.height = '35px'
                btnDelete.style.background = 'rgba(232, 30, 16, 0.834)'
                btnDelete.addEventListener('click', () => { //Evento que elimina el registro seleccionado
                    const idUnico = this.registros[i].id;
                    eliminarElemento(idUnico);
                    lista.removeChild(listItem);
                });
            }
        }
        verificacion(this.registros) //funcion que corrobora que no haya registros y muestra un mensaje en su defecto
    }
}