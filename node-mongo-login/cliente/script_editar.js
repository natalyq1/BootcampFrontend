$(document).ready(function () {
    
    $("#formEditar").submit(function (e) {
      e.preventDefault();
  
      let datos = $("#form_login").serialize();
  
      $.ajax({
        url: url_actual,
        method: "post",
        data: datos,
        success: function (respuesta) {
          alert(respuesta);
          //redirigir al usuario a la página de inicio ---> http://localhost:3000/
          window.location.href = "http://localhost:3000/editar";
        },
      });
    });
  });
  