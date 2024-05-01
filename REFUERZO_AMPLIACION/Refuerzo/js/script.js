
//VARIABLE PARA GUARDAR EL ELEMENTO CUANDO LO BORRO
let deletedRow;

//BORRAMOS LA ÚLTIMA FILA USANDO REMOVE
//SOLO NECESITO LA REFERENCIA AL ELEMENTO

//const remove = document.getElementById("remove");
const remove = document.querySelector("#remove");

// Añado el listener del evento click
/*remove.addEventListener('click', e => {
    deletedRow = document.querySelector("tbody tr:last-child")
    
    deletedRow.remove();
   
});*/

remove.addEventListener('click',borrar);
function borrar(){
    // guardo en la variable la última fila
    deletedRow = document.querySelector("tbody tr:last-child");

    // se borra el elemento html si es distinto de null
    if (deletedRow)
        deletedRow.remove();
}


//RECUPERO LA ÚLTIMA FILA PARA COMPROBAR QUE EL NODO SIGUE AHÍ TRAS EL REMOVE
const recover = document.getElementById("recover");
recover.addEventListener('click', e => {

    //if (deletedRow != null){
    if (deletedRow) {
        document.querySelector("tbody").append(deletedRow);
    } else {    
        alert("Aún no se ha borrado la fila");
    }
});