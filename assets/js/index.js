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

const cuentaBancaria = {
    titular: "Paulina",
    saldo: 1000,
    pin:1234
}

const handler = {
    get (target, property) {
        if(property === "pin") {
            return "Acceso denegado a la propiedad privada"
        }
        return target[property]
    },

    set(target, property, value) {
        if(property === "saldo"){
            if(target.pin === 1234){
                target[property] = value
            } else {
                console.log("Pin incorrecto")
            }
        }else {
            target[property] = value
        }
        return true
    }
}

const proxyCuenta = new Proxy(cuentaBancaria, handler)

// console.log(proxyCuenta.pin)

proxyCuenta.saldo = 20000
console.log(proxyCuenta.saldo)