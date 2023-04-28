$(document).ready(function () {
  obteinClients();

  $("#form_client").submit(function (e) {
    e.preventDefault();
    let datos = $(this).serialize();

    $.ajax({
      url: "http://localhost:3000/new-costumer",
      method: "post",
      data: datos,
      success: function (respuesta) {
        alert(respuesta);
        window.location.href = "http://localhost:3000/clientes";
      },
    });
  });

  function obteinClients() {
    $.ajax({
      url: "http://localhost:3000/obteinClients",
      method: "get",
      success: function (respuesta) {
        //console.log(respuesta);
        setTable(respuesta);
      },
    });
  }

  function setTable(documents) {
    $("#tabla").empty();

    let cabecera =
      "<thead><th>Fecha</th><th>País</th><th>Nombre</th><th>Correo</th><th>Teléfono</th></thead>";

    let tr_inicio = "<tr>";
    let tr_fin = "</tr>";

    let td_inicio = "<td>";
    let td_fin = "</td>";

    let tabla;
    let contador = 0;
    for (let i = 0; i < documents.length; i++) {
      contador = i + 1;
      tabla +=
        tr_inicio +
        td_inicio +
        documents[i].fecha +
        td_fin +
        td_inicio +
        documents[i].pais +
        td_fin +
        td_inicio +
        documents[i].nombre +
        td_fin +
        td_inicio +
        documents[i].correo +
        td_fin +
        td_inicio +
        documents[i].telefono +
        td_fin +
        tr_fin;
    }

    tabla = cabecera + "<tbody>" + tabla + "</tbody>";

    $("#tabla").append(tabla);
  }
});
