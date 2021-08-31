//1). using object literal / initialization
const student = {name:'Motu Patlu', profession:'cartoon'};

//2). object constructor
const person = new Object();
console.log(person)

//3).create object call another object value
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.name);

//4). class object create  
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}
const peop = new People('Rocky', 22);
console.log(peop)

// 5). function create object 
function manush(name){
    this.name = name;
}
const man =  new manush('dfj')
console.log(man)