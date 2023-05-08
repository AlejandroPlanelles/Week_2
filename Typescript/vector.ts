export class Vector{
    ////// constructor

    private elements:Array<number>

    constructor ( n:number, k:number){
        
        this.elements = []
        for(let i=0;i<n;i++){
            this.elements.push(Math.round(Math.random()*k))
        }
        
    }

////////////metodos
public print(){
        console.log(this.elements)
}
    

public add(v1:Vector):Vector{
    let result= new Vector(this.elements.length,0)
    for(let i=0; i<this.elements.length;i++){
        result.elements[i]=this.elements[i]+v1.elements[i]
    }
    return result
}



public subs(v1:Vector):Vector{
    let result= new Vector(this.elements.length,0)
    for(let i=0; i<this.elements.length;i++){
        result.elements[i]=this.elements[i]-v1.elements[i]
    }
    return result
}


public multy(v1:Vector):Vector{
    let result= new Vector(this.elements.length,0)
    for(let i=0; i<this.elements.length;i++){
        result.elements[i]=this.elements[i]*v1[i]
    }
    return result
}

public multNumber(n:number):Vector{
    let result=new Vector(this.elements.length,0)
    for(let i=0; i<this.elements.length;i++){
        result.elements[i]=this.elements[i]*n
    }
    return result
}
}