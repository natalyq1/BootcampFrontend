/*pedir una cantidad de datos y ponerlos en una lista **funciona***/

/*
var ciclado = parseInt(prompt("¿Cuantas veces desea ingresar informacion?"));
var dictado =[]

for (let index = 0; index <= ciclado; index++) {
    dictado.push(prompt("Ingrese informacion")) 
}
console.log(dictado);
*/



/*ordenar numeros de menor a mayor**funciona*/
/*
var ciclado = parseInt(prompt("¿Cuantas veces desea ingresar numeros?"));
var dictado =[]

for (let index = 0; index <= ciclado; index++) {
    dictado.push(prompt("Ingrese el numero")) 
}
console.log(dictado.sort(function(a, b){return a - b}));
*/


/*Ingresar varios datos y luego preguntar si el dato existe o no*/
/*
var opcion = parseInt(
    prompt("Ingrese una opción: \n\n 1) Agregar datos \n 2) Salir")
  );
var dato;
var numeros = [];
var existe = false;
var repetir_busqueda = 1;
switch (opcion) {
  case 1:
    //Agregar datos
    var cant = parseInt(prompt("¿Cuántos datos desea ingresar?"));
    for (var i = 0; i < cant; i++) {
      dato = parseInt(prompt("Ingrese el #" + (i + 1) + " número"));
      numeros[i] = dato;
    }
    console.log(numeros);
    while (repetir_busqueda == 1) {
      //Buscar un dato
      var buscar = parseInt(prompt("Ingrese el valor a buscar"));
      for (var i = 0; i < numeros.length; i++) {
        if (buscar == numeros[i]) {
          existe = true;
        }
      }
      if (existe == true) {
        alert(
          "El número " + buscar + " existe en el conjunto de datos originales"
        );
      } else {
        alert(
          "El número " +
            buscar +
            " NO existe en el conjunto de datos originales"
        );
      }
      repetir_busqueda = parseInt(
        prompt("¿Desea buscar otro número? \n\n 1) SI \n 2) NO")
      );
    }
    break;
  case 2:
    //Salir
    alert(
      "Muchas gracias por comunicarse con  nosotros! \n Que tengas un hermoso día "
    );
    break;
  default:
    //Otro valor
    alert("Ingrese una opción válida!");
    break;
}
*/




/*Ingresar varios frutas y luego me diga vuantas hay de cada fruta**funciona***/
/*
const repetido = {};
const dictado = [];
var ciclado = parseInt(prompt("¿Cuantas veces desea ingresar frutas?"));

for (let index = 0; index <= ciclado; index++) {
    dictado.push(prompt("Ingrese la fruta una por una")) 
}
console.log(dictado);

dictado.forEach(function (x) { repetido[x] = (repetido[x] || 0) + 1; });
console.log(repetido)
*/



/** Playlist
Estas son las opciones:
- Crear una playlist, teniendo en cuenta que debe grabarse con un nombre
- Agregar temas a la playlist (todos los que quiera)
- Buscar temas en una playlist
- Mostrar los datos de la playlist (nombre y listado de temas) */
/**/
var playlist = parseInt(prompt("¿Cuantas veces desea ingresar frutas?"));
var ciclado = parseInt(prompt("¿Cuantas veces desea ingresar frutas?"));




/*
Ejercicio: El ahorcado
Debemos simular el famoso juego del ahorcado.
Según una palabra elegida por nosotros (programadores), le vamos a pedir al usuario que vaya ingresando 1 letra por vez.
- Si esa letra ingresada, está en la palabra original, se muestra un mensaje de que acertó
- Si la letra ingresada, NO está en la palabra original, se muestra un mensaje con la cantidad de fallas (tiene un máximo de 6 fallas)
Después de que ingresa cada letra, mostramos el estado general, o sea:
- Cantidad de letras de la palabra original
- Cantidad de aciertos
- Cantidad de errores
*/

/* 
var palabra = "javascript"; //va cualquier palabra que elijamos
var array_palabra = [];
for (var i = 0; i < palabra.length; i++) {
  array_palabra[i] = palabra.slice(i, i + 1);
}
var opcion = 1;
var aciertos = 0;
var errores = 0;
var mal = false;
var bien = false;
var fin = false;
while (opcion != 3 && fin != true) {
  opcion = parseInt(
    prompt(
      "Ingrese una opción: \n\n 1) Ingresar una letra \n 2) Adivinar palabra \n 3) Salir"
    )
  );
  switch (opcion) {
    case 1:
      var letra = prompt("Letra: ");
      var j = 0;
      mal = false;
      bien = false;
      for (var j = 0; j < array_palabra.length; j++) {
        if (letra == array_palabra[j]) {
          aciertos++;
          bien = true;
        }
      }
      if (bien != true) {
        errores++;
        if (errores == 5) {
          alert("Te queda un sólo intento");
        } else if (errores == 6) {
          alert("AHORCADO!!!");
          fin = true;
        }
      }
      if (fin != true) {
        var mensaje = "- Cantidad de letras totales: " + palabra.length;
        mensaje += "\n - Cantidad de aciertos: " + aciertos;
        mensaje += "\n - Cantidad de errores: " + errores;
        mensaje += "\n - Intentos restantes: " + (6 - errores);
        alert(mensaje);
      }
      break;
    case 2:
      var adivinar = prompt("Ingrese la palabra");
      if (palabra == adivinar) {
        alert(
          "¡Felicitaciones! Haz adivinado la palabra \n\n Palabra original:" +
            palabra
        );
      } else {
        alert(
          "¡Ups! Lamentablemente esa no era la palabra original. \n\n Palabra original: " +
            palabra
        );
      }
      fin = true;
      break;
    case 3:
      alert("Hasta luego!");
      break;
    default:
      alert("Por favor ingresa una opción válida");
      break;
  }
}
 */


