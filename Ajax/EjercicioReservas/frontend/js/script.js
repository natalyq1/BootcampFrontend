$(document).ready(function () {
  $("#miFormulario").submit(function (e) {//
    //e.preventDefault();
    //capturamos los elementos del form
    //luego se acomodan para enviarlos al servidor
    let datos_form = $("#miFormulario").serialize();

    console.log(datos_form);

    //peticion por AJAX
    $.ajax({
        url: 'http://localhost:3001/turnos',
        method: 'POST',
        data: datos_form,
        success: function (respuesta) {
            alert(respuesta)
            
            $("#lista").append("<li>" + respuesta + "</li>")
        }
    })
  });

});


