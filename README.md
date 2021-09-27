# **_Aplicación_**

## **Que es?**

Aplicacion orientada la creacion de automoviles, la cual facilite la creacion y modificacion de los mismos, mediante la implementacion de patrones de diseño como _Builder_(Creacional) y _Decorator_(Estructural).

## **Necesidad buscada a resolver**

Reducir la complejidad de la aplicacion asi como la duplicacion de codigo, mediante patrones que permitan implementar la creacion de vehiculos mediante pasos estructurados asi como capas de mejoras al vehiculo.

## **Detalles técnicos del lenguaje**

Para el desarrollo de la aplicacion, se empleo _TypeScript_, un lenguaje de tipado fuerte el cual nos indica que tipo de valor se esta trabajando mediante la expresion **:type**, expresada despues de los argumentos de una funcion, o el nombre de una variable.

```typescript
// Ejemplo
const myText: string = "Hello World!";

const myFunc = (): string => "Hello Again World!"; // implicit return
```

Este lenguaje fue empleado principalmente por la practicidad, intuitividad y documentacion que nos provee su estrucutra semantica.

## **IDE en el que se desarrolla**

Para el desarrollo de la aplicacion, se empleo _Visual Studio Code_, un editor de texto el cual nos prevee una increibe cantidad de funcionales las cuales nos permiten desarrollarnos en un entorno comodo y eficiente, esto es gracias a la implementacion de extensiones las cuales nos proveen aspectos visuales asi como snippets, los cuales reducen la cantidad de codigo que debemos escribir.

## **Intrucciones generales para desarrollar la aplicación**

Gracias a que contamos con un aplicacion desarrollada en _TypeScript_, debemos estar seguros de contar con todas las dependencias e instalaciones correspondientes, para ello debemos:

Descargar _NodeJs_, esto lo podemos realizar mediante el link:

[NodeJs.com](https://nodejs.org/en/)

Descargando la version LTS (Long Term Support), ejecutando el instalador y siguiendo el procedimiento expresado en el.

Para verificar que contamos con _NodeJs_ instalado en nuestro sistema, verificaremos la version actual, por lo cual debemos ejecutar el siguiente comando en la consola:

    node --version

El cual nos devolvera una respuesta similar a:

    v14.17.0

En ese caso habremos completado la descarga de _NodeJs_!

El siguiente paso es descargar _TypeScript_, esto lo podemos realizar mediante el siguiente comando en la consola:

    npm install -g typescript

Este comando nos descargara _TypeScript_ de manera global.
Ahora, para verificar que contamos con _TypeScript_ instalado en nuestro sistema, verificaremos la version actual, por lo cual debemos ejecutar el siguiente comando en la consola:

    tsc --version

El cual nos devolvera una respuesta similar a:

    Version 4.4.3

En este caso habremos completado la descarga de _TypeScript_!

_Finalmente_, para ejecutar nuestra aplicacion, debemos ingresar a la carpeta donde contamos con la raiz de nuestra aplicacion desde la consola, una vez dentro de nuestra carpeta debemos ejecutar el siguiente comando:

    tsc App.ts | node App.js

El cual transpilara nuestro archivo _App.ts_ a _App.js_, con el fin de poder se ejecutado por medio de _NodeJs_.

<br><br>

# **_Patron de diseño creacional ~ Builder_**

## Necesidad de la aplicación

Construir objetos con funcionalidades determinadas de manera estructurada y por pasos.

## Justificación de uso

Gracias a que el patron _Builder_ nos brinda la posibilidad de crear un objeto parte por parte, su implementacion en la creacion de un vehiculo en conjunto con el patron _Decorator_, ahorra y elimina duplicacion de codigo a la vez que los "Telescopic Constructors", los cuales nos obligan a tener varios constructores con distinta variedad de argumentos y resulete nuestra necesidad de manera excepcional.

<br><br>

# **_Patron de diseño estructural ~ Decorator_**

## Necesidad de la aplicación

Añadir o implementar nuevas funcionalidades a nuestro objeto sin la necesidad de crear una nueva subclase.

## Justificación de uso

Gracias a que el patron _Decorator_ nos brinda la posibilidad de decorar/añadir funcionalidades adicionales a un objeto en concreto en vez de tener que realizar la creacion de un nuevo objeto, aporta al objetivo de actualizar los vehiculos existentes asi como de la creacion de vehiculos modificados.
