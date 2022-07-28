//Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?“), en caso de contestar sí, responder 
//“Ciertamente”, en caso de contestar no, responder: “No te creo”.
/*
var belleza = prompt("¿Eres bellisimo/a?")

if (belleza == "sí" || belleza == "SI" || belleza == "Si" || belleza == "si"){
    alert("Ciertamente")
}else if(belleza == "no" || belleza == "NO" || belleza == "No"){
    alert("No te creo")
}else{
    alert("¿Perdón?")
}
*/

//Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un 
//mensaje de “x número es divisible entre 2” o “x número no es divisible entre 2"
/*
var numero = prompt("Favor de ingresar un numero divisible entre 2")

if ((numero % 2) == 0){
    alert(numero + " es divisible entre 2")
}else{
    alert(numero + " no es divisible entre 2")
}
*/

//Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.
/*
var numeroPar = prompt("Favor de ingresar un numero")

if ((numeroPar % 2) == 0){
    alert(numeroPar + " es un número par")
}else{
    alert(numeroPar + " no es número par")
}
*/

//Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir “Ganaste un premio”, 
//en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
/*
var numeroCliente = prompt("Favor de ingresar un numero")

if (numeroCliente == 1000){
    alert("Ganaste un premio")
}else{
    alert("Lo sentimos, sigue participando")
}
*/

//Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar
//el caso en que ambos números son iguales.
/*
var primerNumero = prompt("Favor de ingresar el primer numero")
var segundoNumero = prompt("Favor de ingresar el segundo numero")

if (primerNumero > segundoNumero){
    alert(primerNumero + " es mayor que " + segundoNumero)
}else{
    alert(segundoNumero + " es mayor que " + primerNumero)
}
*/

//Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor.
//Considerar el caso en que 2 números sean iguales.

var primerNumero = prompt("Favor de ingresar el primer numero")
var segundoNumero = prompt("Favor de ingresar el segundo numero")
var tercerNumero = prompt("Favor de ingresar el tercer numero")

primerNumero = parseInt(primerNumero)
segundoNumero = parseInt(segundoNumero)
tercerNumero = parseInt(tercerNumero)

if(primerNumero > segundoNumero && primerNumero > tercerNumero){
    alert(primerNumero + " es mayor que " + segundoNumero + " y " + tercerNumero)
}else if(segundoNumero > primerNumero && segundoNumero > tercerNumero){
    alert(segundoNumero + " es mayor que " + primerNumero + " y " + tercerNumero)
}else if(tercerNumero > primerNumero && tercerNumero > segundoNumero){
    alert(tercerNumero + " es mayor que " + primerNumero + " y " + segundoNumero)
}else if(primerNumero == segundoNumero){
    alert(primerNumero + " y " + segundoNumero + " son igual de grandes1")
}else if(primerNumero == tercerNumero){
    alert(primerNumero + " y " + tercerNumero + " son igual de grandes2")
}else{
    alert(segundoNumero + " y " + tercerNumero + " son igual de grandes3")
}


//Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
//otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
//Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
/*
var dia = prompt("Ingresar el nombre de un dia")

if(dia == "Lunes" || dia == "lunes" || dia == "LUNES"){
    alert("Inicio de semana")
}else if(dia == "Viernes" || dia == "VIERNES" || dia == "viernes"){
    alert("Es viernes y el cuerpo lo sabe")
}else if(dia == "Sabado" || dia == "Sábado" || dia == "sabado" || dia == "sábado" || dia == "SABADO" || dia == "SÁBADO"){
    alert("Es fin de semana")
}else if(dia == "domingo" || dia == "DOMINGO" || dia == "Domingo"){
    alert("Es fin de semana")
}else{
    alert("Todavia estas en un dia laboral")
}
*/

//Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, 
//si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, 
//“regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
/*
var calificacion = prompt("Ingrese la calificacion")
calificacion = parseInt(calificacion)

if (calificacion >= 1 && calificacion <= 10){
    if (calificacion < 6){
        alert("reprobado")
    }else if(calificacion < 9){
        alert("regular")
    }else if(calificacion == 9){
        alert("bien")
    }else{
        alert("excelente")
    }
}else{
    alert("Calificacion fuera de rango")
}
*/

//Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida 
//marca de comida rápida cuánto le costará en función del topping que elija.
//El helado sin topping cuesta 50 MXN.
//El topping de oreo cuesta 10 MXN.
//El topping de KitKat cuesta 15 MXN.
//El topping de brownie cuesta 20 MXN.
//En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” 
//y a continuación le informará el precio del helado sin ningún topping.
/*
var toppingHelado = prompt("¿Que topping desea?(Oreo, KitKat, Brownie, etc.)")
var costoHelado = 50
var oreo = 10
var kitkat = 15
var brownie = 20
toppingHelado = toppingHelado.toUpperCase()

if(toppingHelado == "OREO"){
    alert("Su heledo cuesta $" + (costoHelado + oreo))
}else if(toppingHelado == "KITKAT"){
    alert("Su helado cuesta $" + (costoHelado + kitkat))
}else if(toppingHelado == "BROWNIE"){
    alert("Su helado cuesta $" + (costoHelado + brownie))
}else{
    alert("no tenemos este topping, lo sentimos")
    alert("Su helado cuesta $" + costoHelado)
}
*/