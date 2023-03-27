$(document).ready(function () {
  var familiares_lista = [];
  var i = 0;
  $("#guardar").click(function () {
    familiares_lista[i] = $("#nombreFamiliar").val();
    i++;

    localStorage.setItem("guardaLocal", JSON.stringify(familiares_lista));
  });

  $("#listar").click(function () {
    var datosLocales = JSON.parse(localStorage.getItem("guardaLocal"));
    console.log(datosLocales);
    for (let j = 0; j < datosLocales.length; j++) {
      var element = datosLocales[j];
    }
    $("#lista").append("<li>" + element + "</li>");
  });
});
