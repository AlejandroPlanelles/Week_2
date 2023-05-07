import { Contacts } from "./contacts";
import { Person } from "./person";
let contactos:Contacts = new Contacts ();

let pepe:Person = new Person ("Pepe", 40, "gran via")
let juan:Person = new Person ("Juan", 35, "sol")
let ana:Person = new Person ("Ana", 37, "Las Rozas")
let nacho:Person = new Person ("Nacho", 39, "Pozuelo")

contactos.people = [pepe,juan,ana,nacho]

console.log(contactos.printCalendar())





