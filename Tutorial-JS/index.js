console.log("Hola mundo")
var num = 1

let numero1 = 6
console.log(numero1)
console.log("El valor de mi número es :" + numero1)
const constante1 = 10

let numero2 = numero1 - constante1
console.log("El valor de mi número es :" + numero2)

//Pregunta si los valores coinciden
if (numero1 == numero2) {
    console.log("Si. Los números son iguales")
} else {
    console.log("No. Son distintos")
}
//Peeeero
let aux = "6";
if (numero1 == aux) {
    console.log("Si.")
} else {
    console.log("No.")
}   
//Entonces en este caso me va a entrar en el si
//Para preguntar por el valor y por el tipo del objeto se utiliza ===
if (numero1 === aux) {
    console.log("Si.")
} else {
    console.log("No.")
} 

//FUNCIONES
//No recibe nada, no devuelve nada
function saludar1(){
    console.log("Holaaaaaaaaaaaaa")
}

//recibe 1 argumento, no devuelve nada
function saludar2(nombre){
    console.log("Holaaaaaaaaaaaaa" + nombre)
}
saludar2("Laura")

//recibe un + de 1 argumento, no devuelve nada
function saludar3(nombre, edad){
    console.log("Holaaaaaaaaaaaaa " + nombre + " y mi edad es: " + edad)
}
saludar3("Laura",43)

function multiplicar(num1,num2){
    let valor = num1 * num2
    return valor
}
console.log("la multiplicacion es: " + multiplicar(2,10))

//ARRAYS
let nombres = ["Leo","Laura","Selene"]
console.log(nombres)
for (let i = 0; i < nombres.length; i++) {
    let element = nombres[i];
    console.log("Nombre: " + element + " posición: " + i)
}

//OBJETOS
let persona1 = {
    nombre : "Santi",
    edad : 24,
    sexo : "Masculino"
}
console.log(persona1)

let persona2 = {
    nombre : "Martina",
    edad : 42,
    sexo : "Femenino"
}
console.log(persona2)
let arrayDeObjetos = [persona1, persona2]