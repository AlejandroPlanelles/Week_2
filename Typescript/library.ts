import { Book } from "./book";
<<<<<<< HEAD
let books1:Book = new Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")
let books2:Book = new Book("Harry Potter", 600, "3355512-JK24444", "JK Rowling", "Bloomsbury Salamandra")
let books3:Book = new Book("El Señor de los Anillos", 800, "00998877-TK34222", "J.R.R.Tolkien", "George Allen")
let books4:Book = new Book("Cancion de hielo y fuego", 1000, "55446622-GM75663", "George R.R. Martin", "Gigamesh")
let arrBooks = [books1, books2, books3, books4]
export class Library {
    //constructor
    constructor(private books:string[], private adress:string, private manager:string){
=======

export class Library {
    //constructor
    constructor(private books:Array<any>, private adress:string, private manager:string){
>>>>>>> dia2

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
    public toString():string{
<<<<<<< HEAD
        let librarytotal: string =""
        for (let i=0; i < this.books.length; i++){
            librarytotal = librarytotal + "Bookç"+ i + "\n" + this.books[i]
        }
        
    }
}
console.log(arrBooks)
=======
            let libstring = ""
            for (let i= 0; i<this.books.length; i++){
            libstring = libstring + "book" + i +":\n" + this.books[i]
            }
            return libstring
    }
    public getNumberOfBooks():number{
            let numberOfBooks=""
            for (let i = 0; i<this.books.length; i++){
              numberOfBooks = this.books.length  
            }
            return numberOfBooks
    }
    public findByAuthor(author:string): Book[] {
            let sayAuthor: Book[]=[];
            for (let i =0; i < this.books.length; i++){
                if (this.books[i].getAuthor() == author){
                sayAuthor.push(this.books[i])
                }
            }
            return sayAuthor
    }
            
}
>>>>>>> dia2
