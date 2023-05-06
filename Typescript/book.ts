export class Book { 
    //constructor
    constructor(private title:string, private nPages:number, private isbn:string, private author:string, private editorial:string){

    }

    //metodos
    public getTitle():string{
        return this.title
    }
    public getNPages():number{
        return this.nPages
    }
    public getIsbn():string{
        return this.isbn
    }
    public getAuthor():string{
        return this.author
    }
    public getEditorial():string{
        return this.editorial
    }
    public setTitle(newTitle:string):void{
        this.title = newTitle
    }
    public setNPages(newNPages:number):void{
        this.nPages = newNPages
    }
    public setIsbn(newIsbn:string):void{
        this.isbn = newIsbn
    }
    public setAuthor(newAuthor:string):void{
        this.author = newAuthor
    }
    public toString():string{
        return `Title - ${this.title},${"\n"}Number of Pages - ${this.nPages},${"\n"}ISBN - ${this.isbn},${"\n"}Author - ${this.author},${"\n"}Editorial - ${this.editorial}`
        
    }
}



