// --------------------------------------------------------
// Clase alumno
/*class alumno {
    constructor(id, nombre, imagen, notas) {
        this.id = id,
        this.nombre = nombre,
        this.imagen = imagen,
        this.notas = notas
    }
}

// Creo 4 alumnos de prueba
// El array de notas va en orden según la tabla html
const alumno1 = new alumno(1, "Tyson Fury", "imgs/avatar1.jpg", [10, 8, 5, 9, 7, 9]);
const alumno2 = new alumno(2, "Katie Taylor", "imgs/avatar2.jpg", [1, 5, 6, 9, 10, 3]);
const alumno3 = new alumno(3, "Carolina Marín", "imgs/avatar3.jpg", [5, 7, 5, 3, 7, 10]);
const alumno4 = new alumno(4, "Sandra Sánchez", "imgs/avatar4.jpg", [7, 8, 5, 2, 7, 9]);

// Base de Datos
const baseDeDatos = [alumno1, alumno2, alumno3, alumno4];*/

// ES EQUIVALENTE USAR CLASS QUE DIRECTAMENTE CREAR LOS OBJETOS EN EL ARRAY
const baseDeDatos =[
    {
        id: 1,
        nombre: 'Tyson Fury',
        imagen: 'imgs/avatar1.jpg',
        notas: [10, 8, 5, 9, 7, 9]
    },
    {
        id: 2,
        nombre: 'Katie Taylor',
        imagen: 'imgs/avatar2.jpg',
        notas: [1, 5, 6, 9, 10, 3]
    },
    {
        id: 3,
        nombre: 'Carolina Marín',
        imagen: 'imgs/avatar3.jpg',
        notas: [5, 7, 5, 3, 7, 10]
    },    
    {
        id: 4,
        nombre: 'Sandra Sánchez',
        imagen: 'imgs/avatar4.jpg',
        notas: [7, 8, 5, 2, 7, 9]
    }    
];


// --------------------------------------------------------------------
// Elemento HTML del DOM donde crear la información html de cada alumno
const DOMTableBody = document.querySelector("???????"); // Especifica el selector adecuado

// Crear la tabla
function renderizarTabla() {
    //Pendiente de completar
}

// ---------------------------------------
// INICIO
// Se pinta la tabla cuando se carga la página
window.onload = renderizarTabla;

// ------------------------------------------
// COMPLETA TU CÓDIGO JS
