


/*solicitar al usuario un numero positivo, y mostrar un alert, cuantos numeros hay que son pares. ej: el usuario ingresa 10.
'hay 5 numeros q son pares'
0 2 4 6 8*/
var positive = parseInt(prompt("Ingrese un numero"))
var contador = 0
for (let index = 1; index <= positive; index++) {
    if (index % 2 == 0) {
        //es par
        contador++
    } 
}console.log(`hay ${contador}`);

var i = 1
while (i < 11) {
    console.log('hola mundo ' + i);
    i++
}console.log('despegue!');
