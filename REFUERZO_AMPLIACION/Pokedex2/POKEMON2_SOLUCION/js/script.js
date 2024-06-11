// --------------------------------------------------------
// BASE DE DATOS CON 4 POKEMONS
let baseDeDatos = [
    {
        id: 1,
        nombre: "Bulbasaur",
        imagen: "imgs/bulbasaur.png",
        tipos: ["Grass", "Poison"],
        estadisticas: [4,4,4,4,4],
        info: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo"
    },
    {
        id: 7,
        nombre: "Squirtle",
        imagen: "imgs/squirtle.png",
        tipos: ["Water"],
        estadisticas: [4,3,4,3,4],
        info: "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble"
    },
    {
        id: 77,
        nombre: "Geodude",
        imagen: "imgs/geodude.png",
        tipos: ["Rock", "Ground"],
        estadisticas: [2,4,3,4,3],
        info: "Se suele encontrar en senderos de montaña y sitios parecidos. Conviene andar con cuidado para no pisarlo sin querer y provocar su enfado"
    },
    {
        id: 10,
        nombre: "Caterpie",
        imagen: "imgs/caterpie.png",
        tipos: ["Bug"],
        estadisticas: [3,3,4,1,2],
        info: "Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos"
    }
];

// TIPOS DE POKEMON ASOCIADO CON SU COLOR
const tiposPokemon = [
    {
        tipo: "Grass",
        color: "lightgreen"
    },
    {
        tipo: "Poison",
        color: "lightsalmon"
    },
    {   tipo: "Water",
        color: "lightblue"
    },
    {
        tipo: "Rock",
        color: "lightgrey"
    },
    {
        tipo: "Ground",
        color: "lightcyan"
    },
    {
        tipo: "Bug",
        color: "lightseagreen"
    },
    {
        tipo: "Electric",
        color: "yellow"
    }    
];

// Cargar elementos DOM HTML
const DOMItems = document.querySelector(".centrado");


const Ivysaur = {
    id: 2,
    nombre: "Ivysaur",
    imagen: "imgs/ivysaur.png",
    tipos: ["Grass","Poison"],
    estadisticas: [2,2,3,1,2],
    info: "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras"
};

const addPokemon = document.querySelector("#addPokemon");

addPokemon.addEventListener( 'click',e => {
    if (baseDeDatos.some( p => p.id == Ivysaur.id))
        alert("El pokemon ya existe");
    else{
        baseDeDatos.push(Ivysaur);
        renderizar();
    }
});


// Crear la tabla donde cada tr es un pokemon
function renderizar() {

    DOMItems.innerHTML = "";

    // Muestro los pokemons de la bd
    baseDeDatos.forEach(pokemon => {
        const ficha = document.createElement('div');
        
        //-------------------------------------------
        // Columna con la foto
        const image = document.createElement('img');
        image.setAttribute('src', pokemon.imagen);
        image.dataset.item = pokemon.id;

        image.addEventListener('mouseover', muestraInfo);

        
        image.addEventListener("mouseout", e =>{
            document.querySelector("aside>h2").textContent = "Información del pokemon";
            document.querySelector("aside>section").style.display="none";
        });  

        //--------------------------------
        const nombre = document.createElement('h3');
        nombre.textContent = pokemon.nombre;

        const lista = document.createElement('ul');
        lista.classList.add('lista');

        pokemon.tipos.forEach(tipo => {
            const li = document.createElement('li');
            li.textContent = tipo;

            // Es necesario calcular el color asociado al tipo y cambiar en dicho li el background
            //li.style.backgroundColor = obtenerColor(tipo);
            li.style.backgroundColor = tiposPokemon.find( t => t.tipo === tipo).color;

            lista.append(li);
        });

        ficha.append(image);
        ficha.append(nombre);
        ficha.append(lista);

        // Añadir cada fila a la tabla
        DOMItems.append(ficha);        
    });

}

// 

// -------------------- función para manejar evento 'click' del radioButton ----------------
function muestraInfo(e) {
//function muestraInfo(pokemon, e) {

    //document.querySelector("aside>section").style.display="block";
    document.querySelector("#secPokemon").style.display="block";

    //const titulo = document.querySelector("aside>h2");
    const titulo = document.querySelector("#nombrePokemon");
    
    const pokemon = baseDeDatos.find((pokemon) => pokemon.id == e.target.dataset.item);

    titulo.innerHTML = pokemon.nombre;

    document.querySelector("#infoPokemon").textContent = pokemon.info;
    document.querySelector(".media").textContent = calcularMedia(pokemon.estadisticas);
}

function calcularMedia(estadisticas){
    return ((estadisticas.reduce( (total,nota) => total + nota,0 ))/estadisticas.length).toFixed(2);
}
function obtenerColor(tipo){
    return tiposPokemon.find( t => t.tipo === tipo).color;
}

// ---------------------------------------
// INICIO
// Se pinta la tabla cuando se carga la página
//window.onload = renderizar;

renderizar();




