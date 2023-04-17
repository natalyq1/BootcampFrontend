$(document).ready(function () {
   
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
  
  