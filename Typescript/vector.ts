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
        return this.elements
}
    

public add(v1:Vector){
    let sum = []
        for(let i=0;i<this.elements.length;i++){
            sum=v1[i]+this.elements[i];
        }
        return sum
        
}
// public subs(v1:Vector){
//     let res = []
//     for(let i=0;i<this.elements.length;i++){
//         res=this.elements[i]-v1[i]
//     }
//     return res
// }
// public mult(v1:Vector){
//     let mult = []
//     for(let i=0;i<this.elements.length;i++){
//         mult=this.elements[i]*v1[i]
//     }
//     return mult
// }
// public multNumber(n:number){
//     let prod = []
//     for (let i=0;i<this.elements.length;i++){
//         prod = this.elements[i]*n
//     }
//     return prod
// }
}