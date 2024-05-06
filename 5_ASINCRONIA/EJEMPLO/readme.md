# Descripción del ejemplo

1. Se define una matriz vacía llamada pokedex.
2. Se utiliza la función fetch() para realizar una solicitud GET a la URL 'https://pokeapi.co/api/v2/pokemon'. Esta solicitud busca obtener una lista de todos los Pokémon disponibles.
3. Se encadenan promesas usando .then() para manejar la respuesta de la solicitud y convertirla a formato JSON. Dentro de esta promesa, se itera sobre la lista de resultados de Pokémon obtenida.
4. Para cada Pokémon en la lista, se hace otra solicitud utilizando su nombre (obtenido de la lista anterior). Esto se hace para obtener información detallada de cada Pokémon, como sus sprites (imágenes) y otros datos.
5. Se encadenan más promesas para manejar la respuesta de la solicitud secundaria y convertirla a formato JSON. Dentro de esta promesa, la información del Pokémon se agrega a la matriz pokedex.
6. Fuera del bucle, pero dentro de la primera promesa, se imprime en la consola un mensaje indicando que la pokedex se está construyendo, seguido de la impresión de la matriz pokedex actual.
7. Se utiliza setTimeout() para esperar 2 segundos antes de ejecutar el código dentro de su función de retardo. Dentro de esta función, se imprime un mensaje de retardo y luego se imprime la matriz pokedex nuevamente.
8. Se selecciona un elemento <p> del documento y se establece su contenido como la representación JSON de la matriz pokedex.
