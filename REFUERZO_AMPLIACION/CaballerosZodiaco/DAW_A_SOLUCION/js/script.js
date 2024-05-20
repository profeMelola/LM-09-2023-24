// --------------------------------------------------------
// BASE DE DATOS

let baseDeDatos = [
  {
    id: 1,
    nombre: "Caballeros de Oro",
    tipo: "ORO",
    imagen: "imgs/oro.png",
    descripcion: "Son los guerreros élite pertenecientes al ejército de Athena",
    miembros: [
      "Mu de Aries",
      "Aldebarán de Tauro",
      "Saga de Géminis",
      "Máscara de Muerte de Cáncer",
      "Aiolia de Leo",
      "Shaka de Virgo",
      "Dohko de Libra",
      "Milo de Escorpio",
      "Aiolos de Sagitario",
      "Shura de Capricornio",
      "Camus de Acuario",
      "Afrodita de Piscis",
    ],
    estrellas: 3,
  },
  {
    id: 2,
    nombre: "Caballeros de Plata",
    tipo: "PLATA",
    imagen: "imgs/plata.png",
    descripcion:
      "Son guerreros pertenecientes al ejército de Athena, cuyo rango es inferior al de los Caballeros de Oro, pero superior al de los Caballeros de Bronce",
    miembros: [
      "Dante de Cerbero de Aries",
      "Shaina de Ofiuco de Aries",
      "Albiore de Cefeo de Tauro",
      "Ptolemy de Sagitta de Géminis",
      "Dio de Mosca de Cáncer",
      "Algethi de Hercules de Leo",
      "Capella de Auriga de Leo",
      "Moses de Ballena de Leo",
      "Misty de Lagarto de Libra",
      "Algol de Perseo de Escorpio",
      "Orfeo de Lira de Escorpio",
      "Sirius de Can Mayor de Capricornio",
      "Asterión de Perros de Caza de Piscis",
      "Babel de Centauro de Piscis",
      "Jamián de Cuervo de Piscis",
      "Martín de Águila de Piscis",
    ],
    estrellas: 1,
  },
  {
    id: 3,
    nombre: "Caballeros de Bronce",
    tipo: "BRONCE",
    imagen: "imgs/bronce.png",
    descripcion:
      "Constituyen la categoría o el rango más bajo del ejército de Athena",
    miembros: [
      "June de Camaleón de Aries",
      "Geki de Osa Mayor de Tauro",
      "Nachi de Lobo de Cáncer",
      "Shun de Andrómeda de Virgo",
      "Shiryu de Dragón de Libra",
      "Ikki de Fénix de Escorpio",
      "Jabu de Unicornio de Escorpio",
      "Seiya de Pegaso de Sagitario",
      "Ban de León Menor de Capricornio",
      "Hyoga de Cisne de Acuario",
      "Ichi de Hydra de Acuario",
    ],
    estrellas: 5,
  },
  {
    id: 4,
    nombre: "Marinos de Poseidón",
    tipo: "MARINOS",
    imagen: "imgs/marinos.png",
    descripcion:
      "Son los guerreros que se encargan de proteger y resguardar al dios de los mares Poseidón",
    miembros: [
      "Baian de Caballo de Mar de Tauro",
      "Kanon de Dragón de Mar de Géminis",
      "Caça de Limnades de Leo",
      "Sorrento de Sirena de Virgo",
      "Isaac de Kraken de Acuario",
      "Io de Scylla de Piscis",
    ],
    estrellas: 2,
  },
];
// --------------------------------------------------------

const signosZodiaco = [
  "Aries",
  "Tauro",
  "Géminis",
  "Cáncer",
  "Leo",
  "Virgo",
  "Libra",
  "Escorpio",
  "Sagitario",
  "Capricornio",
  "Acuario",
  "Piscis",
];

const DOMMain = document.querySelector("main");
const DOMAsideSection = document.querySelector("aside section");
const DOMAsidetitulo = document.querySelector("aside h3");
const DOMAsideDescrip = document.querySelector("#descripcion");

// ---------------------------------------

function renderizar() {
  /* <section>
    <img src="imgs/oro.png"/>
    <h3>Caballeros de Oro</h3>
    <div class="estrellasCentradas">
        <img src="imgs/estrella.svg" class="estrella_amarilla"/>
        <img src="imgs/estrella.svg" class="estrella_amarilla"/>
        <img src="imgs/estrella.svg" class="estrella_amarilla"/>
        <img src="imgs/estrella.svg" class="estrella"/>
        <img src="imgs/estrella.svg" class="estrella"/>
    </div>
</section> */

  baseDeDatos.forEach((grupo) => {
    const ficha = document.createElement("section");

    // imagen
    const image = document.createElement("img");
    image.src = grupo.imagen;

    // pendiente.... evento click...
    image.addEventListener("click", () => {

      const div_borrar = document.getElementById(grupo.id);
      // //const div_borrar = document.querySelector('div [id = '+grupo.id+']');
      // if (ficha.removeChild(div_listado))

      if (div_borrar != null){ 
        // borro
        div_borrar.remove();
      }
      else {
        // pinto
        // ------------------------
        const div_listado = document.createElement("div");
        div_listado.id = grupo.id;

        const lista = document.createElement("ul");
        lista.classList.add("lista");

        for (const miembro of grupo.miembros) {
          const li = document.createElement("li");
          li.textContent = miembro;
          lista.append(li);
        }

        div_listado.append(lista);

        ficha.append(div_listado);
        // ------------------------
      }
    });

    // h3
    const h3 = document.createElement("h3");
    h3.textContent = grupo.nombre;

    // estrellas
    const div_estrellas = document.createElement("div");
    div_estrellas.classList.add("estrellasCentradas");

    // Pinto 5 estrellas
    for (let index = 0; index < 5; index++) {
      // creo
      const estrella = document.createElement("img");
      estrella.setAttribute("src", "imgs/estrella.svg");

      // decido su class
      if (index < grupo.estrellas) estrella.classList.add("estrella_amarilla");
      else estrella.classList.add("estrella");

      // ternario
      //estrellas.classList.add( (i < grupo.estrellas)? "estrella_amarilla":"estrella");

      // EVENTO CLICK..
      // estrella.addEventListener('click', () =>{
      //     estrella.classList.toggle('estrella_amarilla');
      //     estrella.classList.toggle('estrella');
      // });

      estrella.addEventListener("click", pintaColorEstrella);

      // añadir
      div_estrellas.append(estrella);
    }

    // for (let index = 0; index < grupo.estrellas; index++) {

    // }
    ficha.append(image);
    ficha.append(h3);
    ficha.append(div_estrellas);

    DOMMain.append(ficha);
  });
}

function pintaColorEstrella(evento) {
  evento.target.classList.toggle("estrella_amarilla");
  evento.target.classList.toggle("estrella");
}

function mostrarInforme(tipo) {

    DOMAsideSection.innerHTML = '';

    // encontrar el objeto cuyo tipo sea el tipo pasado como parámetro
    const objeto = baseDeDatos.find (obj => obj.tipo.toLocaleLowerCase() == tipo.toLocaleLowerCase());

    DOMAsidetitulo.textContent = objeto.nombre;
    DOMAsideDescrip.textContent = objeto.descripcion;

    // Pinto tabla
    const tabla = document.createElement('table');
    const fila = tabla.insertRow();
    const celda_signo = fila.insertCell();
    celda_signo.textContent = 'signo';
    const celda_numCab = fila.insertCell();
    celda_numCab.textContent = 'Num Caballeros';

    for (const signo of signosZodiaco) {
        const fila = tabla.insertRow();
        const celda = fila.insertCell();
        const celda2 = fila.insertCell();
        celda.textContent = signo;
        celda2.textContent = numCaballerosPorSigno(signo,objeto.miembros);
    }

    DOMAsideSection.append(tabla);

}

// signo = string con el signo zodiaco
// miembros = array con los nombres de los miembros
function numCaballerosPorSigno(signo,miembros){
    //return miembros.filter( m => m.toLowerCase().includes(signo.toLowerCase())).length;

    let contador = 0;
    for (const miembro of miembros) {
        if (miembro.toLowerCase().includes(signo.toLowerCase()))
            contador++;
    }

    return contador;
}

// ----------------- FORMULARIO -------------

// --------------------------
// FORMULARIO
const formu = document.forms.formFichero;
formu.addEventListener('submit',(e)=>{

    // Si el formulario 
    if (formu.comentarios.value.length < 10 && !formu.confirmar.checked){
        let respuesta = confirm('¿De verdad quieres enviar un comentario tan corto?');
        if (!respuesta){
            formu.comentarios.value = '';
            e.preventDefault();
        }else{
            alert('No olvides aceptar las condiciones');
            formu.confirmar.disabled = false;
            e.preventDefault();
        }
    
    }else{
        if ( !formu.confirmar.checked ){
            alert('No olvides aceptar las condiciones');
            formu.confirmar.disabled = false;
            e.preventDefault();
        }
    }

});
// ---------------------------------------


// ---------------------------------------
// INICIO
// Se pinta la tabla cuando se carga la página
renderizar();
