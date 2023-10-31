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


        let btnApply = document.querySelector('.button__apply')
        btnApply.addEventListener('click', () => {
            this.crearFechas();
            this.fechaEntradaDesde = document.getElementById('from').value;
            this.fechaEntradaHasta = document.getElementById('to').value;
            this.importe = document.getElementById('amount').value;
            this.fechaEntradaDesde = DateTime.fromISO(this.fechaEntradaDesde);
            this.fechaEntradaHasta = DateTime.fromISO(this.fechaEntradaHasta);

            this.validarInformacion();
        })

    }

    validarInformacion() {
        document.getElementById('errorFrom').innerText = '';
        document.getElementById('errorTo').innerText = '';
        document.getElementById('errorAmount').innerText = '';

        if ((this.fechaEntradaDesde < this.fechaInicio) || (this.fechaEntradaDesde > this.fechaActual)) {
            document.getElementById('errorFrom').innerText = 'Error.Datos desde 2021 hasta la actualidad.';
            this.limpiarInputs();
        }
        else if (this.fechaEntradaHasta < this.fechaEntradaDesde) {
            document.getElementById('errorTo').innerText = 'La fecha de inicio no puede ser menor';
            this.limpiarInputs();
        }
        else if ((this.fechaEntradaHasta > this.fechaActual) || (this.fechaEntradaHasta < this.fechaInicio)) {
            document.getElementById('errorTo').innerText = 'Error.Datos desde 2021 hasta la actualidad.';
            this.limpiarInputs();
        }
        else if (this.importe <= 0) {
            document.getElementById('errorAmount').innerText = 'El importe no puede ser menor o igual a 0';
            this.limpiarInputs();
        }

        else { this.filtradoDeDatos(); }

    }

    filtradoDeDatos() {
        this.creacionDeIndices()
        let dato1 = this.fechaEntradaDesde.month;
        let dato2 = this.fechaEntradaDesde.year;
        let dato3 = this.fechaEntradaHasta.month;
        let dato4 = this.fechaEntradaHasta.year;


        let objetosEnRango = this.indices.filter((e) => {

            const mesObjeto = e.mes;
            const anioObjeto = e.anio;

            if ((anioObjeto > dato2 && anioObjeto < dato4) || (anioObjeto === dato2 && mesObjeto >= dato1) || (anioObjeto === dato4 && mesObjeto <= dato3)) {
                return true;
            }
            
            else return false; //Filtrado de elementos del array que coincidan con las fechas ingresadas para calcular incremento
        });
        console.log(objetosEnRango)
        this.indices = objetosEnRango.map((e) => e.valor) // Extraigo unicamente las propiedades valor de los objetos dentro del array

        this.calcularNuevoImporte();
    }

    calcularNuevoImporte() {
        let valor1 = this.indices[0]  //Tomo el primer valor del array filtrado
        let valor2 = this.indices[this.indices.length - 1] //Tomo el ultimo valor del array filtrado
        this.importe = (valor2 / valor1) * this.importe;

        let popUp = document.querySelector('.div__container--popUp')
        let amount = document.querySelector('.amount')

        amount.innerText = `$${this.importe.toLocaleString("de-DE")}`
        popUp.classList.toggle('hidden')
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

