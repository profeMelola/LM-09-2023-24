// --------------------------------------------------------
// BASE DE DATOS
let baseDeDatos = [
    {
        id: 1,
        nombre: "Caballeros de Oro",
        tipo: "ORO",
        imagen: "imgs/oro.png",
        descripcion: "Son los guerreros élite pertenecientes al ejército de Athena" ,
        miembros: ['Mu de Aries','Aldebarán de Tauro','Saga de Géminis',
        'Máscara de Muerte de Cáncer','Aiolia de Leo','Shaka de Virgo','Dohko de Libra',
        'Milo de Escorpio','Aiolos de Sagitario','Shura de Capricornio','Camus de Acuario','Afrodita de Piscis'],
        estrellas: 3
    },
    {
        id:2,
        nombre: "Caballeros de Plata",
        tipo: "PLATA",
        imagen: "imgs/plata.png",
        descripcion: "Son guerreros pertenecientes al ejército de Athena, cuyo rango es inferior al de los Caballeros de Oro, pero superior al de los Caballeros de Bronce",
        miembros: ['Dante de Cerbero de Aries','Shaina de Ofiuco de Aries','Albiore de Cefeo de Tauro',
        'Ptolemy de Sagitta de Géminis','Dio de Mosca de Cáncer','Algethi de Hercules de Leo','Capella de Auriga de Leo',
        'Moses de Ballena de Leo','Misty de Lagarto de Libra','Algol de Perseo de Escorpio','Orfeo de Lira de Escorpio',
        'Sirius de Can Mayor de Capricornio','Asterión de Perros de Caza de Piscis','Babel de Centauro de Piscis',
        'Jamián de Cuervo de Piscis','Marín de Águila de Piscis'],
        estrellas: 1
    },
    {   
        id:3,
        nombre: "Caballeros de Bronce",
        tipo: "BRONCE",
        imagen: "imgs/bronce.png",
        descripcion: "Constituyen la categoría o el rango más bajo del ejército de Athena",
        miembros: ['June de Camaleón de Aries','Geki de Osa Mayor de Tauro','Nachi de Lobo de Cáncer','Shun de Andrómeda de Virgo',
        'Shiryu de Dragón de Libra','Ikki de Fénix de Escorpio','Jabu de Unicornio de Escorpio','Seiya de Pegaso de Sagitario',
        'Ban de León Menor de Capricornio','Hyoga de Cisne de Acuario','Ichi de Hydra de Acuario'],
        estrellas: 5
    },
    {
        id:4,
        nombre: "Marinos de Poseidón",
        tipo: "MARINOS",
        imagen: "imgs/marinos.png",
        descripcion: "Son los guerreros que se encargan de proteger y resguardar al dios de los mares Poseidón",
        miembros: ['Baian de Caballo de Mar de Tauro','Kanon de Dragón de Mar de Géminis','Caça de Limnades de Leo',
        'Sorrento de Sirena de Virgo','Isaac de Kraken de Acuario','Io de Scylla de Piscis'],
        estrellas: 2
    }    
];
// --------------------------------------------------------

const signosZodiaco = ['Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio','Acuario','Piscis'];

const DOMItems = document.querySelector("main");

const DOMAsideSection = document.querySelector("aside section");

const DOMtitulo = document.querySelector("aside h3");

const DOMdescripcion = document.querySelector("#descripcion");

// --------------------------------------------------------

/**
 * 
 */
function renderizar() {

    DOMItems.innerHTML = "";

    baseDeDatos.forEach(grupo => {
        const ficha = document.createElement('section');

        // Imagen
        const image = document.createElement('img');
        image.setAttribute('src', grupo.imagen);

        // image.addEventListener('click',()=>{
        //     const div_borrar = document.getElementById(grupo.id);
        //     if (div_borrar){
        //         div_borrar.remove();
        //     }else{

                const div_listado = document.createElement('div');

                div_listado.style.display = 'none';

                //div_listado.setAttribute("id",grupo.id);
                //console.log("ID:",div_listado.getAttribute("id"));
                div_listado.id = grupo.id;
                console.log("ID3:",div_listado.id);
        
                const lista = document.createElement('ul');
                lista.classList.add('lista');

                grupo.miembros.forEach(miembro => {
                    const li = document.createElement('li');
                    li.textContent = miembro;
                    lista.append(li);
                });

                console.log("lista:",lista);

                div_listado.append(lista);            
                //ficha.append(div_listado);
        //     }
        // });


        image.addEventListener('click',() =>{
            if ( div_listado.style.display == 'block')
                div_listado.style.display = 'none';
            else
                div_listado.style.display = 'block';
        });

        // Nombre de caballeros
        const nombre = document.createElement('h3');
        nombre.textContent = grupo.nombre;

        ficha.append(image);
        ficha.append(nombre);

        
        const valoracion = document.createElement('div');
        valoracion.classList.add('estrellasCentradas');

        
        // Hay 5 estrellas
        for (let i = 0; i < 5; i++) {
            const estrella = document.createElement('img');
            estrella.setAttribute('src', 'imgs/estrella.svg');
            
            if (i < grupo.estrellas) {
                estrella.classList.add('estrella_amarilla');
            }else{
                estrella.classList.add('estrella');
            }
            valoracion.append(estrella);
            //estrella.addEventListener('click', () => estrella.classList.toggle('estrella_amarilla'));
            estrella.addEventListener('click', () => {
                console.log("QUITA/PON ESTRELLA");
                estrella.classList.toggle('estrella_amarilla');
                estrella.classList.toggle('estrella');
            });
        }

        ficha.append(valoracion);

        ficha.append(div_listado);

        // Añadir cada fila a la tabla
        DOMItems.append(ficha);        
    });

}

/**
 * mostrarInforme
 * 
 */
function mostrarInforme(tipo){
    // Limpio el aside
    DOMAsideSection.innerHTML = "";


    // Obtengo el objeto
    const objeto = baseDeDatos.find( objeto => objeto.tipo.toLowerCase() == tipo.toLowerCase() );
    console.log(objeto);

    // Cambio el título con nombre caballeros
    DOMtitulo.textContent = objeto.nombre;

    // Pongo descripción
    DOMdescripcion.textContent = objeto.descripcion;

    // Creo un tabla de estadísticas
    const table = document.createElement('table');
    let fila = document.createElement('tr');
    let celda1 = document.createElement('th');
    celda1.textContent = 'Signo';
    let celda2 = document.createElement('th');
    celda2.textContent = 'Número de caballeros';
    fila.append(celda1);
    fila.append(celda2);
    table.append(fila);
    // let cont = 0;
    for (const signo of signosZodiaco) {
        console.log("signo",signo);
        fila = document.createElement('tr');
        celda1 = document.createElement('td');
        celda1.textContent = signo;
        celda2 = document.createElement('td');
        celda2.textContent = numCaballerosPorSigno(signo,objeto);
        fila.append(celda1);
        fila.append(celda2);
        // table.insertRow(cont).insertCell(0).textContent = signo;
        // table.insertRow(cont).insertCell(1).textContent = numCaballerosPorSigno(signo,objeto);
        // cont++;
        table.append(fila);
    }
    
    
    DOMAsideSection.append(table);

}

/**
 * numCaballerosPorSigno
 */
function numCaballerosPorSigno(signo,objeto){
    console.log("signo",signo);
    console.log("objeto",objeto);
    console.log("miembros",objeto.miembros);
    return objeto.miembros.filter(miembro => miembro.toLowerCase().includes(signo.toLowerCase())).length;
}

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
window.onload = renderizar;
// ---------------------------------------
