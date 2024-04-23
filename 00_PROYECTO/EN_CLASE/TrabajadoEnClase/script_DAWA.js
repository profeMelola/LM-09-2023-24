// -----------------------------------------------------
// Variables

// Creación de un array de productos (simulando su obtención de una base de datos)
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Patata',
        precio: 1,
        imagen: 'imgs/patata.jpg'
    },
    {
        id: 2,
        nombre: 'Cebolla',
        precio: 1.2,
        imagen: 'imgs/cebolla.jpg'
    },
    {
        id: 3,
        nombre: 'Calabacin',
        precio: 2.1,
        imagen: 'imgs/calabacin.jpg'
    },
    {
        id: 4,
        nombre: 'Fresas',
        precio: 0.6,
        imagen: 'imgs/fresas.jpg'
    }

];

let carrito = [];
const divisa = '€';

//observa el html y pon los selectores adecuados

const DOMitems = document.querySelector('#items'); // objeto HTML donde añadir los productos
console.log("DOMitems", DOMitems);

const DOMcarrito = document.querySelector('#carrito');

const DOMtotal = document.querySelector('#total');

const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// -----------------------------------------------------

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. 
 * Son los productos a vender.
 * No confundir con el carrito
 */
function renderizarProductos() {

    // for (const producto of baseDeDatos) {

    // }

    baseDeDatos.forEach(producto => {

        // <div class="card col-sm-4"> //miNodo
        //     <div class="card-body flex-centrado"> // miNodoCardBody
        //         <img class="img-fluid" src="imgs/patata.jpg"/>
        //         <h5 class="card-title">Patata</h5>
        //         <p class="card-text">1€</p>
        //         <button class="btn btn-primary" marcador="1">+</button>
        //     </div>
        // </div>        

        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        //DOMitems.append(miNodo);

        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body', 'flex-centrado');
        //miNodo.append(miNodoCardBody);

        const miNodoImg = document.createElement('img');
        miNodoImg.classList.add('img-fluid');
        miNodoImg.setAttribute('src', producto.imagen);
        //miNodoCardBody.append(miNodoImg);

        const miNodoTitulo = document.createElement('h5');
        miNodoTitulo.classList.add('card-title');
        miNodoTitulo.textContent = producto.nombre;
        //miNodoCardBody.append(miNodoTitulo);

        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = producto.precio + divisa;
        //miNodoPrecio.textContent = `${producto.precio}${divisa}`;
        //miNodoCardBody.append(miNodoPrecio);

        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', producto.id);
         miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);

        //Añadimos hijos a la ficha CardBody
        miNodoCardBody.append(miNodoImg);
        miNodoCardBody.append(miNodoTitulo);
        miNodoCardBody.append(miNodoPrecio);
        miNodoCardBody.append(miNodoBoton);

        //Añado el CardBody al div (miNodo)
        miNodo.append(miNodoCardBody);


        DOMitems.append(miNodo);


    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    console.log(evento.target);
    carrito.push(evento.target.getAttribute("marcador"));

    console.log(carrito);

    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {

    DOMcarrito.innerHTML = ''; // borro los li del carrito

    const carritoSinDuplicados = new Set(carrito);

    carritoSinDuplicados.forEach( idProducto =>{
        // <li class="list-group-item text-right mx-2">
        // 2 x Calabacin - 2.1€
        // <button class="btn btn-danger mx-5" data-item="3" style="margin-left: 1rem;">X</button>
        // </li>

        // Buscar el objeto producto por id
        const producto = getItem(idProducto);
        console.log("producto:"+producto);

        const numUnidadesProducto = getNumUnidades(idProducto);
        console.log("numUnidadesProducto:",numUnidadesProducto);

        const miLi = document.createElement("li");
        miLi.classList.add('list-group-item','text-right','mx-2');
        miLi.textContent = `${numUnidadesProducto} X ${producto.nombre} - ${producto.precio}${divisa} `;

        const miBoton = document.createElement('button');
        miBoton.classList.add('btn','btn-danger','mx-5');
        miBoton.dataset.idProducto = producto.id;
        miBoton.style.marginLeft = '1rem';
        miBoton.textContent = 'X';
        miBoton.addEventListener('click',borrarItemCarrito);

        miLi.append(miBoton);

        DOMcarrito.append(miLi);

    });

    DOMtotal.textContent = calcularTotal();

    guardarCarritoEnLocalStorage();
}

/**
 * Devuelve el item (objeto) del carrito
 */
function getItem(id) {
    return baseDeDatos.find( producto => producto.id == id);
}


/**
 * Devuelve el número de unidades de un mismo producto en el carrito
 */
function getNumUnidades(id) {
    // let contador = 0;
    // for (const idProducto of carrito) {
    //     if (idProducto == id)
    //         contador++
    // }

    // return contador;

    return carrito.filter( idProducto => idProducto == id).length;

    //carrito.forEach( (idProducto, contador) =>  idProducto == id);


}


/**
 * Evento para borrar un elemento del carrito (completo, con todas unidades)
 */
function borrarItemCarrito(evento) {
    alert("Borrando item carrito");
    console.log("id",evento.target.dataset.idProducto);
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {

    let total = 0;
    let objProducto;

    for (const id of carrito) {
        objProducto = getItem(id);
        total += objProducto.precio;
    }

    return total.toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

// -----------------------------------------------------------------------------
// Eventos
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// LocalStorage
// -----------------------------------------------------------------------------
function guardarCarritoEnLocalStorage(){
    window.localStorage.setItem("carritoDAWA",JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage(){
    if (window.localStorage.getItem("carritoDAWA"))
        carrito = JSON.parse(window.localStorage.getItem("carritoDAWA"));
}


// -----------------------------------------------------------------------------
// Inicio
// cargarCarritoDeLocalStorage();
// renderizarProductos(); //para cargar los productos en el main con id="items"
// renderizarCarrito(); //para cargar los productos en el carrito (ul con id="carrito")


window.onload = cargarCarritoDeLocalStorage;
window.onload = renderizarProductos;
window.onload = renderizarCarrito;
// -----------------------------------------------------------------------------

