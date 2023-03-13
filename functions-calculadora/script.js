
/*
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
*/


//SUPER Calculadora PROFE Emiliano Chiapero
/*
var op = parseInt(
  prompt(
    "Ingrese una opción: \n\n 1) SUMA \n 2) RESTA \n 3) MULTIPLICACIÓN \n 4) DIVISIÓN \n 5) SALIR"
  )
);

switch (op) {
  case 1:
    //suma
    mostrar_alert(operacion_matematica("suma"));
    break;

  case 2:
    //resta
    var x = operacion_matematica("resta");
    mostrar_consola(x);
    break;

  case 3:
    //multiplicación
    mostrar_consola(operacion_matematica("multiplicacion"));
    break;

  case 4:
    //división
    mostrar_alert(operacion_matematica("division"));
    break;

  case 5:
    //salir
    break;

  default:
    alert("Ingrese una opción correcta");
    break;
}

function operacion_matematica(accion) {
  var a = parseFloat(prompt("Ingrese el primer número"));
  var b = parseFloat(prompt("Ingrese el segundo número"));
  var total = 0;

  switch (accion) {
    case "suma":
      total = a + b;
      break;

    case "resta":
      total = a - b;
      break;

    case "multiplicacion":
      total = a * b;
      break;

    case "division":
      if (b != 0) {
        total = a / b;
      } else {
        alert("No se puede dividir por 0.");
      }
      break;
  }

  return total; 
  //devuelve la operación matematica realizada
}

function mostrar_alert(param) {
  alert("El restultado es: " + param);
}

function mostrar_consola(param) {
  console.log("El resultado es: " + param);
}
*/


/*
Según un texto ingresado por el usuario, van a crear 3 funciones:
- mayusculas (que reciba un parametro y devuelva eso mismo en mayúsculas)
- minusculas (que reciba un paramentro y devuelva eso mismo en minúsculas)
- mostrar (que reciba un parametro y muestre por consola eso mismo)
Darle a elegir al usuario, como desea transformar el texto (a may o min) y luego se muestra
 */
/**/ 

var op = parseInt(
  prompt(
    "Ingrese una opción: \n\n 1) a mayúsuclas \n 2) a minúsculas \n 3) salir"
  ))

switch (op) {
  case 1:
    //suma
    mostrar_alert(transformar("mayusculas"));
    break;

  case 2:
    //resta
    var x = transformar("minusculas");
    mostrar_consola(x);
    break;

    case 3:
    //salir
    break;

    default:
    alert("Ingrese una opción 1, 2 o 3");
    break;
}

function transformar(accion) {
  var texto = prompt("Ingrese un texto para transformar");
  var resultado = '';

  switch (accion) {
    case "mayusculas":
      resultado = texto.toUpperCase()
      console.log(resultado);
      break;

    case "minusculas":
      resultado = texto.toLowerCase()
      console.log(resultado);
      break;
      
  }return resultado
}

function mostrar_alert(param) {
  alert("El restultado es: " + param);
}

function mostrar_consola(param) {
  console.log("El resultado es: " + param);
}

