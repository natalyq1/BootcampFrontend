//alcance/scope/ambito de una variable

//global/local/funcion
//var nombre="pepito";
//function saludar() {
//    var saludo = 'hola'
//}

//hoisting- elevacion--mover declaraciones al inicio del codigo, ya q una variable puede ser declarada despues de ser utilizada. Solo se usa con VAR

//var ambito global
//let es como var pero mas a modo de bloque, se puede declara de nuevo dentro de ptro bloque
//const es constante, ambito de bloque, no permite una reasignacion de valor

/*
var msj = 'hola mundo'
var numero = 10
if (numero > 9) {
    var msj = 'hola mundo, como estas?'
    console.log(msj);
}
console.log(msj);
*/
//hola mundo, como estas? x2

/*LET
let msj = 'hola'
let numero = 10
if (numero > 9) {
    let msj = 'hola, como vas?'
    console.log(msj);
}
console.log(msj);


if (numero > 9) {
    let msj2 = 'hola, como vas?'
    console.log(msj2);
}
console.log(msj2);
*/

/*CONST
*/
const saludo ='saludos';
//saludo = '¿como estan?';
console.log(saludo);

const auto = {
    marca: 'ford',
    modelo: 'fiesta'
}
auto.color = 'rojo'
console.log(auto);

const array = [1, 2, 3]
array[3]=['hola']
console.log(array);
