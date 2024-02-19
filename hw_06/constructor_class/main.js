class Person{
    constructor(name, age,){
        this._name = name;                 
        this._age = age;
    }
    sayHello(){
        console.log(`Hello ${this._name}!`);
    }
}
let Uservalue = new Person('John', '30');
Uservalue.sayHello();

class Student extends Person{
    constructor(name, age, studentid){
        super(name, age);
        this._studentid = studentid;
    }
    study(){
        console.log(`student name: ${this._name}, age: ${this._age}, studentid: ${this._studentid}`);
    }
}
let studentinfo = new Student('John', '30','001');
studentinfo.study();