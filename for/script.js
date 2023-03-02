/*var num = parseInt(prompt("Ingrese un numero"))

for (let x = 1 ; x <= num; x++) {
    console.log("hola" +x)
}
*/

var positive = parseInt(prompt("Ingrese un numero"))
var contador = 0
for (let index = 1; index <= positive; index++) {
    if (index % 2 == 0) {
        //es par
        contador++
    } 
}console.log(`hay ${contador}`);

/*
const multiplo = parseInt(prompt("Ingrese un numero para hacer la tabla de multiplicacion"))
let resultado = ''
for (let index = 0; index < 11; index++) {
    resultado= (multiplo *index)
    console.log(`${multiplo} x ${index} = ${resultado}`);
}console.log('hola mundo');
*/
