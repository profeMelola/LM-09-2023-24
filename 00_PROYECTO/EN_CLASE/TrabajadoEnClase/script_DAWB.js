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

        // 2 FORMAS DE GESTIONAR EL EVENTO
        // FORMA 1: luego con getAttribute obtengo el id del event.target...
        miNodoBoton.addEventListener('click',anyadirProductoAlCarrito);

        // FORMA 2:
        // miNodoBoton.addEventListener('click',function(){
        //     alert("AÑADO FORMA 2!!!!"+producto.id);
        //     carrito.push(producto.id);
        //     renderizarCarrito();            
        // });



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
    //añadir el id (que está en el marcador) al array
    carrito.push(evento.target.getAttribute('marcador'));
    console.log("id añadido al carrito",evento.target.getAttribute('marcador'));

    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    console.log("Estoy en renderizar carrito!!!");

    DOMcarrito.innerHTML = ""; // borro los li del carrito

    const carritoSinDuplicados = new Set(carrito);

    carritoSinDuplicados.forEach( idProducto => {

        // Buscar el producto por id y obtener el objeto producto
        const producto = getItem(idProducto);
        console.log("Producto:",producto);

        // Obtener el número de unidades compradas el producto
        const numUnidadesProducto = getNumUnidades(idProducto);
        console.log("numUnidadesProducto:",numUnidadesProducto);

        // Crear el nodo <li>
        // <li class="list-group-item text-right mx-2">
        // 2 x Calabacin - 2.1€
        // <button class="btn btn-danger mx-5" data-item="3" style="margin-left: 1rem;">X</button>
        // </li>

        const miLi = document.createElement('li');
        miLi.classList.add('list-group-item','text-right','mx-2');
        miLi.textContent = `${numUnidadesProducto} X ${producto.nombre} - ${producto.precio}${divisa}`;

        const miBoton = document.createElement('button');
        miBoton.classList.add('btn','btn-danger','mx-5');
        miBoton.dataset.idProducto = producto.id;
        miBoton.style.marginLeft = '1rem';
        miBoton.textContent = 'X';
        miBoton.addEventListener('click',borrarItemCarrito);

        miLi.append(miBoton);

        DOMcarrito.append(miLi);


    });

    // Calcular precio total
    DOMtotal.textContent = calcularTotal();

    guardarCarritoEnLocalStorage();

}

/**
 * Devuelve el item (objeto) del carrito
 */
function getItem(id){

    return baseDeDatos.find( producto => producto.id == id);
}


/**
 * Devuelve el número de unidades de un mismo producto en el carrito
 */
function getNumUnidades(id){
    // let cont = 0;

    // for (const producto of baseDeDatos) {
    //     if (producto.id == id)
    //         cont++;
    // }

    // return cont;

    return carrito.filter( itemId => itemId == id).length;
}


/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(eventito) {

    const idBorrar = eventito.target.dataset.idProducto;
    console.log("id a borrar:",idBorrar);

    // FORMA 1
    // let nuevoCarrito = [];

    // for (const id of carrito) {
    //     if (id != idBorrar)
    //         nuevoCarrito.push(id);
    // }

    // // carrito.forEach((id) => {
    // //     if (id != idBorrar)
    // //         nuevoCarrito.push(id);
    // // });

    // carrito = nuevoCarrito;

    // -----------------------------
    // FORMA 2
    carrito = carrito.filter( id => id != idBorrar);

    renderizarCarrito();
    
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    let total = 0;

    for (const id of carrito) {
        const objProducto = getItem(id);

        total += objProducto.precio;
    }

    return total.toFixed(2);

}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    if (confirm('¿Seguro que quieres vaciar el carrito?')){
        carrito = []; //así vacío el array
        renderizarCarrito();
    }
}

// -----------------------------------------------------------------------------
// Eventos
// -----------------------------------------------------------------------------
DOMbotonVaciar.addEventListener('click',vaciarCarrito);

// -----------------------------------------------------------------------------
// LocalStorage
// -----------------------------------------------------------------------------
function guardarCarritoEnLocalStorage(){
    window.localStorage.setItem("carritoDAWB",JSON.stringify(carrito));
    //window.localStorage.setItem("carritoDAWB",carrito); // mal!!! no es un objeto array
}

function cargarCarritoDeLocalStorage(){
    if (window.localStorage.getItem("carritoDAWB") != null)
        carrito = JSON.parse(window.localStorage.getItem("carritoDAWB"));
}

// -----------------------------------------------------------------------------
// Inicio
// -----------------------------------------------------------------------------
// cargarCarritoDeLocalStorage();
// renderizarProductos(); //para cargar los productos en el main con id="items"
// renderizarCarrito(); //para cargar los productos en el carrito (ul con id="carrito")

// window.onload = cargarCarritoDeLocalStorage;
// window.onload = renderizarProductos;
// window.onload = renderizarCarrito; // machaca a renderizarProductos

window.addEventListener('load',cargarCarritoDeLocalStorage);
window.addEventListener('load',renderizarProductos);
window.addEventListener('load',renderizarCarrito);

// -----------------------------------------------------------------------------

