# Formulario de Inicio/Registro

En la parte que tu consideres de tu tienda online, debes incluir una opción de **Iniciar sesión**

Puedes llamarla como quieras:
- Iniciar sesión
- Inicio/registro
- ...

El formulario que vas a mostrar es el mismo, pero dependiendo de si el json con la información del usuario está guardado en el localStorage, saldrá con unos campos u otros.

Empieza a trabajar diseñando tu formulario. Luego aprenderás en JS como adaptarlo a las especificaciones.

## Campos del formulario

Si vas a reutilizar el formulario de la primera evaluación, ten en cuenta que debe tener obligatoriamente los campos:
- Usuario.
- Contraseña.
- Repetir contraseña.
- Dirección completa.

Ejemplo de formulario:

![image](https://user-images.githubusercontent.com/91023374/228535718-1de33325-bd11-4182-a8f5-e47110aea2fe.png)


## Diseño del formulario

El diseño y apariencia del formulario es libre. 

Haz que apareza y desaparezca una vez que el usuario se ha registrado o iniciado sesión. 

Ten en cuenta que siempre debe quedar la página principal de la tienda visible.

## Javascript en el formulario

- Validar que lo escrito en las dos contraseñas sea idéntico. 
- En el caso de que al hacer el submit el campo "dirección completa" tenga una longitud inferior a 10, debe salir un mensaje personalizado diciendo:

"Dirección demasiado corta. No has escrito la dirección de envío completa"

Como en la siguiente captura:

![image](https://user-images.githubusercontent.com/91023374/228537996-0ebacc1e-0f6f-44d4-8681-807bf9b26df5.png)


**LocalStorage:**

Guarda en el LocalStorage un json con un objeto con toda la información de registro del usuario (todos los datos obligatorios del formulario).

De esta forma simulamos que el usuario está dado de alta en el sistema (en una base de datos).


## Formulario de inicio de sesión (login)

Si al cargar el formulario el usuario está guardado en el LocalStorage, debes modificar el formulario (usando JS) para mostrar solo la siguiente información:

![image](https://user-images.githubusercontent.com/91023374/228539488-b6d3183e-af04-476c-bd47-f6c4aec2f6f6.png)


Al hacer submit comprobad que el login y pwd introducido coincidan con el usuario guardado en el localStorage. 

En caso correcto, que desaparezca el formulario como que ya se ha logado.

En caso contrario que salga un mensaje avisando. Total libertad con el formato para mostrar el mensaje.


