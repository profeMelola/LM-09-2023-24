const baseDeDatos = [{
        id: 1,
        categoria: "aperitivos",
        nombre: "Receta de Canastitas de verdura",
        imagen: "imgs/canastaVerduras.jpg",
        ingredientes: ["1 cebolla", "200 gramos de espinaca",
            "1 huevo",
            "1 taza de leche descremada",
            "3 cucharadas soperas de maicena"
        ],
        descripcion: "Las canastitas rellenas son muy similares a las empanadas abiertas, a las tartas o a los quiches. Estas se pueden rellenar con los sabores que más te gusten. Su forma es muy original y tentadora para ayudar a incorporar vegetales en la dieta. Por ejemplo, puedes prepararlas para disfrutar de una vianda saludable en el trabajo o en la escuela.",
        dificultad: "baja",
        comensales: 4
    },
    {
        id: 2,
        categoria: "arroces",
        nombre: "Receta de Arroz con calamares y langostinos",
        imagen: "imgs/arroz con calamares.png",
        ingredientes: ["400 gramos de arroz", "2 dientes de ajos", "300 gramos de tomate triturado", "200 gramos de langostinos peladas", "200 gramos de calamares"],
        descripcion: "La receta de arroz con calamares y langostinos es un plato tradicional de la gastronomía española. Una elaboración muy sencilla que no tiene mucha complicación, ya que si los ingredientes son buenos, aportan mucho sabor al arroz, sobre todo, el caldo de pescado con espinas y cabezas. Además, esta elaboración es muy sencilla y rápida de hacer, incluso, puedes preparar el sofrito con tiempo y tenerlo listo solo para añadir el arroz.",
        dificultad: "baja",
        comensales: 4
    },
    {
        id: 3,
        categoria: "aves",
        nombre: "Receta de Pollo en adobo",
        imagen: "imgs/Pollo en adobo.png",
        ingredientes: ["2 jitomates",
            "2 dientes de ajo",
            "1 trozo de cebolla",
            "1 chile ancho limpio",
            "1 lata pequeña de chiles chipotles",
            "1 taza de agua caliente"
        ],
        descripcion: "¿Te animas a cocinar con nosotros un delicioso platillo mexicano? Te ofrecemos una receta de pollo en adobo de chipotle, una elaboración ideal para cualquier día de la semana. Además, es muy rápida de hacer. También debes saber que el pollo en adobo de chipotle es un platillo popular para servir en festividades, ya que es rendidor y se puede servir y acompañar con una porción de arroz o con pasta. Una excelente opción para prepararse para la temporada de Cuaresma con una proteína ligera.",
        dificultad: "alta",
        comensales: 4
    },
    {
        id: 4,
        categoria: "carne",
        nombre: "Receta de torreznos al horno",
        imagen: "imgs/torreznos al horno.png",
        ingredientes: ["600 gramos de panceta ibérica", "1 pieza de sal"],
        descripcion: "¿Te preguntas qué son los torreznos? Los torreznos son tiras de tocino o panceta de cerdo gruesa que se preparan fritas o al horno. La receta de torreznos al horno consiste en una elaboración típica de Soria. Se cocina con panceta ibérica y la venden adobada o curada, sin embargo, siendo ibérica el éxito está garantizado. El secreto de este plato está en cocinarlo a fuego bajo y que se vaya haciendo lentamente, así quedará bien hecha la corteza de cerdo al horno, crujiente y dorada. Además, para elaborarlos solo debes tener un poco de paciencia y vigilar para que no se quemen, ya que entonces perderían todo el sabor. El resultado merece la pena.",
        dificultad: "media",
        comensales: 4
    }
];


// --------- elementos DOM generales --------
const DOMrecetas = document.querySelector("#recetas");


function renderizarRecetas(){

    DOMrecetas.innerHTML = '';

    baseDeDatos.forEach( receta => {

        // <article>
        //   <h2>Receta de Canastitas de verdura</h2>
        //   <div class="imagen"><img src="imgs/canastaVerduras.jpg"></div>
        //   <div>
        //     <p><span>Dificultad: </span> baja</p>
        //     <p><span>Comensales:</span> 4</p>
        //     <p><span>Ingredientes:</span></p>
        //     <table>
        //       <tr>
        //         <td>1 cebolla</td>
        //       </tr>
        //       <tr>
        //         <td>200 gramos de espinaca</td>
        //       </tr>
        //       <tr>
        //         <td>1 huevo</td>
        //       </tr>
        //       <tr>
        //         <td>1 taza de leche descremada</td>
        //       </tr>
        //       <tr>
        //         <td>3 cucharadas soperas de maicena</td>
        //       </tr>
        //     </table>
        //   </div>
        // </article>

        const articulo = document.createElement('article');
        // pendiente h2

        // --------------
        const divImg = document.createElement('div');
        divImg.classList.add('imagen');

        const img = document.createElement('img');
        img.setAttribute('src',receta.imagen);

        //evento click
        img.addEventListener('click',() =>{
            document.forms[0].info.value = receta.descripcion;
            //pintaDescripcion(receta);
        });

        //img.addEventListener('click',pintaDescripcion.bind(receta)); //mal

        divImg.append(img);
        
        // --------------

        const divDetalle = document.createElement('div');

        const pInt = document.createElement('p');
        pInt.innerHTML = '<span>Ingredientes:</span>';

        divDetalle.append(pInt);

        const tabla = document.createElement('table');

        //receta.ingredientes.forEach();
        for (const ingrediente of receta.ingredientes) {
            const fila = document.createElement('tr');
            const celda = document.createElement('td');
            celda.textContent = ingrediente;
            fila.append(celda);
            tabla.append(fila);
        }

        divDetalle.append(tabla);

        articulo.append(divImg);
        articulo.append(divDetalle);
        DOMrecetas.append(articulo);
        
        

    });

}

// onload
renderizarRecetas();


// las funciones
function pintaDescripcion(receta){

    document.forms[0].info.value = receta.descripcion;
    

}

// eventos......

const botones = document.querySelectorAll('.btn');

botones.forEach( (boton) => {
    boton.addEventListener('click', filtrarRecetas);
} );


//pendiente hacer función filtrarRecetas!!!
