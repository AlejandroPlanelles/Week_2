import { Person } from "./person";

let persona: Person = new Person("Pepe", 20, "churruca")

persona.printName()
persona.setAdress("Madrid")
console.log(persona.getAdress())
console.log(persona.yearOfBirth(2023))
