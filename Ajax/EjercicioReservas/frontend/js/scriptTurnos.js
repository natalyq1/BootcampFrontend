$(document).ready(function () {
  $.ajax({
    url: "http://localhost:3001/turnosListado",
    method: "post",
    success: function (respuesta) {
      console.log(respuesta);

      $("#lista").append( respuesta);
    },
  });
});
