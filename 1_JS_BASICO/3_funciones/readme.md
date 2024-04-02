# Funciones


https://es.javascript.info/function-basics

https://es.javascript.info/function-expressions

https://lenguajejs.com/javascript/introduccion/funciones/


## Resumen: declaración de función vs expresión de función

![image](https://github.com/profeMelola/LM-09-2023-24/assets/91023374/e095c1a4-4c09-4060-9e39-f11332dea6ec)

- Las funciones son valores. Se pueden asignar, copiar o declarar en cualquier lugar del código.

- Si la función se declara como una declaración separada en el flujo del código principal, eso se llama “Declaración de función”.

- Si la función se crea como parte de una expresión, se llama “Expresión de función”.

- Las Declaraciones de Funciones se procesan antes de ejecutar el bloque de código. Son visibles en todas partes del bloque.

- Las Expresiones de Función se crean cuando el flujo de ejecución las alcanza.

En la mayoría de los casos, cuando necesitamos declarar una función, es preferible una Declaración de Función, ya que es visible antes de la declaración misma. Eso nos da más flexibilidad en la organización del código, y generalmente es más legible.

Por lo tanto, **deberíamos usar una Expresión de Función solo cuando una Declaración de Función no sea adecuada para la tarea.**

# Funciones Arrow

![image](https://user-images.githubusercontent.com/91023374/227973584-515db6d0-a42c-4fc5-a6ec-8423ddd5a91a.png)

# Funciones Callbacks

Pasar una función B por parámetro a una función A, de modo que la función A puede ejecutar esa función B de forma genérica desde su código.

Ejemplo:

```
// fB = Función B (callback)
const fB = function () {
  console.log("Función B ejecutada.");
};

// fError = Función Error (callback)
const fError = function () {
  console.error("Error");
};

// fA = Función A
const fA = function (callback, callbackError) {
  const n = ~~(Math.random() * 5);
  if (n > 2) callback();
  else callbackError();
};

fA(fB, fError); // Si ejecutamos varias veces, algunas darán error y otras no
```

## Explicación del código:

Este código en JavaScript define tres funciones y luego ejecuta una de ellas dependiendo de un valor aleatorio generado.

### Definición de funciones:

- **fB:** Es una función que simplemente imprime en la consola "Función B ejecutada." Utiliza console.log() para imprimir en la consola.
- **fError:** Es una función que imprime "Error" en la consola utilizando console.error().
- **fA:** Es una función que toma dos parámetros, callback y callbackError. Esta función genera un número aleatorio entre 0 y 4 (usando Math.random() y ~~(Math.random() * 5)). Si el número generado es mayor que 2, llama a la función callback, de lo contrario llama a callbackError.
  
### Llamada a la función fA:
La última línea del código llama a la función fA pasando las funciones fB y fError como argumentos. 

Esto significa que cuando se ejecute fA, dependiendo del valor aleatorio generado, llamará a una de estas funciones.

### Ejecución:
Cuando se ejecuta fA(fB, fError), fA generará un número aleatorio. Si ese número es mayor que 2, se ejecutará fB, imprimiendo "Función B ejecutada." en la consola. 

Si el número es 2 o menor, se ejecutará fError, imprimiendo "Error" en la consola.

Entonces, cada vez que ejecutes fA(fB, fError), obtendrás uno de estos dos mensajes en la consola, dependiendo del valor aleatorio generado.

### Operador ~~ de doble negación

Conversión de números en coma flotante a enteros:

- Cuando se aplica ~~ a un número en coma flotante, JavaScript primero lo convierte en un entero.
- Luego, se realiza una operación de doble negación. La primera negación convierte el número en un entero negativo si no lo es, y la segunda negación lo convierte de vuelta a un entero positivo.
- En términos prácticos, esto resulta en un redondeo hacia abajo del número en coma flotante al entero más cercano hacia cero.

En el ejemplo anterior, ~~3.7 convertirá 3.7 en el entero más cercano hacia cero, que es 3.

Es importante tener en cuenta que este operador se utiliza generalmente para realizar operaciones de redondeo rápido y puede no ser tan explícito o fácil de entender como otros métodos de redondeo en JavaScript. 

Por lo tanto, es posible que prefieras usar **Math.floor(), Math.ceil(), o Math.round()** para operaciones de redondeo más claras y legibles en tu código.
