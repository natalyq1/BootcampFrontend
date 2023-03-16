
var tabla = document.getElementById("tabla");
var btn = document.getElementById("add");
var miTabla = "";

btn.addEventListener("click", function () {
  //forma 1
  var fila = document.createElement("tr"); //crear una etiqueta "tr"
  var col = document.createElement("td");
  var dato = document.createTextNode("Este es un dato de prueba");

  col.appendChild(dato); //le agregamos un "hijo" a la columna
  fila.appendChild(col); //le agregamos un "hijo" a la fila

  tabla.appendChild(fila); //le agregamos a la tabla, una fila, que adentro tiene una columna con un dato

  //forma 2
  miTabla = miTabla + "<tr><td>Hola chicos como están</td></tr>";
  tabla.innerHTML = miTabla;
});

/*
EJERCICIO
Se le solicita al usuario que ingrse:
- Nombre, Apellido, Email y Telefono
- Fecha
- Productos (cantidad, nombre del producto y precio)
Cuando haga click en un botón "Generar factura": 
- mostrar todos los datos (ordenados), calculando el total a pagar
FACTURA
nombre apellido
email
telefono
fecha
CANT.  PRODUCTOS    PRECIO
1      Zapatilla    $100
3      Caramelos    $67
Total a pagar= $167
*/

var nombre = getElementById("nombre")
var apellido = getElementById("apellido")
var email = getElementById("email")
var telefono = getElementById("telefono")
var fecha = getElementById("fecha")