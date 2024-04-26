
//Obtención de un único elemento
const special = document.getElementById("special");
console.log(special);

special.style.color = "red";
special.style.background = "green";

// ------------------
//No obtenemos ningún elemento
 let element = document.getElementById("another");
 console.log(element);

 // primera forma. más elegante
 if (!element) alert("No hay ningún elemento con el ID another");
 
 // segunda forma
 if (element == null) alert("No hay ningún elemento con el ID another");

// ------------------

// -------------------------------
//las funciones getElements... devuelve una HTML colección
//la función querySelectorAll... devuelve un array
// -------------------------------

//Obtenemos varios elementos
const list_elements = document.querySelectorAll("li");
//console.log("list_elements:"+list_elements); //show code actions...
console.log(`list_elements:${list_elements}`);
console.log(list_elements); //nodelist


const list2 = document.getElementsByTagName("li");
console.log(`list 2:${list2}`);
console.log(list2); //html collection

list2.array.forEach(element => {
    
});

for(const item of list2){
    item.style.fontSize="4rem";
}

// Hay que convertir a array para poder usar el forEach!!!!
//Array.from(list2).forEach();
//list2.array.forEach(element => {});
// -------------------------------

