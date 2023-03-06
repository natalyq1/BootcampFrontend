/*pedir una cantidad de datos y ponerlos en una lista*/

/*
var ciclado = parseInt(prompt("¿Cuantas veces desea ingresar informacion?"));
var dictado =[]

for (let index = 0; index <= ciclado; index++) {
    dictado.push(prompt("Ingrese informacion")) 
}
console.log(dictado);
*/



/*ordenar numeros de menor a mayor*/
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
var ciclado = parseInt(prompt("¿Cuantas veces desea ingresar informacion?"));
var dictado =[]
var encontrar = ''

for (let index = 0; index <= ciclado; index++) {
    dictado.push(prompt("Ingrese el numero")) 
}
console.log(dictado);

encontrar = parseInt(prompt("¿Cual numero deseas verificar si esta?"));

encontrar = dictado.find(function (encontrar) {
        return encontrar > 0;
    });
  console.log(encontrar);

if (dictado.find()) {
   console.log(`El numero ${encontrar} esta`); 
}else{
    console.log(`El numero ${encontrar} no esta`);
}
*/



/*Ingresar varios frutas y luego me diga vuantas hay de cada fruta*/
/*
var ciclado = parseInt(prompt("¿Cuantas veces desea ingresar informacion?"));
var dictado =[]

for (let index = 0; index <= ciclado; index++) {
    dictado.push(prompt("Ingrese la fruta")) 
}
console.log(dictado.count());
*/


const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)