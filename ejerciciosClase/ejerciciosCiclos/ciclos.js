/*Ejercicios
1) El usuario escribe un número y el script imprimirá (console.log) todos los números menores que al  dividirlos por 3 den como resto 2.

2) El usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
Ej: Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x

3) Se le solicita al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4

4) Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.
Ej: si ingresamos el valor 5, el resultado será:

*
**
***
****
*****

5) Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe detenerse cuando alcancemos el valor 1:4

Aclaración: Usamos un console.log para ir mostrando los valores de los dígitos, deberá quedar algo así:

0:0
0:1
0:2
...
...
1:4 será el final del conteo

------

Pista: el ejercicio 4 y 5 llevan 2 ciclos for, uno dentro de otro (pueden intentar hacerlo de otra forma) */

/**1) El usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.


var positive = parseInt(prompt("Ingrese un numero"))
var contador = 0
for (let index = 1; index <= positive; index++) {
    if (index % 3 == 0) {
        //es par
        contador++
    } 
}console.log(`hay ${contador}`); */

/*2) El usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
Ej: Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x

NaNttttt

var letra = prompt("Ingrese una letra")
var numero = prompt("Ingrese un numero")
cadena= (letra*numero)

for (let index = 0; index < numero; index++) {
    cadena+= letra
}
console.log(`${cadena}` ); 

*/

/**3) Se le solicita al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4 
var num1 = parseInt(prompt("Ingrese el numero 1" ))
var num2 = parseInt(prompt("Ingrese el numero 2"))
var num3 = parseInt(prompt("Ingrese el numero 3"))
var num4 = parseInt(prompt("Ingrese el numero 4"))
var suma= num1+num2+num3+num4
var cantidad= suma.length()
console.log( cantidad);
media= suma/4
console.log( media);


var num1 = parseInt(prompt("Ingrese el numero 1" ))
var num2 = parseInt(prompt("Ingrese el numero 2"))
var num3 = parseInt(prompt("Ingrese el numero 3"))
var num4 = parseInt(prompt("Ingrese el numero 4"))
var suma= num1+num2+num3+num4
const variables = new Array(num1, num2, num3, num4)
media =suma/variables.length
console.log(media);


var suma= parseFloat(suma)
var tope = parseFloat(4)
var num
var total
for (let index = 0; index < tope; index++) {
    num =parseFloat(prompt("Ingrese un numero" ))
    console.log(num);
    suma = suma+ num
    total+= suma
} 
console.log(total);
var media =suma/tope
console.log(media);

*/

/*4
Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.
Ej: si ingresamos el valor 5, el resultado será:

*
**
***
****
*****/
var num = parseInt(prompt("Ingrese un numero entero"))
var asterisco =("*")
var acumulador= num
var lista
for (let index = 1; index <= num; index++) {
    acumulador-=1
    console.log(`${acumulador}`);
    lista= new Array(acumulador)
    console.log(lista);
    if (lista == '') {
        lista *=(asterisco)
        
    }}
