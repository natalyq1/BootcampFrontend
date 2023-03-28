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
      $("#lista").append("<li>" + element + "</li>");
      element += datosLocales;
    }
    
  });
});

//Hacer un algoritmo que el usario vaya agregando los distintos familiares que tiene, y se guarden
//en un localStorage, luego de que haga click en un botón.
//Si hace click en otro botón, se muestra en una lista, todos los elementos anteriores (familiares)
