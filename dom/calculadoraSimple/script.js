

/*
calculadora basica: 2 inputs, 4 botones, 1 h4, funciones con parametros y return, eventos(addEventListener)
*/
var btnSuma = document.getElementById("btn-suma");
var btnResta = document.getElementById("btn-resta");
var btnMulti = document.getElementById("btn-multiplicacion");
var btnDivision = document.getElementById("btn-division");

var suma= parseFloat('')
var resultado = document.getElementById("reultado");

btnSuma.addEventListener('click', function(){
  resultado = sumar(num1, num2)
})

function sumar() {
  var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
  suma= parseFloat(num1)  + parseFloat(num2) 
  console.log(suma);
  return suma
}

btnResta.addEventListener('click', function(){
  resultado = restar(num1, num2)
})

function restar() {
  var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
  suma= parseFloat(num1)  - parseFloat(num2) 
  console.log(suma);
  return suma
}


btnMulti.addEventListener('click', function(){
  resultado = multi(num1, num2)
})

function multi() {
  var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
  suma= parseFloat(num1)  * parseFloat(num2) 
  console.log(suma);
  return suma
}


btnDivision.addEventListener('click', function(){
  resultado = dividir(num1, num2)
})

function dividir() {
  var num1 = document.getElementById("num1").value;
var num2 = document.getElementById("num2").value;
  suma= parseFloat(num1)  / parseFloat(num2) 
  console.log(suma);
  return suma
}










