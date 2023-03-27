/* 
JQUERY
Es una libreria que simplica la forma de crear aplicaciones web
permite manipular elementos DOM, cambiar el diseño css o realizar peticiones AJAX usan instrucciones simples, a traves de codigo sonciso y sencillo
AJAX, asincronyc
$(document).ready(function....)
*/
$(document).ready(function () {
  //todo lo que pongamos aqui, se ejecuta SOLO cuando el document este listo, todo el HTML
  document.getElementById("dato"); //js
  $("#dato"); //jquery id
  $(".btn"); //jquery class
  console.log($("#dato").val("como estas?")); //esto para traer el valor
  
  /*evento
    var boton = document.getElementsByClassName('btn')
    boton.addEventListener (function name(params) {
        
    })
    */

    $('.btn').click(function () {
        alert('Hola chicos')
    })



    
    $('#btnSuma').click(function () {
        var n1 = $('#num1').val()
        var n2 = $('#num2').val()    
        var total = parseInt(n1) +parseInt(n2)
    
    $('#resultado').text('el resultado de la suma es ' + total).css('color', 'blue')
    })

    $('#btnResta').click(function () {
        var n1 = $('#num1').val()
        var n2 = $('#num2').val()    
        var total = parseInt(n1) -parseInt(n2)
    
    $('#resultado').text('el resultado de la resta es ' + total).css('color', 'red')
    })

    $('#btnDivi').click(function () {
        var n1 = $('#num1').val()
        var n2 = $('#num2').val()    
        var total = parseInt(n1) /parseInt(n2)
    
    $('#resultado').text('el resultado de la division es ' + total).css('color', 'green')
    })

    $('#btnMulti').click(function () {
        var n1 = $('#num1').val()
        var n2 = $('#num2').val()    
        var total = parseInt(n1) *parseInt(n2)
    
    $('#resultado').text('el resultado de la multiplicacion es ' + total).css('color', 'purple')
    })
});
