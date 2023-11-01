class Actualizacion {
    constructor(fechaEntradaDesde, fechaEntradaHasta, importe, indices, fechaActual, fechaInicio) {
        this.fechaEntradaDesde = fechaEntradaDesde;
        this.fechaEntradaHasta = fechaEntradaHasta;
        this.importe = importe;
        this.indices = indices;
        this.fechaInicio = fechaInicio;
        this.fechaActual = fechaActual;
    }

    creacionDeIndices() {
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
            { mes: 10, anio: 2023, valor: 5.64 },
            { mes: 11, anio: 2023, valor: 5.67 },

        ]
    }

    crearFechas() {
        this.fechaActual = DateTime.now();
        this.fechaInicio = DateTime.fromISO('2021-01-01')

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
            document.getElementById('errorFrom').innerText = 'Los datos son a partir del 2021.';
            document.getElementById('from').value = '';
            do {addEventListener('keydown',() => {document.getElementById('errorFrom').innerText = '';})
                addEventListener('input',() => {
                document.getElementById('from').value;
                })
                this.fechaEntradaDesde = document.getElementById('from').value;
                this.fechaEntradaDesde = DateTime.fromISO(this.fechaEntradaDesde);
            }
            while (this.fechaEntradaDesde > this.fechaInicio) // Corrobora que la primer fecha no sea anterior a la que tenemos de datos en el array
        }
        else if (this.fechaEntradaDesde > this.fechaActual) {
            document.getElementById('errorFrom').innerText = 'No puede ingresar una fecha futura.';
            document.getElementById('from').value = '';
            do {addEventListener('keydown',() => {document.getElementById('errorFrom').innerText = '';})
                addEventListener('input',() => {
                document.getElementById('from').value;
                })
                this.fechaEntradaDesde = document.getElementById('from').value;
                this.fechaEntradaDesde = DateTime.fromISO(this.fechaEntradaDesde);
            }
            while(this.fechaEntradaDesde < this.fechaActual) // Corrobora que la primer fecha no sea posterior a la fecha de hoy en la actualidad.
        }   
        
        else if (this.fechaEntradaHasta < this.fechaEntradaDesde) {
            document.getElementById('errorTo').innerText = 'La fecha de inicio no puede ser mayor.';
            document.getElementById('to').value = '';
            do {addEventListener('keydown',() => {document.getElementById('errorTo').innerText = '';})
                addEventListener('input',() => {
                document.getElementById('to').value;
                })
                this.fechaEntradaHasta = document.getElementById('to').value;
                this.fechaEntradaHasta = DateTime.fromISO(this.fechaEntradaHasta);
            }
            while (this.fechaEntradaHasta > this.fechaEntradaDesde) // Corrobora que la segunda fecha no sea menor a la primer fecha
            
        }
        else if (this.fechaEntradaHasta > this.fechaActual) {
            document.getElementById('errorTo').innerText = 'No puede ingresar una fecha futura.';
            document.getElementById('to').value = '';
            do {addEventListener('keydown',() => {document.getElementById('errorTo').innerText = '';})
                addEventListener('input',() => {
                document.getElementById('to').value;
                })
                this.fechaEntradaHasta = document.getElementById('to').value;
                this.fechaEntradaHasta = DateTime.fromISO(this.fechaEntradaHasta);
            }
            while (this.fechaEntradaHasta > this.fechaActual) // Corrobora que la segunda fecha no sea posterior a la de hoy en la actualidad
            
            
        }
        else if (this.fechaEntradaHasta < this.fechaInicio) {
            document.getElementById('errorTo').innerText = 'Los datos son a partir del 2021.';
            document.getElementById('to').value = '';
            do {addEventListener('keydown',() => {document.getElementById('errorTo').innerText = '';})
                addEventListener('input',() => {
                document.getElementById('to').value;
                })
                this.fechaEntradaHasta = document.getElementById('to').value;
                this.fechaEntradaHasta = DateTime.fromISO(this.fechaEntradaHasta);
            }
            while (this.fechaEntradaHasta > this.fechaInicio) // Corrobora que la segunda fecha no sea menor a la fecha en que tenemos datos en el array
            
        }
        else if (this.importe <= 0) {
            document.getElementById('errorAmount').innerText = 'El importe no puede ser menor o igual a 0';
            do {addEventListener('keydown',() => {document.getElementById('errorAmount').innerText = '';})
                addEventListener('input',() => {
                document.getElementById('amount').value;
                })
                this.importe = document.getElementById('amount').value;
                
            }
            while(this.importe > 0) // Corrobora que el importe nunca sea menor o igual a 0
        }
        else if (!this.fechaEntradaDesde.isValid||!this.fechaEntradaHasta.isValid){
            this.limpiarInputs()
            this.pedirInformacion()} //Si las fechas no son validas que el programa no continue al vaciarse los inputs y vuelva a empezar

        else{
            console.log(`Fecha ingresada desde: ${this.fechaEntradaDesde.toLocaleString(DateTime.DATE_SHORT)}\nFecha ingresada hasta: ${this.fechaEntradaHasta.toLocaleString(DateTime.DATE_SHORT)}`);
            this.filtradoDeDatos()}
  

    }

    filtradoDeDatos() {
        this.creacionDeIndices()
        let dato1 = this.fechaEntradaDesde.month;
        let dato2 = this.fechaEntradaDesde.year;
        let dato3 = this.fechaEntradaHasta.month;
        let dato4 = this.fechaEntradaHasta.year;


        let objetosEnRango = this.indices.filter((e) => { //Del array de objetos Indices, crea un nuevo array unicamente con los datos que coincidan con las fechas ingresadas

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
        this.indices = objetosEnRango.map((e) => e.valor) // Extraigo unicamente las propiedades valor de los objetos dentro del array
        console.log(`Valores relevantes para calcular inflación del monto: ${this.indices}`)

        this.calcularNuevoImporte();
    }

    calcularNuevoImporte() {
        let valor1 = this.indices[0]  //Tomo el primer valor del array mapeado
        let valor2 = this.indices[this.indices.length - 1] //Tomo el ultimo valor del array mapeado
        this.importe = (valor2 / valor1) * this.importe; // Procedo a dividir el ultimo indice por el primer indice, y se multiplica por el importe ingresado

        let popUp = document.querySelector('.div__container--popUp')
        let amount = document.querySelector('.amount')
        amount.innerText = `$${this.importe.toLocaleString("de-DE")}` // Muestro el resultado en una card emergente
        popUp.classList.toggle('hidden')
        console.log(`Su importe actualizado: $${(Math.round(this.importe))}`)
        this.limpiarInputs();
    }
    limpiarInputs() {
        document.getElementById('from').value = '';
        document.getElementById('to').value = '';
        document.getElementById('amount').value = '';
        this.importe = '';
        this.fechaEntradaDesde = DateTime.fromISO();
        this.fechaEntradaHasta = DateTime.fromISO();
    }
}