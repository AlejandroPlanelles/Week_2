class Person{

//constructor
    constructor(name,surname,peso,estatura,birth,aficiones){
        this.nombre = name;
        this.apellido = surname;
        this.estatura = estatura;
        this.peso = peso;
        this.imc = this.calcimc();
        this.yearOfBirth = birth;
        this.age = this.edad(2023);
        this.hobbies = aficiones;
    }

//metodos

calcimc(){
    return (this.peso/((this.estatura)*(this.estatura)))
    }
edad(currentYear){
    return (currentYear - this.yearOfBirth)
}
printAll(){
return `nombre - ${this.nombre},${"\n"}apellido - ${this.apellido},${"\n"}estatura - ${this.estatura},${"\n"}peso - ${this.peso},imc - ${this.imc},${"\n"}year of birth - ${this.yearOfBirth},${"\n"}age - ${this.age};`

}
printhobbies(){
    
    return this.hobbies
}

}
//objeto

module.exports = {Person}
