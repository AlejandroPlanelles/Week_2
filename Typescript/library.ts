import { Book } from "./book";

export class Library {
    //constructor
    constructor(private books:Array<any>, private adress:string, private manager:string){

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
            let libstring = ""
            for (let i= 0; i<this.books.length; i++){
            libstring = libstring + "book" + i +":\n" + this.books[i]
            }
            return libstring
    }
    public getNumberOfBooks():number{
            let numberOfBooks= 0
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
