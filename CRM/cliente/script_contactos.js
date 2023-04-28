$(document).ready(function () {
  obteinClients();
  obteinContacts();

  $("#form_contact").submit(function (e) {
    e.preventDefault();
    let datos = $(this).serialize();

    $.ajax({
      url: "http://localhost:3000/new-contact",
      method: "post",
      data: datos,
      success: function (respuesta) {
        alert(respuesta);
        window.location.href = "http://localhost:3000/contact";
      },
    });
  });

  function obteinContacts() {
    $.ajax({
      url: "http://localhost:3000/obteinContacts",
      method: "get",
      success: function (respuesta) {
        //console.log(respuesta);
        setTable(respuesta);
      },
    });
  }

  function obteinClients() {
    $.ajax({
      url: "http://localhost:3000/obteinClients",
      method: "get",
      success: function (respuesta) {
        // console.log(respuesta);
        armar_options(respuesta);
      },
    });
  }

  function armar_options(resp) {
    let opciones;
    for (let i = 0; i < resp.length; i++) {
      opciones +=
        '<option value="' +
        resp[i].nombre +
        '">' +
        resp[i].nombre +
        "</option>";
    }
    $("#clientes").append(opciones);
  }

  function setTable(documents) {
    $("#tablaC").empty();

    let cabecera =
      "<thead><th>Fecha</th><th>Nombre</th><th>Descripcion</th><th>Estado</th><th>Tipo</th></thead>";

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
        documents[i].nombre +
        td_fin +
        td_inicio +
        documents[i].descripcion +
        td_fin +
        td_inicio +
        documents[i].estado +
        td_fin +
        td_inicio +
        documents[i].tipo +
        td_fin +
        tr_fin;
    }

    tabla = cabecera + "<tbody>" + tabla + "</tbody>";

    $("#tablaC").append(tabla);
  }
});
