let arr=[1,2,3];
arr.sayHello=() =>{
    console.log("hello! i am arr");
}

let arr2= [4,5,6];
arr.hello =() =>{
    console.log("hello");
}

// arr.__proto__
// list of prototypes 


// only give copy on change in original arr
// arr.__proto__.push = (n) =>{
//     console.log("pushing number",n);
// }


// both are refer diff function of location and prototypes
// arr1.sayHello === arr2.sayHello
// give false answer
// but if 

// both are refer same function of location and prototypes
// "abc".toUpperCase === "xyz".toUpperCase
// give true answer



// 1.factory function like a structure in c 
// it is disadvantage ous to use this method because every time we call  the function  it will create new object so memory consumption increase 
// p1.talk ==  p2.talk -> they have not  same return false 

// function PersonMaker(name, age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1=PersonMaker("uday",21);
// console.log(p1);
// p1.talk();



// 2.new operator 
// Constructors
// genrally it is define as first letter is capital and it not return any value

// function Person(name, age){
//          this.name=name;
//          this.age=age;
//     }
//     Person.prototype.talk=function(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
//     let p1=new Person("uday",21);
//     let p2=new Person("Rahul",20);

    // p1.talk === p2.talk
// both are property of same prototype so they are same because both are using same function



// 3. Classes 
// classes are a template for creating objects
// the constructor method is a special method of a class for creating and initializing an object instance of the class.

// class Person{

//     constructor(name, age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi, My name is ${this.name}`);
//     }

// }

// let p1=new Person("uday",21);
// let p2=new Person("Rahul",20);

   // p1.talk === p2.talk
// both are property of same prototype so they are same because both are using same function


// Inheritance 
// it is a mechanism that allows to create new classes on the basis of already existing classes.

class Person {
    constructor(name,age){
        console.log("person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, i am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        console.log("student class constructor");
         super(name,age);//parent class constructor is being called
        this.marks=marks;
    }
    
}


class Teacher extends Person{
    constructor(name, age, subject){
         super(name,age);//calling parent class constructor
        this.subject=subject;
    }
    
}


let stu1=new Student ("Uday", 21, 71);
console.log(stu1);



// when i have multiple student then we create
// multiple of like std1 std2 and more therefore we 
// the below code is not use

// const stu1={
// name:"uday",
// age:"21",
// marks:71,

// };

// const stu2={
//     name:"rahul",
//     age:"20",
//     marks:71,
//     getMarks: function(){
//         return this.marks;
//     },
//     };

//     const stu3 = {
//         name:"satish",
//         age:"19",
//         marks:71,
        
//         };
// const stu4 = {
//  name:"karan",
//  age:"20",
// marks:71,
//  };