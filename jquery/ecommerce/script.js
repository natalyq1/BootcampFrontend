$(document).ready(function () {
  $("#secProductos").hide();
  $("#secCarrito").hide();
  $("#secNosotros").hide();

  $("#productos").click(function (e) {
    e.preventDefault();
    $("#secProductos").show();
    $("#secCarrito").hide();
    $("#secNosotros").hide();
  });

  $("#carrito").click(function (e) {
    e.preventDefault();
    $("#secCarrito").show();
    $("#secProductos").hide();
    $("#secNosotros").hide();
  });

  $("#nosotros").click(function (e) {
    e.preventDefault();
    $("#secNosotros").show();
    $("#secCarrito").hide();
    $("#secProductos").hide();
  });

  $(".comprar").click(function () {
    var producto = $(".comprar").data("producto");
    var precio = $(".comprar").data("precio");
    var cantidad = $(".comprar").data("cantidad");
    var totalPagar = $("#totalPagar");
    //console.log(producto);

    localStorage.setItem("producto", producto);
    localStorage.setItem("precio", precio);
    localStorage.setItem("cantidad", cantidad);

    var total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      //console.log(i);
      //const newTr = document.createElement("tr");
      const newDiv = document.createElement("td");
      var key = localStorage.key(i);
      const newContent = document.createTextNode(
        `${localStorage.getItem(key)}\n`
      );
      console.log(localStorage);

      newDiv.appendChild(newContent);
      //newTr.appendChild(newDiv)
      tablaCarrito.append(newDiv);

      console.log(localStorage.length);
      console.log(localStorage.key(2));
      console.log(localStorage.getItem(localStorage.key(2)));
      const precio = localStorage.getItem(localStorage.key(2));

      console.log(localStorage.key(1));
      console.log(localStorage.getItem(localStorage.key(1)));
      const cantidad = localStorage.getItem(localStorage.key(1));
    }
    var total = 0;
    for (let index = 0; index < localStorage.length; index++) {
      
      total += cantidad * precio;
      //console.log(total);
    }
    totalPagar = total;
    console.log(totalPagar);
    $("#totalPagar").append(totalPagar);
  });
});



