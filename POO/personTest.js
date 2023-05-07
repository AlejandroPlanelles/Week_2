let myLib = require("./person")

let miembro = new myLib.Person("juan","perez",80,190,2000,["correr","comer"])

console.log(miembro)
console.log(miembro.printhobbies())
console.log(miembro.printAll())

////////////////////////////////////////////////////////////
