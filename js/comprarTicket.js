




let  botonResumirHTML = document.getElementById("resumenId");

let  botonBorrarHTML = document.getElementById("borrarId");

let  comboSelectHTML = document.getElementById("categoriaId");

let  cantidadHTML = document.getElementById("cantidad");

let valorTicket = 200;
document.getElementById("ticket").textContent = valorTicket;


let valorOpcionActual = null; 


comboSelectHTML.addEventListener("change", (evento) =>{
    evento.preventDefault();
   
   valorOpcionActual = comboSelectHTML.selectedIndex;
  //  alert("comboSelectHTML");
  console.log(valorOpcionActual);

 });

/** / 
 // Obtén una referencia al botón
    var button = document.getElementById("myButton");

    // Adjunta un evento de clic al botón
    button.addEventListener("click", function(event) {
        handleClick(event, "Hola, este es un mensaje de prueba.");
    });

    // Función de controlador de eventos que recibe el evento y un mensaje como parámetros
    function handleClick(event, message) {
        alert(message + " Has hecho clic en el botón. El tipo de evento es: " + event.type);
    }
 /**/ 
function obtenerPorcentaje(){
valor = document.getElementById("categoriaId").selectedIndex;
retorno = 0;
switch (valor){
    case 1: retorno = 80;  break
    case 2: retorno = 50; break
    case 3: retorno = 15; break
    default : retorno = 0;break
}
return retorno; 
}
/*
function actualizarCombo( html){

    //alert(html)
    console.log(html);
    //html.getElementById
    console.log(html.getElementByTagName("p")[1]);
    comboSelectHTML.selectedIndex = html.getElementById("p")[1];
}*/

function actualizarCombo( idCombo){

   
    comboSelectHTML.selectedIndex = parseInt(idCombo);
}

 botonResumirHTML.addEventListener("click", (evento) =>{
     evento.preventDefault();
       //  alert("botonResumirHTML");

       var cantidad = parseInt(cantidadHTML.value) ;
       console.log("cantidad: " + cantidad);

       var descuento = obtenerPorcentaje(); 
       resultado = parseFloat(cantidad *  (valorTicket -((valorTicket * descuento)/ 100.0) )).toFixed(2);
      
       
       document.getElementById("resultadoId").innerHTML= resultado;

 });
/**/
 botonBorrarHTML.addEventListener("click", (evento) =>{
    evento.preventDefault();
      //  alert("botonBorrarHTML");
      document.getElementById("resultadoId").innerHTML= "";

      document.getElementById("cantidad").value = "";
      comboSelectHTML.selectedIndex = 0;
 
      document.getElementById("nombre").value= "";
      document.getElementById("apellido").value= "";
      document.getElementById("email").value= "";


});

