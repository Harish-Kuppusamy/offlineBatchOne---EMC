//log output

console.log(10);
console.error("hello");
console.warn("dont touch");

// variables

var a = 10;
var a = 20;  //redeclare
a = 30;    // reassign

let a = "hello";
let a = "world" // cant redeclare let
a = "india" // reassign

const isLogged = true; // cant redeclare && reassign

// Data Types - Primitive

let name = "harish"  //string
let age = 22 // Number
let adult = true // Boolean
let others; // undefined
let z = null; // null

//operators

let a = 10 + 20;  // Addition
let b = 50 - 20;  // Subtraction
let c = 5 * 3;    // Multiplication
let d = 100 / 4;  // Division
let e = 11 % 3; // modulo

let age = 22;
++age // pre increment
age++ // post increment
--age// pre decrement
age-- // post decrement



//comparision operators

let age = 20;

console.log(age <= 30);
console.log(age >= 30);
console.log(age == "30");
console.log(age === 30);

//logical operators

let result = 20 < 30 && 30 > 18 //false

let result = 20 < 30 || 30 > 18 //true

let result = !true  // false


//conditional statements

let userAge = 22;

if (userAge >= 22) {
    console.log("hello seniors");
}
else if (userAge >= 18) {
    console.log("hello juniors");
}
else {
    console.log("you are not eligible");
}

//switch case


let userAge = 28;

switch (userAge) {
    case 22:
        console.log("age 22");
        break
    case 23:
        console.log("age 23");
        break
    case 24:
        console.log("age 24");
        break
    default:
        console.log("defaut value");
        break
}

// ternary operator

let userAge = 22

let result = userAge >= 22 ? "hello seniors" : " hello juniors"

console.log(result);


//guard operator

let a = 10 < 12 && " yuvaraj";
console.log(a)


//array

let a = 10;
let b = 20;
let c = 30;

let prabhu = [10, 20, 30, 40, 50, 60, 70, 80, 90]


console.log(prabhu);

console.log(prabhu[-1]);

console.log(prabhu.length - 1);

let lastIndex = prabhu.length - 1;

console.log(prabhu[lastIndex]);

let z = prabhu.push(100)
console.log(prabhu);
console.log(z);

let x = prabhu.pop()
console.log(prabhu);
console.log(x);


let y = prabhu.shift()
console.log(prabhu);
console.log(y);


let w = prabhu.unshift(1001)
console.log(prabhu);
console.log(w);


console.log(prabhu.includes(1002));

console.log(prabhu.indexOf(70));


// array destructuring

let [name, age, isAdmin] = ["harish", 23, true]


console.log(name, age, isAdmin);



//spread operator

let array1 = [10, 20, 30]

let array2 = [40, 50, 60]

let array3 = [...array1, ...array2]

console.log(array3);


let a = [10, 20, 30, 40, 50, 60, 70, 80, 90]

console.log(a);


let z = a.splice(1, 3, 1001)

console.log(a);
console.log(z);


//objects


const { name,age,email,courses,personal:{color,gadget}} = {
    name: "harish",
    age: 22,
    email: "abc@gmail.com",
    courses: [0, 1, 23, 14],
    personal: {
        color: "black",
        gadget:"headphone"
    }
}

console.log(name,age,email,courses,color,gadget);

console.log(user["name"]);
console.log(user.email);


user.department = "ece"

console.log(user);

delete user["age"]

console.log(user.personal.gadget);
console.log(user.courses);



//loops

for (let z = 1; z <= 100; z++){


    console.log(z);


}

// for with array

let array = [10, 20, 30]

for (let k of array) {
    console.log(k);

}

// for with objects
const user = {
    name: "harish",
    age: 22,
    email: "abc@gmail.com",
    courses: [0, 1, 23, 14],
    personal: {
        color: "black",
        gadget: "headphone"
    }
}

for (let keys in user) {
    console.log(user[keys]);

}


// while

let a = 1;

while (  a <=5) {
    console.log(a);
    a++
}


//functions

function printHello( num = 100 ) {
        console.log(num);

    return true;


}

let a = printHello()
 console.log(a);

let z = printHello(10)
console.log(z);

console.log(printHello());



// arrow functions

const abc = (a,...b) => {
    console.log(a);
    console.log(b);




}
console.log(abc(10, 20, 30, 40, 50));


// template literals

let name = "harish"
let age = 22

console.log(`hello my name is ${name} and my age is ${age}`);

// pass by value
let a = 10
let b = a
a = 20;

console.log(a);
console.log(b);

// pass by reference
let arr1 = [1, 2, 3]

let arr2 = arr1

arr2.push(20)

console.log(arr1);
console.log(arr2);

// const variable can be mutate
const a = 10
a = 20

const arr = [1, 2, 3, 4]

arr = [1,2,3,45]








//map method
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a.map((harish) => console.log(harish));


//filter
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const b = a.filter((harish) => harish % 2 == 0);
console.log(b);


// reduce

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const z = a.reduce( (b, c ) =>   b + c, 10 )

console.log(z);


// function scope



// hoisting


function abc() {

    console.log(b);
    var b = 300
console.log(b);


}

abc()



