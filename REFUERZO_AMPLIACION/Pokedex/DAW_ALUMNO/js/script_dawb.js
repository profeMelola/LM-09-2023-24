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
console.log("DOMTableBody",DOMTableBody);
const DOMinfoPokemon = document.querySelector("#infoPokemon");
console.log("DOMinfoPokemon",DOMinfoPokemon);
const DOMbotonFiltrar = document.querySelector("#filtrar");
const DOMbotonAddPokemon = document.querySelector("#add");
const DOMbotonDeletePokemon = document.querySelector("#delete");

// ------------------

// Objeto Pikachu
const pikachu = {
    id: 11,
    nombre: "Pikachu",
    imagen: "imgs/pikachu.png",
    tipos: ["Electric"],
    info: "Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas"
};


// ----------- EVENTOS ----------
DOMbotonFiltrar.addEventListener('click',filtrar);
DOMbotonAddPokemon.addEventListener('click',addPikachu);
DOMbotonDeletePokemon.addEventListener('click',deletePikachu);


// ---------------------
// siempre por poison
function filtrar(){
    // categoría == Poison

    renderizar(baseDeDatos.filter( pokemon => pokemon.tipos.find(tipo => tipo == "Poison")));

    // let pokemonsPoison = [];

    // for (const pokemon of baseDeDatos) {
    //     for (const tipo of pokemon.tipos) {
    //         if (tipo == "Poison")
    //             pokemonsPoison.push(pokemon);
    //     }
    // }

    // FORMA 1: NOOOOOOOOOOO POR DIOS!!!!
    // MALLLLLLLLLLLLL!!!
    // pokemonsPoison.forEach( pokemon =>{
    //     // borro tbdy
    //     // creo img
    //     // creo nombre
    //     // creo tabla
    //     // .......
    // });

    // FORMA 2: sin cambiar la declaración de renderizar()
    // baseDeDatos = pokemonsPoison;
    // renderizar();

    // FORMA 3: pasando el array de base de datos como argumento
    renderizar(pokemonsPoison);
    

}

function addPikachu(){

    if (baseDeDatos.some(pokemon => pokemon.nombre == pikachu.nombre))
    //if (baseDeDatos.some(pokemon => pokemon.id == pikachu.id))
        alert("Pikachu ya existe!!!!");
    else{
        //baseDeDatos.push(pikachu);
        baseDeDatos.unshift(pikachu);
        renderizar(baseDeDatos);
    }
}

function deletePikachu(){
    //comprobar si el pikachu existe
    if (baseDeDatos.some(pokemon => pokemon.nombre == pikachu.nombre)){
        //borro
        // si añado al final (push), tengo que borrar con pop()
        // si añado al principio (unshift), tengo que borrar con shift()
        baseDeDatos.shift();
        renderizar(baseDeDatos);
    }else
        alert("Pikachu no existe!!!");
}

// --------------------
function renderizar(baseDeDatos) {

    DOMTableBody.innerHTML = '';

    baseDeDatos.forEach( (pokemon) => {
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

        const fila = DOMTableBody.insertRow();

        // imagen
        const celdaImg = fila.insertCell();
        const image = document.createElement('img');
        image.src = pokemon.imagen;

        image.addEventListener('mouseover', (e) => {
            DOMinfoPokemon.textContent = pokemon.info;
        });

        image.addEventListener('mouseout', (e) => {
            DOMinfoPokemon.textContent = '';
        });


        celdaImg.append(image);
        
        

        // nombre
        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = pokemon.nombre;

        // Tipo es otra tabla
        const celdaTabla = fila.insertCell();

        const tablaTipos = document.createElement('table');
        tablaTipos.classList.add('tablaTipos');

        const filaTipo = tablaTipos.insertRow();

        //const filaTipo = document.createElement('tr');

        pokemon.tipos.forEach( tipo => {
            let celdaTipo = filaTipo.insertCell();
            celdaTipo.textContent = tipo;
            filaTipo.append(celdaTipo);
        });

        //tablaTipos.append(filaTipo);

        celdaTabla.append(tablaTipos);

        fila.append(celdaImg);
        fila.append(celdaNombre);
        fila.append(celdaTabla);

        DOMTableBody.append(fila);


    })



}



// ------------------- BOTONERA ------------------

// ---------------------------------------
// INICIO
// Se pinta la tabla cuando se carga la página
//window.onload = renderizar;
//renderizar();
renderizar(baseDeDatos);

