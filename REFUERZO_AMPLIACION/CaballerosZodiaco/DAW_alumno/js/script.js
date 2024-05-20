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


// ---------------------------------------
function renderizar() {




}


function mostrarInforme(tipo){



    
}

// ---------------------------------------
// INICIO
// Se pinta la tabla cuando se carga la página
window.onload = renderizar;




