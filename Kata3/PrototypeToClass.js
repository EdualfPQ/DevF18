// Trandformar un prototipo a una clase
// PROTOTIPO
function persona(nombre){
    this.nombre = nombre;
}

persona.prototype.saluda = function(){
    return `hola ${this.nombre};`
}
// CLASE
class PersonaC{
    constructor(nombre){
        this.nombre = nombre;
    }

    saluda(){
        return `hola ${this.nombre};`
    }
}
// INVOCACION DE LA CLASE
let personaV = new PersonaC('Edualf');
console.log(personaV.saluda());