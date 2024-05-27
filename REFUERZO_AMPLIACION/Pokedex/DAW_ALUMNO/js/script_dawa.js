let baseDeDatos = [
    {
        id: 1,
        nombre: "Bulbasaur",
        imagen: "imgs/bulbasaur.png",
        tipos: ["Grass", "Poison"],
        info: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo"
    },
    {
        id: 7,
        nombre: "Squirtle",
        imagen: "imgs/squirtle.png",
        tipos: ["Water"],
        info: "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble"
    },
    {
        id: 77,
        nombre: "Geodude",
        imagen: "imgs/geodude.png",
        tipos: ["Rock", "Ground"],
        info: "Se suele encontrar en senderos de montaña y sitios parecidos. Conviene andar con cuidado para no pisarlo sin querer y provocar su enfado"
    },
    {
        id: 10,
        nombre: "Caterpie",
        imagen: "imgs/Caterpie.png",
        tipos: ["Bug"],
        info: "Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos"
    },
    {
        id: 2,
        nombre: "Ivysaur",
        imagen: "imgs/ivysaur.png",
        tipos: ["Grass","Poison"],
        info: "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras"
    },
];

// PENDIENTE COMPLETAR
const DOMTableBody = document.querySelector("tbody");
//const DOMInfo = document.querySelector("#infoPokemon");
const DOMInfo = document.getElementById('infoPokemon');
const DOMbotonAddPokemon = document.querySelector('#add');
const DOMbotonDeletePokemon = document.querySelector('#delete');
const DOMFiltrar = document.querySelector('#filtrar');

// Objeto Pikachu
const pikachu = {
    id: 11,
    nombre: "Pikachu",
    imagen: "imgs/pikachu.png",
    tipos: ["Electric"],
    info: "Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas"
};

DOMbotonAddPokemon.addEventListener('click',addPikachu);
DOMbotonDeletePokemon.addEventListener('click',deletePikachu);
DOMFiltrar.addEventListener('click',filtrar);


function addPikachu(){
    //baseDeDatos.push(pikachu); //añado al final

    // Controlar si existe el pokemon...

    //if (baseDeDatos.some( pokemon => pokemon.id == pikachu.id))
    if (encontrarPokemon(pikachu.id))
        alert('Pikachu ya existe');
    else{
        baseDeDatos.unshift(pikachu); //añado al principo
        renderizar();
    }
}

function deletePikachu(){
    if (baseDeDatos.some( pokemon => pokemon.id == pikachu.id)){
        baseDeDatos.shift(); //borro del principio
        //baseDeDatos.pop(); //borra del final
        renderizar();
    }else{
        alert("Pikachu no existe!!!");
    }
}

function encontrarPokemon(id){
    for (const pokemon of baseDeDatos) {
        if (pokemon.id == id)
            return true;
    }
    return false;
}


function filtrar(){

    // PASO 1: FILTRAR

    // FORMA 1: IMPERATIVA
    // let pokemonPoison = [];

    // for (const pokemon of baseDeDatos) {
    //     for (const tipo of pokemon.tipos) {
    //         if (tipo == "Poison")
    //             pokemonPoison.push(pokemon);
    //     }
        
    // }

    // FORMA 2
    renderizar(baseDeDatos.filter( pokemon => pokemon.tipos.find(tipo => tipo == 'Poison')));


    // -------------------------------------------
    // PASO 2: PINTAR EL NUEVO ARRAY FILTRADO DE POISON. DIFERENTES FORMAS:

    // FORMA 1:
    // NOOOOOOOOOOOOOOOOOO!!
    // pokemonPoison.forEach( pokemon =>{
    //     // creo fila
    //     // creo imagen
    //     // creo nombre
    //     // creo tabla
    // });


    // FORMA 2: MACHANDO LA BASE DE DATOS
    // baseDeDatos = pokemonPoison;
    // renderizar();

    // FORMA 3: pasando el array nuevo filtrado como argumento a renderizar
    //renderizar(pokemonPoison);



}

/**
 * 
 */
function renderizar(pokemonsFiltrados = baseDeDatos) {


    // <tr>
    // <td><img src="imgs/bulbasaur.png"></td>
    // <td>Bulbasaur</td>
    // <td>
    //     <table class="tablaTipos">
    //         <tr>
    //             <td>Grass</td>
    //             <td>Poison</td>
    //         </tr>
    //     </table>
    // </td>
    // </tr>

    DOMTableBody.innerHTML = '';

    pokemonsFiltrados.forEach( (pokemon) =>{
    //baseDeDatos.forEach( (pokemon) =>{
        const fila = DOMTableBody.insertRow();

        // -----------------
        // imagen
        const celdaImg = fila.insertCell();
        const image = document.createElement('img');
        image.src = pokemon.imagen;

        image.addEventListener('mouseover',(evento) =>{
            DOMInfo.textContent = pokemon.info;
        });

        image.addEventListener('mouseout',(evento) =>{
            DOMInfo.textContent = '';
        });


        celdaImg.append(image);
        // ---------------------

        // nombre
        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = pokemon.nombre;

        // tipo
        const celdaTipos = fila.insertCell();
        const tablaTipos = document.createElement('table');
        tablaTipos.classList.add('tablaTipos');

        //const filaTipo = tablaTipos.insertRow();
        const filaTipo = document.createElement('tr');

        pokemon.tipos.forEach( tipo => {
            // const celdaTipo = filaTipo.insertCell();
            // celdaTipo.textContent = tipo;
            const celdaTipo = document.createElement('td');
            celdaTipo.textContent = tipo;
            filaTipo.append(celdaTipo);
        });

        tablaTipos.append(filaTipo);

        celdaTipos.append(tablaTipos);



    });


}



// ------------------- BOTONERA ------------------

// ---------------------------------------
// INICIO
// Se pinta la tabla cuando se carga la página
//window.onload = renderizar;
renderizar();

