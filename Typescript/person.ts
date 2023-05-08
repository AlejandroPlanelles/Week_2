export class Person{

//constructor

constructor(public name:string, public age:number, private adress:string){


}

//metodos
public printName(){
    console.log(this.name)
}
public yearOfBirth(currentYear:number):number{
    return currentYear-this.age
}
public setAdress(newAdress:string):void{
    this.adress=newAdress
}
public getAdress():string{
    return this.adress
}
}


