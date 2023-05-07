import { Book } from "./book";
let books1:Book = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")
let books2:Book = new Book("Harry Potter", 600, "3355512-JK24444", "JK Rowling", "Bloomsbury Salamandra")
let books3:Book = new Book("El Señor de los Anillos", 800, "00998877-TK34222", "J.R.R.Tolkien", "George Allen")
let books4:Book = new Book("Cancion de hielo y fuego", 1000, "55446622-GM75663", "George R.R. Martin", "Gigamesh")
let libOfBooks = [books1,books2,books3,books4]
export class Library {
    //constructor
    constructor(private books:Book[], private adress:string, private manager:string){

    }

    //metodos
    public getAdress(){
        return this.adress
    }
    public getManager(){
        return this.manager
    }
    public setAdress(adress:string):void{
        this.adress
    }
    public setManager(manager:string):void{
        this.manager
    }
    public toString(){
            let libstring = ""
            for (let i= 0; i<this.books.length; i++){
            
            }
    }
}