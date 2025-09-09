// ##### 4 FORMAS DE MOSTRAR CONTENIDO
// (1) Alert
//alert("funciona alert");
// (2) La consola
console.log("HOLA CONSOLE");
// (3) Libreria Sweetalert
//Swal.fire("Hola desde Sweetalert")
//(4) En el DOM => Modelos de objetos del documento
document.write("Hola desde el dom")

//####### TIPOS DE VARIABLES
var edad = 28; // alcance global
let num = 28; // alcance de bloque
const nombre = "Slendy Daza"; // no cambiar su valor
const pi = 3.14; // no cambiar su valor
const pulgada = 2.54; // no cambiar su valor

//######## OPERADORES BASICOS
// Aritmeticos (+ - * / %)
var num_uno = 5;
var num_dos = 10;
console.log(num_dos + num_uno)
console.log(num_dos - num_uno)
console.log(num_dos * num_uno)
console.log(num_dos / num_uno)
console.log(num_dos % num_uno)
console.log(num_dos % num_uno)

// Comparacion
console.log("igual >>>" + (num_dos==num_dos))
console.log("Estricto igual >>>" + (num_dos==num_dos))
console.log("Diferente >>>" + (num_dos!=num_dos))
console.log("Mayor >>>" + (num_dos>num_dos))
console.log("Mayor igual >>>" + (num_dos>=num_dos))
console.log("Menor >>>" + (num_dos<num_dos))
console.log("Menor igual >>>" + (num_dos<=num_dos))

//######  TIPOR DE DATOS
var clase = "Prog. Básica" // String
var numero = 5 // Número entero
var decimal = 2.5 // Número decimal
var booleani = true // Boolean (false/true)
var objetos = {nombre: "Slendy", edad: 28, profesion: "Contadora"};
var array = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
var array_num = [1,2,3,4,5,6,7,8,9]
var array_six = [1,"uno",20,"fiesta", 2.5, "decimal"]

let estudiantes = [
    {nombre: "Wilder", edad: 33},
    {nombre: "Anyi", edad: 34},
    {nombre: "Celeste", edad: 4},
    {nombre: "Antonella", edad: 3},
    {nombre: "Sara", edad: 0}
]
let curso = {
    nombre: "Programacion",
    temas:["HTML", "CSS", "JS"]
}

console.log(objetos)
console.log(array)
console.log(array[3])
