$(function(){
  //Aqui iran las funciones para modificar el valor 
  //el que el usuario quiera cambiar
  /*Usar la funcion .submit para hacer algo con los
  valores*/
  $( "form" ).submit(function( event ) {
    //preventDefault para detener los valores del formulario
    event.preventDefault();
    //Guardar en variables los valores de cada campo
    var selector = $("#selector").val();
    var property = $("#property").val();
    var value = $("#value").val();
    //aplicar los cambios a cada cosa
    $(selector).css(property, value);
    //De esta forma se puede hacer en una linea mas facil
    //$(selector).css(property, value);
    //$($("#selector").val()).css($("#property").val(), $("#value").val());
  });
});

/*Ejemplo del uso de bind
//Combinar el formulario cuando le 
de clic con la funcion validate
$("form").bind("submit", validate);*/

//Funcion para combinar los valores al momento de que le
//den clic al submit
