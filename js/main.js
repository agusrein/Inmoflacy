class Actualizacion {
    constructor(fechaEntrada, fechaActual, importe, indices, dia, mes, anio) {
        this.fechaEntrada = fechaEntrada;
        this.fechaActual = fechaActual;
        this.importe = importe;
        this.indices = indices;
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;

    }

    pedirInformacion() {
        this.dia = +(prompt('Ingrese dia numericamente de la ultima actualizacion(1-31)'))
        this.mes = +(prompt('Ingrese mes numericamente de la ultima actualizacion(1-12)'))
        this.anio = +(prompt('Ingrese año de de la ultima actualizacion(2022-2023)'))
        this.importe = +(prompt('Ingrese el importe que abona actualmente'))
    }

    validarInformacion() {
        if (isNaN(this.dia, this.mes, this.anio, this.importe) || (this.dia > 31 || this.dia < 1) || (this.mes > 12 || this.mes < 1) || (this.anio > 2023 || this.anio < 2022)) {
            do {
                alert('Verifique los datos e intente nuevamente')
                this.pedirInformacion();
                this.validarInformacion();
            }
            while (isNaN(this.dia, this.mes, this.anio, this.importe) || (this.dia > 31 || this.dia < 1) || (this.mes > 12 || this.mes < 1) || (this.anio > 2023 || this.anio < 2022))
        }
        else { 
            console.log('Validacion Correcta');
            console.log(`Importe ingresado: ${this.importe}`);
        }
    }

    crearFechas() {
        this.fechaEntrada = new Date(this.anio, this.mes - 1, this.dia);
        console.log(`Fecha ingresada: ${this.fechaEntrada.toLocaleDateString()}`);
        this.fechaActual = new Date();
    }

    creacionDeIndices() {
        this.indices = [
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
            { mes: 11, anio: 2023 },
            { mes: 12, anio: 2023 }
        ]
    }

    filtradoDeDatos() {


        let dato1 = this.fechaEntrada.getMonth() + 1;
        let dato2 = this.fechaEntrada.getFullYear();
        let dato3 = this.fechaActual.getMonth() + 1;
        let dato4 = this.fechaActual.getFullYear();


        let objetosEnRango = this.indices.filter((e) => {

            const mesObjeto = e.mes;
            const anioObjeto = e.anio;

            if ((anioObjeto > dato2 && anioObjeto < dato4) || (anioObjeto === dato2 && mesObjeto >= dato1) || (anioObjeto === dato4 && mesObjeto <= dato3)) {
                return true;
            }
            else return false;
        });
        console.log('Filtrado de elementos necesarios para calcular incremento:')
        console.log(objetosEnRango);


        this.indices = objetosEnRango.map((e) => e.valor)
        console.log('Extraccion unicamente de los indices para poder realizar el cálculo')
        console.log(this.indices);
    }

    calcularNuevoImporte() {
            let valor1 = this.indices[0]
            let valor2 = this.indices[this.indices.length - 1]
            this.importe = (valor2 / valor1) * this.importe;
            console.log(`Su nueva tarifa de locación es: ${Math.round(this.importe)}`)
    }


}
const actualizacion = new Actualizacion();
actualizacion.pedirInformacion();
actualizacion.validarInformacion();
actualizacion.crearFechas();
actualizacion.creacionDeIndices();
actualizacion.filtradoDeDatos();
actualizacion.calcularNuevoImporte();
