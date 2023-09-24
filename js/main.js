class Calculo {
    constructor(importe, cantidadMeses) {
        this.importe = importe;
        this.cantidadMeses = cantidadMeses;
    }

    pedirInformacion(cantidadMeses, importe) {
        this.cantidadMeses = +(prompt('Ingrese la cantidad de meses que transcurrieron desde la ultima actualización'));
        this.importe = +(prompt('Ingrese el monto que abona actualmente'));
    }

    validarInformacion(cantidadMeses, importe) {                              //  *********OPCION DE VALIDACION POR METODO CLASE***********
        if (isNaN(this.cantidadMeses) || isNaN(this.importe)) {
            do {
                alert('No ha ingresado un numero, Intente nuevamente')
                this.pedirInformacion();
            }
            while (isNaN(this.cantidadMeses) || isNaN(this.importe));
        } else { console.log('Validacion correcta'); }
    }

    calcularImporte(cantidadMeses, importe) {
        let indice = 11.8;
        for (let i = 0; i++, i <= this.cantidadMeses;) {
            let resultado = (this.importe * indice) / 100;
            this.importe = (resultado + this.importe);
        }
        console.log(`El importe a abonar según el periodo de ${this.cantidadMeses} meses transcurridos será de ${this.importe}`);
    }

}

const calculo = new Calculo("", "");
calculo.pedirInformacion();
// calculo.validarInformacion();  *********OPCION DE VALIDACION POR METODO CLASE***********
const validarInformacion = (calculo) => {
    if (isNaN(calculo.cantidadMeses) || isNaN(calculo.importe)) {
        do {
            alert('No ha ingresado un numero, Intente nuevamente')
            calculo.pedirInformacion();
        }
        while (isNaN(calculo.cantidadMeses) || isNaN(calculo.importe));
    } else { console.log('Validacion correcta'); }
}
validarInformacion(calculo);  //*********OPCION DE VALIDACION POR FUNCION***********
calculo.calcularImporte();