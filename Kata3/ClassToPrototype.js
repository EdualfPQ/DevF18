// trandformar Clase a Prototipo
// CLASS
class Alumnos {
    constructor(nombre, apellido, califinal, inscrito){
        this.nombre = nombre;
        this.apellido = apellido;
        this.califinal = califinal;
        this.inscrito = inscrito;
    }
}

// PROTOTYPE
function AlumnosP(nombre, apellido, califinal, inscrito){
    this.nombre = nombre;
    this.apellido = apellido;
    this.califinal = califinal;
    this.inscrito = inscrito;
}

AlumnosP.prototype();