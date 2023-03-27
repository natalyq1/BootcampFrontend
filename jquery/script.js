
$(document).ready(function () {
 
    $('#link').click(function (e) {
        e.preventDefault()//previene el comportamiento asi no nos redirige
        alert('Hiciste clic en la ancora')
    
//encadenamiento
    $('#texto').text('hola, q tal').css('background', 'blue').fadeOut(1500)
    })

})

