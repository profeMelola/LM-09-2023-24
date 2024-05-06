https://lenguajejs.com/javascript/eventos/que-son-eventos/

https://es.javascript.info/introduction-browser-events

# ¿Qué son los eventos?

Los eventos en el DOM son acciones que ocurren en una página web cuando interactúas con ella. Pueden ser acciones como hacer clic en un botón, mover el ratón sobre un elemento, presionar una tecla en el teclado o enviar un formulario. Los eventos del DOM permiten que las páginas web respondan a las acciones de los usuarios.


# ¿Cómo capturar eventos?

Para poder capturar eventos de un elemento del DOM debemos obtener el elemento y asociar el evento con el método addEventListener. 

Este método recibe dos parámetros, el primero es el nombre del evento que queremos capturar, por ejemplo: ‘click’ o ‘mouseover’, el segundo es una función que se ejecutará cuando ocurra el evento.


# Tipos de evento

Existe una gran cantidad de eventos en el DOM que podemos capturar. En este enlace tienes una lista completa, pero nos centraremos en estudiar solo algunos de los más relevantes.


## Eventos ratón


**click:** Se dispara cuando se hace clic en un elemento.

**dblclick:** Se dispara cuando se hace doble clic en un elemento.

**mouseover:** Se dispara cuando el cursor del ratón entra en el área de un elemento.

**mouseout:** Se dispara cuando el cursor del ratón sale del área de un elemento.

**mousedown:** Se dispara cuando se presiona un botón del ratón mientras el cursor está sobre un elemento.

**mouseup:** Se dispara cuando se suelta un botón del ratón después de presionarlo.


## Eventos teclado


**keydown:** Se dispara cuando una tecla del teclado está siendo presionada.

**keyup:** Se dispara cuando se suelta una tecla del teclado después de haber sido presionada.

**keypress:** Se dispara cuando se presiona y luego se suelta una tecla del teclado.


## Eventos formulario


**submit:** Se dispara cuando se envía un formulario.

**reset:** Se dispara cuando se restablece un formulario.

**change:** Se dispara cuando el valor de un elemento de formulario (como <input>, <select> o <textarea>) cambia y se desenfoca.

**input:** Se dispara cuando el valor de un elemento de formulario cambia, independientemente de si se desenfoca o no.


## Otros eventos del DOM


**load:** Se dispara cuando se ha cargado completamente un elemento (como una página o una imagen).

**DOMContentLoaded:** Se dispara cuando se ha completado la construcción del árbol DOM de una página web, pero aún no se han cargado los recursos externos (como imágenes y hojas de estilo).

**scroll:** Se dispara cuando se desplaza el contenido de un elemento que tiene barras de desplazamiento.

**resize:** Se dispara cuando se cambia el tamaño de la ventana del navegador.

**focus:** Se dispara cuando un elemento recibe el foco.

**blur:** Se dispara cuando un elemento pierde el foco.


## Propagación de eventos


La propagación de eventos es un concepto fundamental en la programación de eventos en el DOM. Cuando ocurre un evento en un elemento HTML, como hacer clic en un botón, presionar una tecla o desplazar el ratón sobre un elemento, el evento no se queda en ese elemento solamente; en su lugar, se propaga a través de los elementos padres y puede ser capturado por otros elementos en el árbol DOM.

La propagación de eventos se produce en dos fases: la fase de captura y la fase de propagación o burbujeo (bubbling).

**Fase de Captura:** Durante esta fase, el evento desciende a través de los ancestros del elemento objetivo, desde el elemento raíz hasta el elemento objetivo. Es decir, el evento se captura por los elementos desde el ancestro más externo hasta el elemento objetivo.

**Fase de Propagación/Burbujeo:** Después de completar la fase de captura, el evento comienza a ascender desde el elemento objetivo hacia arriba a través de sus ancestros. Esto permite que los eventos sean capturados por otros elementos en el camino de regreso hacia el elemento raíz.


Podemos detener la propagación con la función stopPropagation() sobre un objeto evento.
