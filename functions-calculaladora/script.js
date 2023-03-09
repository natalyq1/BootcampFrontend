

var multiplicar = "";
var sumar = "";
var restar = "";
var dividir = "";
var salir = "";
var total = "";
var instruccion = "";

var numero1 = parseInt(prompt("Ingrese un numero para la operacion"));
var numero2 = parseInt(prompt("Ingrese otro numero para la operacion"));

while (instruccion != 5) {
  instruccion = prompt(
    `Selecciona que operacion quieres realizar:\n 1.Sumar \n 2.Restar \n 3.multiplicar \n 4.Dividir \n 5.Salir`
  );
  console.log(instruccion);
  if (instruccion == "" || instruccion > 5 || instruccion < 1) {
    alert("Debes seleccionar una opcion de 1 a 5");
  }

function sumar(numero1, numero2){
 // if (numero1 > 0 && numero2 > 0) {
    total = numero1+numero2
    console.log(total);
  //}else
  //console.log('Debes ingresar numeros positivos');
}
function restar(numero1, numero2){
     total = numero1-numero2
     console.log(total);
}

function multiplicar(numero1, numero2){
     total = numero1*numero2
     console.log(total);
}

function dividir(numero1, numero2){
     total = numero1/numero2
     console.log(total);
}
 

  switch (instruccion) {
    case "1":
     sumar(numero1, numero2) 
      break;
    case "2":
      restar(numero1, numero2) 
      break;
    case "3":
      multiplicar(numero1, numero2) 
      break;
    case "4":
      dividir(numero1, numero2) 
      break;
    default:
      alert("Salió");
      break;
  }
} 
depositoEnCuenta(500)