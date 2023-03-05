/**1) funciona*/

/*
var cel = parseFloat(prompt("Ingrese la temperatura en grados Celcius"))

var far= (cel *1.8) +32
alert(`La temperatura en grados Fahrenheit es: ${far}`)
*/



/*2*/
//da un loop

/*
var num = parseInt(prompt("Ingrese un numero entero"))
var cadena = ''
var fila = ''
var inicia = 1
let index= 1
for (index; index <= num; index++) {
    for (inicia; inicia <= index; inicia++) {
        fila +='*'
    }
    cadena += fila +'\n'
}console.log(cadena);

var linea = fila.length
console.log(linea);
var i = linea
 for (i; i >= 0; i--) {
    console.log(i);
    console.log(inicia);
    console.log(num);

while (num > 0) {
    for (num; num < inicia; num--) {
        fila -='*'
    }
    
}cadena -= fila +'\n'
}console.log(cadena);
*/



/*3) funciona */
/*
var numero = parseInt(prompt('Ingrese un numero a multiplicar'))
const factorial = numero => {
	if (numero < 0) numero = numero * -1;
	if (numero <= 0) return 1;
	let factorial = 1;
	while (numero > 1) {
		factorial = factorial * numero;
		numero--;
	}
	return factorial;
}

for (let x = 0; x <= numero; x++) {
	console.log(`El factorial de ${x} es ${factorial(x)}`);
}
*/

/**5 funciona */ 
/*
var numeroInicial = parseInt(prompt("Ingrese un numero"));
var numero = numeroInicial;
var anterior = 0;
var actual = 1;
var fibonacci = "";
while (numero > 0 && numero === numeroInicial) {
  for (let index = 0; index < numeroInicial; index++) {
    fibonacci = actual + anterior;
    anterior = actual;
    actual = fibonacci;
    numero++;
    console.log(`${fibonacci}`);
  }
}
*/


/**4 funciona*/
/*
var saldoInicial = 5;
var saldo = parseInt("");
var retirar = "";
var depositar = "";
var verSaldo = "";
var movs = "";
var salir = "";
var instruccion = "";

while (instruccion != 5) {
  instruccion = prompt(
    `Selecciona que operacion quieres realizar:\n 1.Retirar \n 2.Depositar \n 3.Ver saldo \n 4.Ver ultimos movimientos \n 5.Salir`
  );
  console.log(instruccion);
  if (instruccion == "" || instruccion > 5 || instruccion < 1) {
    alert("Debes seleccionar una opcion de 1 a 5");
  }

  switch (instruccion) {
    case "1":
      retirar = parseInt(prompt("¿Cuanto desea retirar?"));
      if (retirar > saldoInicial) {
        alert(
          `No cuenta con ese dinero disponible, solo tiene ${saldoInicial}`
        );
      } else {
        saldo = saldoInicial - retirar;
      }
      break;
    case "2":
      depositar = parseInt(prompt("¿Cuanto desea depositar?"));
      if (depositar == 0 || depositar < 0) {
        alert(`La cantidad a depositar debe ser un numero positivo`);
      } else {
        saldo = saldoInicial + depositar;
      }
      break;
    case "3":
      alert(`Saldo: ${saldo}`);
      break;
    case "4":
      alert(
        `Últimos movimientos: \nSaldo inicial: ${saldoInicial} \nRetirado: ${retirar} \nDepositado: ${depositar} \nSaldo final: ${saldo}`
      );
      break;
    default:
      alert("Salió");
      break;
  }
} 
*/
