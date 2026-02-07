function ejemplo() {
  let local = 'Soy local';
  console.log(local);
}
ejemplo();
//console.log(local); // Error: local no está definido

// Variables globales
// variables declaradas fuera de cualquier función
//   -. se pueden usar desde cualquier parte
//   -. permanecen en memoria durante toda la ejecución del código

// RIESGOS
//  .-PUEDEN SER MODIFICADAS DE CUALQUIER LUGAR
//  .-DIFICULTA EL SEGUIMIENTO DE ERRORES
//  .-VARIAS FUNCIONES PUEDEN ALTERAR EL MISMO VALOR SIN CONTROL

let contador = 0;

function incrementar() {
  contador++;
}

incrementar();
incrementar();
incrementar();

console.log(contador); // retorna 3

/* 
Idea clave:
1.- usar variables locales siempre que sea posible.
2.- usar variables globales solo cuando realmente sea necesario
*/

// Parámetyros Obligatorios

// Problemas comunes
// .- La variable toma un valor undefined
// .- la logica puede fallar
// .- El error no siempre es evidente

function saludar(nombre) {
  if (!nombre) {
    console.log('Error: se requiere un nombre para saludar');
    return; // --> para la ejecución y no retorna nada
  }
  console.log('Hola, ' + nombre);
}

saludar(); // Hola, undefined

/* 
Idea Clave:
.- JS no obliga a pasar parametros.
.- Validarlos manualmente evita errores y mejora la calidad del código
*/

// Párametros Opcionales y Valores por defecto

// .- Permite que la función funcione correctamentaunque no se pase el parámetro.
// .- Evita validaciones innecesarias
// .- hace el código mas claro y legible

function despedirse(nombre = 'invitados') {
  console.log(`adiós, ` + nombre);
}

despedirse(); // adiós undefined
despedirse('Antonio'); // adiós, antonio

function crearUsuarios(nombre, rol = 'usuario') {
  if (!nombre) {
    console.log('Error: el nombre es obligatorio');
    return;
  }
  console.log('Usuario:', nombre, 'Rol:', rol);
}

crearUsuarios('Leo');
crearUsuarios('Pedro', 'admin');

/* 
Ideas clave:
Parametros obligatorios: deben validarse.
Parametros opcionales: usan valores por defecto
*/

// Funciones con multiples parámetros.
// .- El orden de los parámetros importa.
// .- Cada parámetro recibe el valor de argumento en la misma posición.
// .- Se pueden conbinar parámetros obligatorios, opcionales y con valores por defecto.

function sumar(a, b) {
  console.log(a + b);
}

sumar(3, 5);

function calcularPrecio(producto, precio, descuento = 0) {
  let total = precio - precio * descuento;
  console.log(producto + ' :' + total);
}

calcularPrecio('polera', 1000, 0.1);
calcularPrecio('pantalón', 1000);

/* 
Ideas claves:
.- Las funciones pueden recibir todos los parámetros que necesites. Pero es importante:

.-  Mantenerlas claras
._ no sobre cargarlas inecesariamente
.- usar valores por defecto cuando corresponda.
*/

// Uso sel operador Rest (...)
// .- se escribe con ... antes del nombre del parámetro
// .- Gurda los argumentos en un array
//.- Debe ser el último parámetro de la función.
// .- Permite crear funciones mas flexibles y reutilizables.

function sumarNumeros(...numeros) {
  // 1,2,3 ---> [1,2,3]
  console.log(numeros);
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarNumeros([1, 2, 3])); // 6
console.log(sumarNumeros(10, 20, 30)); // 60

function registroDeCompra(cliente, ...productos) {
  console.log('Cliente: ', cliente);
  console.log('Productos: ', productos);
}

registroDeCompra('Fernando', 'pan', 'Leche', 'Queso', 'Jamón', 'Asado');
registroDeCompra('Leo', 'Tomate', 'Helado', 'Carbón', 'Mate');
registroDeCompra('Max');

/* 
Idea clave:
El operador rest permite funciones.
.- cunado usamos parámetros fijos con res "usar parametros fijos para datos escenciales" y "usar res para doatos variables."
.- más flexibles
.- más limpias
.- permite manejar datos variables sin errores
*/

function calculadora(...numeros) {
  return numeros.reduce((acumulador, num) => acumulador + num, 0);
}

console.log(calculadora(2, 5, 9));

// Parámetros como funciones "Callbacks"

// una callback es una función que se pasa como parámetro a otra función y se ejecuta dentro de ella en algún momento.
// permite que una función delegue parte de su comportamiento sin necesidad de cambiar su código

// ¿ Por qué se usa callback ?
// .-permite reutilizar código
// .- facilita la programación asincrónica ej: setTimeOut, fetch.
/* .- son muy comunes en métodos de arreglos:
        .- .map()
        .- .filter()
        .- .find()
        .- .forHeach()
        .- .reduce()
*/
// .- Permite definir que hacer con los datos, no solo obtenerlos.

function ejecutarOperacion(a, b, operacion) {
  return operacion(a, b);
}

function mySuma(x, y) {
  return x + y;
}

function myResta(x, y) {
  return x - y;
}

console.log(ejecutarOperacion(5, 3, mySuma));
console.log(ejecutarOperacion(5, 3, myResta));

// Callback con funciones anónimas.

function procesarSaludo(nombre, callback) {
  callback('Saludos, ' + nombre);
}

// function nombredefunction(){}
// function(){}
// () => {}
// () =>

procesarSaludo('Leonardo', function (mensaje) {
  console.log(mensaje);
});

// callback en métodos de array
// recibe un callback que se ejecuta por cada elemento del arreglo
const arraynumeros = [1, 2, 3, 4];

const dobles = arraynumeros.map(function (num) {
  return num * 2;
});

console.log(dobles);

// .- Un callback es una función pasada como parámetro
// .- Permite personalizar el comportamiento de otra función

// Funciones Anidadas
