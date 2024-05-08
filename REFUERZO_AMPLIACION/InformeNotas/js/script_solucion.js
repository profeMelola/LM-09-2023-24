// --------------------------------------------------------
/*// Clase alumno
class alumno {
    constructor(id, nombre, imagen, notas) {
        this.id = id,
        this.nombre = nombre,
        this.imagen = imagen,
        this.notas = notas
    }
}

// Creo 4 alumnos de prueba
// El array de notas va en orden según la tabla html
//const alumno1 = new alumno(1, "Tyson Fury", "imgs/avatar1.jpg", [10, 8, 5, 9, 7, 9]);
const alumno2 = new alumno(2, "Katie Taylor", "imgs/avatar2.jpg", [1, 5, 6, 9, 10, 3]);
const alumno3 = new alumno(3, "Carolina Marín", "imgs/avatar3.jpg", [5, 7, 5, 3, 7, 10]);
const alumno4 = new alumno(4, "Sandra Sánchez", "imgs/avatar4.jpg", [7, 8, 5, 2, 7, 9]);

// Base de Datos
const baseDeDatos2 = [new alumno(1, "Tyson Fury", "imgs/avatar1.jpg", [10, 8, 5, 9, 7, 9]), alumno2, alumno3, alumno4];
*/

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
const DOMTableBody = document.querySelector("tbody"); // Especifica el selector adecuado

// Crear la tabla
function renderizarTabla() {
    //Pendiente de completar

    baseDeDatos.forEach( alumno => {

        // <tr>
        //     <td>
        //         <img src="imgs/avatar1.jpg">
        //     </td>
        //     <td>Tyson Fury</td>
        //     <td class="centrar">10</td>
        //     <td class="centrar">8</td>
        //     <td class="centrar">5</td>
        //     <td class="centrar">9</td>
        //     <td class="centrar">7</td>
        //     <td class="centrar">9</td>
        //     <td class="radioClass"><input type="radio" name="verGrafica"></td>
        // </tr>

        const fila = document.createElement('tr');
        const celdaImg = document.createElement('td');
        const image = document.createElement('img');
        image.setAttribute('src',alumno.imagen);

        // ------------------------
        // Pendiente añadir el evento de mouseover/mouseout
        image.addEventListener('mouseover', evento =>{
            let dimH = image.offsetHeight;
            let dimW = image.offsetWidth;

            image.style.height = (dimH * 2)+"px";
            image.style.width = (dimW * 2)+"px";
        });

        image.addEventListener('mouseout', reducir);


        // ------------------------
        celdaImg.append(image);
        fila.append(celdaImg);

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = alumno.nombre;
        fila.append(celdaNombre);


        // alumno.notas.forEach(nota =>{
        //     const celdaNota = document.createElement('td');
        //     celdaNota.textContent = nota;
        // });

        for (const nota of alumno.notas) {
            const celdaNota = document.createElement('td');
            celdaNota.textContent = nota;
            celdaNota.classList.add('centrar');
            fila.append(celdaNota);
        }

        const celdaRadio = document.createElement('td');
        celdaRadio.classList.add('radioClass');

        const radio = document.createElement('input');
        radio.setAttribute('type','radio');
        radio.setAttribute('name','verGrafica');

        // PENDIENTE GESTIONAR EVENTO DEL RADIO!!!!

        radio.addEventListener('click', () =>{
            const nombreAlumno = document.querySelector("aside>p>span");
            nombreAlumno.innerHTML = `<strong>${alumno.nombre}</strong>`;
            const notaMedia = document.querySelector("aside p:nth-child(2)>span");
            notaMedia.innerHTML = `<strong>${calcularNotaMedia(alumno.notas)}</strong>`;

            // pintar gráfico
            const barras = document.querySelectorAll("aside>div div");

            const arrayNotas = alumno.notas;
            for (let i = 0; i < arrayNotas.length; i++) {
                const nota = arrayNotas[i];

                barras[i].style.height = (nota * 30) +"px";
                barras[i].textContent = nota;
                barras[i].title = "Nota="+nota;
                
            }


        });

        celdaRadio.append(radio);

        fila.append(celdaRadio);

        DOMTableBody.append(fila);

    });

    // for (const alumno of baseDeDatos) {
        
    // }
}

// ---------------------------------------
// INICIO
// Se pinta la tabla cuando se carga la página
//window.onload = renderizarTabla;
renderizarTabla();
//window.addEventListener('load',renderizarTabla);

// ------------------------------------------
// COMPLETA TU CÓDIGO JS
function reducir(e){
    let dimW = e.target.offsetWidth;
    let dimH = e.target.offsetHeight;

    e.target.style.width = (dimW / 2)+"px";
    e.target.style.height = (dimH / 2)+"px";
}

function calcularNotaMedia(notas){
    // let sumatorio = 0;
    // for (const nota of notas) {
    //     sumatorio += nota;
    // }
    // return (sumatorio/notas.length).toFixed(2);

    return (notas.reduce( (total,nota) => total +nota, 0 ) / notas.length).toFixed(2);

}