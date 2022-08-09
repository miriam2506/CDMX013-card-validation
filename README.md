# Tarjeta de crédito válida

## Índice

* [1. Proyecto](#1-Proyecto)
* [2. Prototipo](#2-prototipo)
* [3. Público Objetivo](#3-usuario)
* [4. ¿Qué problema resuelve?)
* [5. Interfaz](#5-Interfaz)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1-Proyecto

![LOGO](https://user-images.githubusercontent.com/108847679/179627535-404f85fe-59dd-40fe-a748-a489478d895b.png)

El proyecto para validar una tarjeta de crédito va enfocado en una página web,
la cual es un albergue de animales en el que se puede contribuir a través de 
donaciones. 

Cuando el ususario decide DONAR se abre la pantalla para que valide la tarjeta, 
es ahí que se utiliza el algoritmo de Luhn y se implementa la funcionalidad de ocultar
todos los dígitos de una tarjeta menos los últimos cuatro, así como alertar si 
la transacción se realizó con éxito o no.

## 2-Prototipo

Se realizó primero un prototipo en papel y posteriormente la maquetación fue en FIGMA
lo cual permitió tener una imagen más real de lo que se estaba buscando en
cuestión de colores, tamaños de los elementos, tipografía, etc.

![DONAR](https://user-images.githubusercontent.com/108847679/179628029-55da1142-33f5-4912-a00a-4dd916a77092.jpg)

## 3-Usuario
Las personas que están interesadas en apoyar a los animales, ayudar a los albergues o contribuir 
de alguna manera con ellos. 

## 4-¿Qué problema resuelve?
Para los albergues de animales, es muy difícil tener los recursos para darle mantenimiento, 
así como tener el personal para ir a recaudar fondos que ayudan a solventar diversos gastos.

La página ayuda a dar a conocer la labor que se hace en el albergue, mostrarle a las 
personas las condiciones de los animales, y hacerles la invitación a actividades para
que conozcan el lugar y les genere más confianza en caso de que quieran apoyar.

También informa a donde van los recursos y sobre otro tipo de donaciones que pueden
hacer para que el albergue pueda seguir en pie ayudando a más animalitos.

## Interfaz de usuario

La página funciona de la siguiente manera:

Una vez que el usuario da click en el menú DONAR, aparece la pantalla para la 
validación de tarjeta,

El usuario podrá elegir de que Banco es, deberá introducir los dígitos de su tarjeta 
(se muestran sólo los últimos 4 en la pantalla), así como el nombre del titular 
de la tarjeta, la vigencia de la misma y el código de seguridad.

Una vez que el usuario da click en DONAR, se validarán los datos y posteriormente
se leerá en pantalla si la DONACIÓN fue EXITOSA o la TARJETA fue RECHAZADA, depende de cual 
sea el caso.

![DONACIÓN FINALIZADA](https://user-images.githubusercontent.com/108847679/179628060-3827cab6-7cfd-4240-8628-5c62accb8fde.jpg)


![TARJETA RECHAZADA](https://user-images.githubusercontent.com/108847679/179628073-dd9d4934-b2af-4fb1-8be3-eb282edae9cd.jpg)



##### `README.md`

Debe contener lo siguiente:

* Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
* La imagen final de tu proyecto.
* Investigación UX:
  1. Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  2. Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  3. Luego colocarás la foto de tu primer prototipo en papel.
  4. Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  5. Imagen del prototipo final.

#### Visualmente (HTML y CSS)

Deberás maquetar de forma exacta el prototipo final que hiciste en la herramienta
de diseño de prototipos que escogiste utilizando HTML y CSS. En este momento elegirás
los colores, tipo de fuente, etc a usar.

A continuación describimos los archivos que utilizarás:

##### `src/index.html`

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML).
Encontrarás 3 etiquetas iniciales, las cuales si deseas puedes borrar y empezar
de cero:

* `<header>`: encabezado de tu proyecto.
* `<main>`: contenido principal de tu proyecto.
* `<footer>`: pie de página de tu proyecto.

##### `src/style.css`

Este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS
(Bootstrap, materialize, etc).

#### Funcionalmente (JavaScript - pruebas unitarias)

* La lógica del proyecto debe estar implementada completamente en JavaScript.
* En este proyecto NO está permitido usar librerías o frameworks, solo
  JavaScript puro también conocido como Vanilla JavaScript.

Vas a tener 2 archivos JavaScript separando responsabilidades, a continuación
indicamos qué harás en cada archivo:

##### `src/validator.js`

Acá escribirás las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función debe ser pura e independiente del DOM.

Para esto debes implementar el **objeto `validator`**, el cual ya se encuentra
_exportado_ en el _boilerplate_. Este objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

* **`validator.isValid(creditCardNumber)`**: `creditCardNumber` es un `string`
con el número de tarjeta que se va a verificar. Esta función debe retornar un
`boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

* **`validator.maskify(creditCardNumber)`**: `creditCardNumber` es un `string` con
el número de tarjeta y esta función debe retornar un `string` donde todos menos
los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```

##### `src/index.js`

Acá escribirás todo el código que tenga que ver con la interacción del DOM
(seleccionar, actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar las funciones `isValid` y `maskify`
según sea necesario para actualizar el resultado en la pantalla (UI).

##### `test/validator.spec.js`

En este archivo tendrás que completar las pruebas unitarias de las funciones
`validator.isValid(creditCardNumber)` y `validator.maskify(creditCardNumber)`
implementadas en `validator.js` utilizando [Jest](https://jestjs.io/es-ES/).
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura),
_statements_ (sentencias), _functions_ (funciones) y _lines_ (líneas); y un
mínimo del 50% de _branches_ (ramas).

***

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://curriculum.laboratoria.la/es/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
   que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows
   10 o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Realiza un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort, después debes
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través del algoritmo de Luhn
y un par de cosas más que debes saber para resolver este proyecto. ¡Escúchala
con detenimiento y sigue sus consejos! :)

[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

[Link](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

También una metodología para empezar a desarrollar tareas con JavaScript:

[![Resolución de problemas con JavaScript](http://i3.ytimg.com/vi/lYfEmhLmu7A/hqdefault.jpg)](https://www.youtube.com/watch?v=lYfEmhLmu7A)

[Link](https://www.youtube.com/watch?v=lYfEmhLmu7A)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
* [Blog: cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html).
