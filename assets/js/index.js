//repaso clase pasada!!

// intermediario  // un encapsulador de objetos  //

const pais = {
    nombre: "Chile",
    habitantes: 18_000_000
};
const paisDos = {
    nombre: "Argentina",
    habitantes: 50_000_000,
    superficie: "x km2"
};

// const handler = {
//     get(target, property){
//         if(property in target){
//             return target[property];
//         } else {
//             return `la propiedad ${property} no fue encontrada`
//         }
//     }
// }

// const proxyChile = new Proxy(pais, handler)
// const proxyArgentina = new Proxy(paisDos, handler)

// console.log(proxyChile.superficie)
// console.log(proxyArgentina.superficie)
// ------------------------------

// 3. Operaciones comunes que se pueden interceptar con un Proxy:

// get(target, property, receiver): Intercepta la lectura de una propiedad.
// set(target, property, value, receiver): Intercepta la escritura de una propiedad.
// has(target, property): Intercepta la verificación de si una propiedad existe.
// deleteProperty(target, property): Intercepta la eliminación de una propiedad.
// apply(target, thisArg, argumentsList): Intercepta la llamada a una función.

// const handler = {
//     set(target, property, value){
//         if (property === "habitantes") {
//             if(typeof value !== "number" || value < 0){
//                 console.log("los datos de los habitantes es incorrecto")
//             } else {
//                 console.log("numero es correcto")
//             }
//         }
//         if(property === "nombre"){
//             if(value !== "Chile"){
//                 console.log(`El pais ${value} no es el que esta mas al sur de Latinoamerica`)
//             }
//         }
//         target[property] = value
//         return true
//     }
// }

// const proxyChile = new Proxy(pais, handler)

// proxyChile.nombre = "Chile"



// console.log(proxyChile)

// Consigna: Crea un objeto empleado con las propiedades nombre, puesto, y salario. Usa un Proxy para registrar en la consola cada vez que se cambia una propiedad del objeto.

// const empleado = {
//     nombre: "Erick",
//     puesto: "Programador",
//     sueldoUSD: 5000
// }

// const handler = {
//     set(target, property, value) {
//         console.log(`La propiedad ${property} se actualizó de ${target[property]} a ${value}`)

//         target[property] = value
//         return true
//     }
// }

// const proxyEmpleado = new Proxy(empleado, handler)

// // empleado.nombre = "Romina"
// proxyEmpleado.nombre = "Romina"
// // proxyEmpleado.puesto = "Programador senior"
// proxyEmpleado.sueldoUSD = 8000


// Consigna: Crea un objeto cuentaBancaria con propiedades titular, saldo, y pin. Utiliza un Proxy para evitar el acceso a la propiedad pin desde fuera del objeto, y para asegurarte de que solo se puede modificar el saldo si se proporciona el pin correcto.

// const cuentaBancaria = {
//     titular: "Paulina",
//     saldo: 1000,
//     pin:1234
// }

// const handler = {
//     get (target, property) {
//         if(property === "pin") {
//             return "Acceso denegado a la propiedad privada"
//         }
//         return target[property]
//     },

//     set(target, property, value) {
//         if(property === "saldo"){
//             if(target.pin === 1234){
//                 target[property] = value
//             } else {
//                 console.log("Pin incorrecto")
//             }
//         }else {
//             target[property] = value
//         }
//         return true
//     }
// }

// const proxyCuenta = new Proxy(cuentaBancaria, handler)

// // console.log(proxyCuenta.pin)

// proxyCuenta.saldo = 20000
// proxyCuenta.titular = "Rodolfo"

// console.log(proxyCuenta.titular)


//----------------------------------------------------------------------------
//Reflect
// Los métodos de Reflect permiten interactuar con propiedades de objetos, ejecutar funciones, y manejar el prototipo y la creación de objetos, entre otras tareas.


// Métodos principales de Reflect:

// Reflect.apply(target, argumentoThis, argumetosList)

// const suma = (a,b) => a + b

// Reflect.apply(): Es un método que se usa para invocar una función. 
//Permite especificar un valor para this y pasar un array de argumentos que se aplicarán a esa función.

// const resultado = Reflect.apply(suma, null, [10,20])

// console.log(resultado)

// const calculadora = {
//     factor: 10,
//     multiplicar(a,b) {
//         return (a+b) * this.factor
//     }
// }

// const resultadoDos = Reflect.apply(calculadora.multiplicar, calculadora, [2,5])
// console.log(resultadoDos)

//-------------------------------------
// reflect.get  Obtiene el valor de una propiedad de un objeto, de manera mas estructurada que de la forma original: objeto.nombre

// const objeto = {
//     nombre: "Emiliano",
//     apellido: "Rotta"
// };
// const value = Reflect.get(objeto, "nombre")
// console.log(value)


//-------------------------------------
// Reflect.defineProperty(target, propertyKey, attributes)

// const alumno = {}

// const exito = Reflect.defineProperty(alumno, "nombre", {
//     value: "Juan",
//     writable: false //Propiedad que logra que el value, "juan" no pueda ser modificada
// });

// console.log(exito)
// console.log(alumno.nombre)

//---------------------------------------------

// .Ejercicios:
// Ejercicio 1: Aplicar una función

// Consigna: Utiliza Reflect.apply para aplicar una función que multiplique dos números. La función se llama multiply y debe multiplicar 5 y 3.
// Resultado Esperado: 15

const multiply = (a,b) => a * b

console.log(Reflect.apply(multiply,null, [5,3]))


// Ejercicio 2: Definir una propiedad

// Consigna: Usa Reflect.defineProperty para crear una propiedad age en el objeto person con el valor 25. La propiedad no debe ser modificable.
// Resultado Esperado: { name: 'John', age: 25 }

const person = {
    name: "John"
}
Reflect.defineProperty(person, "age",{
    value: 25,
    writable:false
})

console.log(person)