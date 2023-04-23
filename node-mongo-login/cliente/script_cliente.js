$(document).ready(function () {
  

  function solicitar_tareas() {
    $.ajax({
      url: "http://localhost:3000/",
      method: "get",
      success: function (respuesta) {
        console.log(respuesta);
      },
    });
  }

  /* ------------ */

  $("#form_login").submit(function (e) {
    e.preventDefault();
    let datos = $("#form_login").serialize();
    $("#form_login")[0].reset();
    $.ajax({
      url: "http://localhost:3000/editar",
      method: "post",
      data: datos,
      success: function (respuesta) {
        alert(respuesta);
        solicitar_tareas();
      },
    });
  });
});