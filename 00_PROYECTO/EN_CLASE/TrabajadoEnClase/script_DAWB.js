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

// Productos (main donde se van a cargar los diferentes productos)
const DOMitems = document.querySelector('#items');
console.log("items:",DOMitems);

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

    console.log("Estoy en renderizar productos");

    // for (const producto of baseDeDatos) {
    //     //
    // }

    baseDeDatos.forEach( producto  => {
        
        // <div class="card col-sm-4">
        //     <div class="card-body flex-centrado">
        //         <img class="img-fluid" src="imgs/patata.jpg"/>
        //         <h5 class="card-title">Patata</h5>
        //         <p class="card-text">1€</p>
        //         <button class="btn btn-primary" marcador="1">+</button>
        //     </div>
        // </div> 
        
        const miNodo = document.createElement('div');
        //console.log(miNodo);
        miNodo.classList.add('card','col-sm-4');
        
        // Div CardBody
        const miNodoCardbody = document.createElement('div');
        miNodoCardbody.classList.add('card-body','flex-centrado');

        // Imagen
        const miNodoImg = document.createElement('img');
        miNodoImg.classList.add('img-fluid');
        miNodoImg.setAttribute('src',producto.imagen);

        // Titulo
        const miNodoTitulo = document.createElement('h5');
        miNodoTitulo.classList.add('card-title');
        miNodoTitulo.textContent = producto.nombre;

        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = producto.precio+divisa;
        //miNodoPrecio.textContent = `${producto.precio}${divisa}`;


        // Boton
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn','btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador',producto.id);
        //pendiente (aprender eventos)
        miNodoBoton.addEventListener('click',anyadirProductoAlCarrito);


        // Añado los hijos al div de cada producto
        miNodoCardbody.append(miNodoImg);
        miNodoCardbody.append(miNodoTitulo);
        miNodoCardbody.append(miNodoPrecio);
        miNodoCardbody.append(miNodoBoton);

        miNodo.append(miNodoCardbody);


        // miNodo.innerHTML = `<div class="card-body flex-centrado"></div>`;
        // miNodo.innerHTML = `<div class="card-body">
        // <img class="img-fluid" src="${producto.imagen}">
        // <h5 class="card-title">${producto.nombre}</h5>
        // <p class="card-text">${producto.precio}${divisa}</p>
        // <button class="btn btn-primary" marcador="${producto.id}">+</button>
        // </div>`;

        // añadir al main
        DOMitems.append(miNodo);
        

    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
function anyadirProductoAlCarrito(evento) {
    alert("Producto añadido al carrito!!!!");
}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    console.log("Estoy en renderizar carrito");
}

/**
 * Devuelve el item del carrito
 */
function getItem(id){

}


/**
 * Devuelve el número de unidades de un mismo producto en el carrito
 */
function getNumUnidades(id){

}


/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {

}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {

}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {

}

// -----------------------------------------------------------------------------
// Eventos
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// Inicio
renderizarProductos(); //para cargar los productos en el main con id="items"
renderizarCarrito(); //para cargar los productos en el carrito (ul con id="carrito")
// -----------------------------------------------------------------------------

