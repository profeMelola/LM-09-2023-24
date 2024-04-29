# Validación de formulario

No debes modificar la página form.html. Ya tiene configuradas las validaciones HTML5.

Añade directamente en dicha página el código JS pertinente. No hace falta un JS externo.

## Especificaciones

El campo observaciones estará deshabilitado hasta que se escriba correctamente la dirección de email en base a su pattern.

La validación del email se hace por pattern (ya está configurado). La cuenta de email debe contener el dominio @educa.madrid.org

- En caso negativo: deberá aparecer el mensaje de validación html5 personalizado con el siguiente texto "El email no contiene el dominio educa.madrid.org". Observa la captura:

![image](https://github.com/profeMelola/LM-09-2023-24/assets/91023374/28e29b1d-ada1-4f07-a7c0-44f68af39ae8)

- En caso afirmativo:
  - Deberá habilitarse el campo de texto para escribir las observaciones.
  - Deberá aparecer el texto provisional (placeholder) “Escribe los comentarios pertinentes”

![image](https://github.com/profeMelola/LM-09-2023-24/assets/91023374/1c70d3ba-b087-4585-a5be-7dc8b5bbfa70)

**SUBMIT:**  

Solo en el caso de escribir una dirección de email de educa.madrid.org y escribir las observaciones se ejecutará el submit, que abrirá una nueva ventana con la página ok.html (ya está configurado el action). 

Cuando se dispare el ‘submit’ deberás guardar en el LocalStorage el JSON de un nuevo objeto “informe” que debes crear con dos propiedades (email y observaciones) rellenos con los correspondientes valores de los campos del formulario. 

Observa la captura del LocalStorage:

![image](https://github.com/profeMelola/LM-09-2023-24/assets/91023374/f27e44c1-7180-4187-9b26-c29f49b5be25)


