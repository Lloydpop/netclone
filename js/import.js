let person={
    firstName:"perfection",
    lastName:"chizuruoke",
    age:"34",
    race:"black",
    hobby:function(){
        this.firstName +"loves to swim"
    }
}
console.log(person.lastName);


class Persons{
    constructor(name,age){
      this.name=name
      this.age=age
    }
  eat() {
     alert("i am eating")
  }

}
let person1=new Persons("perfection", "18")
let eat=person1.eat()
console.log(eat);
console.log(person1);
function calculate(a,b){
   return a+b
}
let result=calculate(23,45)
console.log(result);