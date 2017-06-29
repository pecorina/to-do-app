$(document).ready(function() {
    $("input").click(function(e){ //agrega tarea al click
        e.preventDefault();
        var tarea = $("#tarea").val();

    $('#check').append('<div class="cajatarea"><input type="checkbox" id="otra"/>' + tarea + '<button class="boton">Remove</button></div>');

    $('button').click(function(){
        $(this).parent().remove();//funcion para remover al click
    });

    });
    
});