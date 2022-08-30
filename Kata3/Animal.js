class Animal{
    constructor(nombre,edad,tipo){
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    caminar(){
        return `El ${this.tipo} llamado ${this.nombre} de ${this.edad} años, salio de paseo`
    }

    comer(){
        return `El ${this.tipo} llamado ${this.nombre} de ${this.edad} años, fue a comer`
    }
}

let gato = new Animal('Botas', 2, 'gato');
console.log(gato.caminar());

let perro = new Animal('Atlas', 3, 'perro');
console.log(perro.comer());