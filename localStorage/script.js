var x = "hola";
localStorage.setItem("nombre", "Juan"); //key and value
console.log("localStorage: " + localStorage.getItem("nombre"));
localStorage.removeItem("nombre");

var num1 = 8;
//localStorage.setItem("num2", 7);

console.log(num1);
console.log(localStorage.getItem("num2"));
//localStorage.removeItem('num2')

/*solicitar al usuario:
nombre
apellido
direccion
telefono
serie(select)

cuando haga clic en guardar, q se guarde en localStorage
cuando haga clic en recuperar, q se muestre en h4:
nombre: ****
apellido: ****
direccion: ****
telefono: ****
serie(select): ****
*/

document.getElementById("guardar").addEventListener("click", function () {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var direccion = document.getElementById("direccion").value;
  var telefono = document.getElementById("telefono").value;
  var serie = document.getElementById("serie").value;

  localStorage.setItem("nombre", nombre);
  var key = localStorage.key(0);
  var dato1 = localStorage.getItem("nombre");
  console.log(key + " " + dato1);

  localStorage.setItem("apellido", apellido);
  var key = localStorage.key(3);
  var dato2 = localStorage.getItem("apellido");
  console.log(key + " " + dato2);

  localStorage.setItem("direccion", direccion);
  var key = localStorage.key(4);
  var dato3 = localStorage.getItem("direccion");
  console.log(key + " " + dato3);

  localStorage.setItem("telefono", telefono);
  var key = localStorage.key(1);
  var dato4 = localStorage.getItem("telefono");
  console.log(key + " " + dato4);

  localStorage.setItem("serie", serie);
  var key = localStorage.key(2);
  var dato5 = localStorage.getItem("serie");
  console.log(key + " " + dato5);

  let keys = Object.keys(localStorage);
  for (let key of keys) {
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
});

document.getElementById("recuperar").addEventListener("click", function () {
  let infoPersona = document.getElementById("infoPersona");

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var direccion = document.getElementById("direccion").value;
  var telefono = document.getElementById("telefono").value;
  var serie = document.getElementById("serie").value;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);
  localStorage.setItem("direccion", direccion);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("serie", serie);

  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    infoPersona.innerText = `${key}: ${localStorage.getItem(key)}\n`;
    alert(`${key}: ${localStorage.getItem(key)}`);
  }
});
