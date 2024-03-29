# Especificaciones para la programación JS

## Sobre atributos de los objetos productos

Cada producto deberá tener los siguientes atributos:

- id
- nombre
- precio
- imagen
- info
- categorias (es un array)

Por ejemplo:

    {
        id: 1,
        nombre: 'Patata',
        precio: 1,
        imagen: 'imgs/patata.jpg',
        info: 'La patata es un alimento rico en hidratos de carbono',
        categorias: ['de temporada', 'hortaliza']
    }
    
    
## Gestión de eventos: añadir y quitar productos del carrito (4 opciones)

#### 1. Añadir y quitar productos

Se podrán añadir y quitar productos del carrito de uno en uno.

Tú decides si lo haces desde la ficha del producto en sí, por ejemplo:

![image](https://user-images.githubusercontent.com/91023374/233856397-58e93533-0778-4a54-b835-3b844980a642.png)


O directamente en el carrito añadiendo un botón de (-) o similar. Total libertad.

#### 2. Borrar todos los productos de un mismo tipo del carrito

Se podrán borrar todos los productos de un mismo tipo a la vez:

![image](https://user-images.githubusercontent.com/91023374/233856275-bdd1bc83-a185-4e11-b7e3-010268500a9b.png)

#### 3. Vaciar el carrito

Se podrán borrar todos los productos del carrito:

![image](https://user-images.githubusercontent.com/91023374/233856333-155cd061-de95-4067-b280-ef489d68669a.png)


## Gestión de eventos: información de cada producto

Debes añadir el código JS necesario para que al pasar el ratón por encima de la imagen del producto se muestre la información del producto en cuestión.

Decide el efecto para mostrar dicha información.

### Ejemplo:

![image](https://user-images.githubusercontent.com/91023374/228544426-c5033237-c5b5-48c1-9305-29990a821b28.png)


## Gestión de eventos: filtrado (mínimo 2 categorías)

Debe haber un menú para filtrar los productos a mostrar. Como mínimo debe haber dos opciones de filtrado, dos categorías.

Además debe haber una opción para volver a mostrar todos los productos.

En el caso de la frutería se está filtrando por fruta de temporada, verduras.... esa información lógicamente será una propiedad del objeto producto en cuestión.

![image](https://user-images.githubusercontent.com/91023374/233858687-00d5e86d-cf2a-4fe2-88c5-47a3f520f7e5.png)


Decide en tu tienda las opciones de filtrado acordes a la temática de la misma.

