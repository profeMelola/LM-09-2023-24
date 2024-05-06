# Ejercicio de repaso: informe de notas

En el directorio **resultado_final** tienes la página **borrador_Index_Estatico.html** con contenido estático que te servirá como guía para hacer el ejercicio. 

![image](https://user-images.githubusercontent.com/91023374/235069020-3a088b67-3750-41cb-a86b-103742dbc2d9.png)

En el directorio principal está la página **index.html** que no debes modificar. 

Tiene enlazado el script **js/script.js** y la hoja de estilos **css/style.css.**

**No es necesario modificar la hoja de estilos style.css!!!!!!!!**

El archivo script.js contiene código javascript como punto de partida. Debes añadir el código JS pertinente según las especificaciones.

## Especificaciones

Los datos de los alumnos están cargados en un array de objetos “alumno”. 

El atributo correspondiente al array de notas está en orden acorde a los módulos que se muestran en la tabla.

Al cargar la página se crea el contenido de la tabla acorde a toda la información del array baseDeDatos. Completa para ello la función renderizarTabla.

### Para completar el MAIN

Crea las filas y columnas de la tabla en base a la información de la base de datos.

La columna donde va la foto del alumno: 

- Al pasar el ratón por encima, el ancho y alto de la foto aumentará el doble.
- Al salir el ratón el ancho y alto de la foto volverá a su tamaño original.

*pista: propiedades offsetheight y offsetwidth*

La columna donde va el radioButton:

- Al hacer click sobre un radioButton deberá completarse el aside de la página html (ver especificaciones del ASIDE más abajo). 

Añade un alumno nuevo (con datos inventados) en la baseDeDatos. Asígnale el avatar1.jpg.

### Para completar el ASIDE

Al hacer click sobre un radioButton, en los correspondientes elementos HTML del contenedor aside deberás:

- Indicar el nombre del alumno usando la etiqueta strong.
- Indicar la nota media de todas las asignaturas.
  

En base al alumno seleccionado de la tabla:
  
- Aumenta la altura  de cada div correspondiente a la barra de cada módulo. Esa altura en px se calcula en base a la nota multiplicada por 30:
(nota * 30) px;
  
Escribe la nota en cada barra.

