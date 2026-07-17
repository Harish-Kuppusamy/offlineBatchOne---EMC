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




