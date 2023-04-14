$(document).ready(function () {
  $("#miFormulario").submit(function (e) {
    e.preventDefault();
    //capturamos los elementos del form
    //luego se acomodan para enviarlos al servidor
    let datos_form = $("#miFormulario").serialize();

    console.log(datos_form);

    //peticion por AJAX
    $.ajax({
        url: 'http://localhost:3000/ejemplo_ajax',
        method: 'POST',
        data: datos_form,
        success: function (respuesta) {
            //muestro la respuesta del servidor
            alert(respuesta)
        }
    })
  });
});
