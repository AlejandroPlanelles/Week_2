import { Person } from "./person";
let persona:Person = new Person ("Pepe",30,"Mayor")
export class Contacts{

    public people:object[];
    //constructor
    constructor(){

        this.people =[]     

    }
    //metodos
public printCalendar(){
        
        return this.people
    }
}

