
$(document).ready(function () {  
   
    $('#selected').click(function (e) {
 e.preventDefault() 

       $("#result").css({"color": $("#color").val(), "font-size": $("#fontSize").val(), "font-family": $("#tipography").val()});


    })
});
