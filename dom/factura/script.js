document.getElementById("guardaCliente").addEventListener("click", function () {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let fecha = document.getElementById("fecha").value;

  let tablaCliente = document.getElementById("tablaCliente").insertRow(0);

  let nombreCell = tablaCliente.insertCell(0);
  let emailCell = tablaCliente.insertCell(1);
  let telefonoCell = tablaCliente.insertCell(2);
  let fechaCell = tablaCliente.insertCell(3);

  nombreCell.innerHTML = nombre + " " + apellido;
  emailCell.innerHTML = email;
  telefonoCell.innerHTML = telefono;
  fechaCell.innerHTML = fecha;
});

var arrayCantidad = [];
var arrayPrecio = [];

function precioTotal() {
  let total = 0;

  let cantidad = document.getElementById("cantidad").value;
  let precio = document.getElementById("precio").value;

  arrayCantidad.push(cantidad);
  arrayPrecio.push(precio);

  for (let i = 0; i < arrayCantidad.length; i++) {
    total += arrayCantidad[i] * arrayPrecio[i];
  }

  document.getElementById("precioTotal").innerHTML = total;
}

document
  .getElementById("guardaProducto")
  .addEventListener("click", function () {
    let nombre = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;

    let tablaCliente = document.getElementById("tablaProductos").insertRow(0);

    let cantidadCell = tablaCliente.insertCell(0);
    let nombreCell = tablaCliente.insertCell(1);
    let precioCell = tablaCliente.insertCell(2);

    cantidadCell.innerHTML = cantidad;
    nombreCell.innerHTML = nombre;
    precioCell.innerHTML = precio;

    precioTotal();
  });
