# **_Aplicación_**

## **¿Qué es?**

Aplicación orientada a la creación de automóviles, la cual facilite la creación y modificación/adición de los mismos, mediante la implementación de patrones de diseño como _Builder_(Creacional) y _Decorator_(Estructural).

## **Necesidad buscada a resolver**

Reducir la complejidad de la aplicación así como la duplicación de código, mediante patrones que permitan implementar la creación de vehículos mediante pasos estructurados así como capas de mejoras al vehículo.

## **Detalles técnicos del lenguaje**

Para el desarrollo de la aplicación, se empleó _TypeScript_, un lenguaje de tipado fuerte el cual nos indica que tipo de valor se está trabajando mediante la expresión **:type**, expresada después de los argumentos de una función, o el nombre de una variable.

```typescript
// Ejemplo
const myText: string = "Hello World!";

const myFunc = (): string => "Hello Again World!"; // implicit return
```

Este lenguaje fue empleado principalmente por la practicidad, intuitividad y documentación que nos provee su estructura semántica.

## **Detalles técnicos del IDE en el que se desarrolla**

Para el desarrollo de la aplicación, se empleó _Visual Studio Code_, un editor de texto el cual nos provee una increíble cantidad de funcionales las cuales nos permiten desarrollarnos en un entorno cómodo y eficiente, esto es gracias a la implementación de extensiones las cuales nos proveen aspectos visuales así como snippets, los cuales reducen la cantidad de código que debemos escribir.

## **Instrucciones generales para desarrollar la aplicación**

Gracias a que contamos con un aplicación desarrollada en _TypeScript_, debemos estar seguros de contar con todas las dependencias e instalaciones correspondientes, para ello debemos:

Descargar _NodeJs_, esto lo podemos realizar mediante el link:

[NodeJs.com](https://nodejs.org/en/)

Descargando la versión LTS (Long Term Support), ejecutando el instalador y siguiendo el procedimiento expresado en él.

Para verificar que contamos con _NodeJs_ instalado en nuestro sistema, verificaremos la versión actual, por lo cual debemos ejecutar el siguiente comando en la terminal:

    node --version

El cual nos devolverá una respuesta similar a:

    v14.17.0

En ese caso habremos completado la descarga de _NodeJs_!

El siguiente paso es descargar _TypeScript_, esto lo podemos realizar mediante el siguiente comando en la terminal:

    npm install -g typescript

Este comando nos descargara _TypeScript_ de manera global.
Ahora, para verificar que contamos con _TypeScript_ instalado en nuestro sistema, verificaremos la versión actual, por lo cual debemos ejecutar el siguiente comando en la terminal:

    tsc --version

El cual nos devolverá una respuesta similar a:

    Version 4.4.3

En este caso habremos completado la descarga de _TypeScript_!

_Finalmente_, para ejecutar nuestra aplicación, debemos ingresar a la carpeta donde contamos con la raíz de nuestra aplicación desde la terminal, una vez dentro de nuestra carpeta debemos ejecutar el siguiente comando:

    tsc App.ts | node App.js

El cual transpira nuestro archivo _App.ts_ a _App.js_, con el fin de poder ser ejecutado por medio de _NodeJs_.

Una vez ejecutado el código nos encontraremos con la respuesta de **5** objetos(Vehículos), los cuales fueron creados por una clase _director_, la cual dirigió la estructura general del vehículo mediante las implementaciones del _patron builder_, el cual, dentro de su lógica interna implementa las adiciones/mejoras para los vehículos proporcionadas por el _patron decorator_.

En caso de requerir ver el código fuente, dentro de la carpeta _"source"_, encontraremos 3 carpetas:

1. **abstract:**
   - Carpeta la cual contiene información acerca de la superclase y subclase del objeto _Carro_.
2. **builderPattern:**
   - Dentro de esta carpeta encontraremos la estructura y lógica requerida para la implementación del _Patron de Diseño Creacional Builder_.
3. **decoratorPattern:**
   - Dentro de esta carpeta encontraremos la estructura y lógica requerida para la implementación del _Patron de Diseño Estructural Decorator_.

Aparte de las carpetas, contamos con 2 archivos adicionales en la raíz de la aplicación:

1. **App.ts:**
   - Dentro de este archivo encontraremos únicamente el llamado de la clase directora del patrón de diseño builder, la cual nos brinda la información correspondiente de los vehículos, para posteriormente ser mostrada por terminal.
2. **tsconfig.json:**
   - Dentro de este archivo encontraremos las configuraciones correspondientes tanto para funciones de typescript como de su trasnpilado.

<br><br>

# **_Patrón de diseño creacional ~ Builder_**

## Necesidad de la aplicación

Construir objetos con funcionalidades determinadas de manera estructurada y por pasos.

## Justificación de uso

Gracias a que el patrón _Builder_ nos brinda la posibilidad de crear un objeto parte por parte, su implementación en la creación de un vehiculo en conjunto con el patrón _Decorator_, ahorra y elimina duplicación de código a la vez que los "Telescopic Constructors", los cuales nos obligan a tener varios constructores con distinta variedad de argumentos y resuelve nuestra necesidad de manera excepcional.

<br><br>

# **_Patrón de diseño estructural ~ Decorator_**

## Necesidad de la aplicación

Añadir o implementar nuevas funcionalidades a nuestro objeto sin la necesidad de crear una nueva subclase.

## Justificación de uso

Gracias a que el patrón _Decorator_ nos brinda la posibilidad de decorar/añadir funcionalidades adicionales a un objeto en concreto en vez de tener que realizar la creación de un nuevo objeto, aporta al objetivo de actualizar los vehículos existentes asi como de la creación de vehículos modificados.
