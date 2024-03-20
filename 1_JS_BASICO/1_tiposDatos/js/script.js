/*
 * 
 * Mostrar una información al usuario dependiendo de si está conectado o no.

 * Mensaje si no está conectado: Debes registrate para leer este artículo.
 * Mensaje si está conectado: Haz click aquí para ver el contenido.
 */
const USER_LOGGED = true;
console.log(typeof(USER_LOGGED));

//USER_LOGGED = false;

// let variable = "hola";
// console.log(variable);
// variable = "adios";
// console.log(variable);


const BLOCK_TEXT = document.querySelector('.block-text');

console.log(BLOCK_TEXT);
console.log(typeof(BLOCK_TEXT));

if (USER_LOGGED) {
    BLOCK_TEXT.innerHTML = '<a href="https://www.google.es" target="_blank">Haz click aquí para ver el contenido</a>';
    //BLOCK_TEXT.textContent = 'Nuevoooooooooo texto';
    //BLOCK_TEXT.textContent = '<a href="https://www.google.es">Haz click aquí para ver el contenido</a>';
    //BLOCK_TEXT.innerHTML = "Haz click aquí para ver el contenido"

} else {
    BLOCK_TEXT.innerHTML = 'Debes registrate para leer este artículo.';
}
