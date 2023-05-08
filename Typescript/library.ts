import { Book } from "./book";

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
    public setAdress(newadress:string):void{
        this.adress=newadress
    }
    public setManager(newmanager:string):void{
        this.manager=newmanager
    }
    public toString():string{
        let libBooks = ""
        for (let i= 0; i<this.books.length; i++){
        libBooks = libBooks + "book" + i +":\n" + this.books[i].toString()
        }
        return libBooks
    }
    public getNumberOfBooks():number{
        let numBooks=0
        for (let i = 0; i<this.books.length; i++){
          numBooks = this.books.length
        }
        return numBooks
    }
    public findByAutor(autor:string): Book[] {
        let getAuthor: Book[]=[];
        for (let i =0; i < this.books.length; i++){
            if (this.books[i].getAuthor() == autor){
            getAuthor.push(this.books[i])
            }
        }
        return getAuthor
    }
}