export class Person{

//constructor

constructor(public name:string, public age:number, private adress:string){


}

//metodos
public printName():string{
    return this.name
}
public yearOfBirth(currentYear:number):number{
    return currentYear-this.age
}
public setAdress(adress:string){
    this.adress
}
public getAdress():string{
    return this.adress
}
}


