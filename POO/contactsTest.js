let myLibC = require("./contacts")
const { Person } = require("./person")
let contacto = new myLibC.Contacts()

let luis = new Person ("luis", "perez",80,180,1991,["pescar","correr"])
let marta= new Person ("marta", "perez",80,180,1991,["pescar","correr"])
let ana = new Person ("ana", "perez",80,180,1991,["pescar","correr"])
let paco = new Person ("paco", "perez",80,180,1991,["pescar","correr"])

contacto.arrPerson = [luis,marta,ana,paco]



console.log(contacto.printPersons())