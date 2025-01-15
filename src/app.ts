// here we learn the type strictness
// function add(num1: number, num2: number,printresult: boolean){
//     if(printresult){
//         console.log(num1+num2);
//     }
//     else{
//         return num1+num2;
//     }
// }

// const n1: number = 20; // type defined as number 
// const n2: number = 30;
// const printresult: boolean = true;
// const ans = add(n1,n2,printresult);
// const someText: string = "Tanush Deshpande";
// console.log(ans);


// object , arrays, tuple , enum
// console.log("lets run this now ....");

// const person: {
//     firstName: string,
//     age: number,
//     // nested object used in type script
//     xyz: {
//         address: string
//     }
//     skills: string[];
// } = {
//     firstName: "Tanush",
//     age:21,
//     xyz:{
//         address: "aaraohi elegance"
//     },
//     skills:['react.js','mern']
// };
// console.log(person.skills);

// function and output the code 
function greet(firstName : string){
    console.log('Hello',' ',firstName);
}

greet('Tanush');

function sum(a: number,b:number):number {
    return a+b;
};

const value = sum(1,2);
console.log(value);

function age(age:number):boolean {
    if(age>18){
        return true;
    }
    else{
        return false;
    }
};

let x = age(23);
console.log(x);

function runAfter1s(fn: () => void){
    setTimeout(fn,1000);
}

runAfter1s(function() {
    console.log("hi there");
});


function isLegal(user){
    if(user.ag > 18){
        return true;
    }
    else{
        return false;
    }
}


// one way of writing the object strictly
// const user : {
//     firstName: string,
//     secondName : string,
//     age : number,
// } = {
//     firstName: 'Tanush',
//     secondName: 'deshpande',
//     age: 21
// };


// // interface
interface User {
    firstName : string,
    secondName : string,
    age : number,
    email?: string
};

function isLegalAge(user): boolean{
    if(user.age > 18){
        return true
    }
    else{
        return false;
    }
};

function greetMe(user){
    console.log('Hi There '+ user.firstName);
};
// User here is an interface
const user:User = {
    firstName: "tanush",
    secondName: "Deshpande",
    age: 34
};

let val = isLegalAge(user);
greetMe(user);


// readonly property

interface Person {
    name: string;
    age: number;
}
   
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}
   
// let writablePerson: Person = {
//     name: "Person McPersonface",
//     age: 42,
// };
   
// works
// let readonlyPerson: ReadonlyPerson = writablePerson;
   
// console.log(readonlyPerson.age); // prints '42'
// writablePerson.age++;
// console.log(readonlyPerson.age); // prints '43'

// Types -> similar to interface but we cannot implement in class but they have extra functionality to it as it 
// hepls to do intersection , union

type GreetArg = number | string;

function greetUs(hi: GreetArg){
    console.log(hi)
}

greetUs(34);
greetUs("Tanush");

type Employee = {
    name : string;
    startDate: Date; 
};

interface Manager {
    name : string;
    department : string;
};

type TechLead = Employee & Manager;

// we can do the intersection of the code using the type which is not allowed in the interfaces

// type TechLead = {
//     name: string;
//     department : string;
//     startDate: Date;
// };

// const tech: TechLead = {
//     name: "harkirat",
//     startDate: new Date(),
//     department: "CSE"
// };

type numberArr = number[];

function print(num:numberArr):void{
    for(let i =0;i<=num.length;i++){
        console.log(num[i]);
    }
}

print([1,2,3,4,5,6,7]);


// type keyinput = "up" | "down" | "left" | 'right';

enum Direction {
    up, // 0
    down, // 1
    left, // 2
    right // 3
}

function doSomething(keyPressed: Direction) {
    switch (keyPressed) {
        case Direction.up:
            console.log("Moving up");
            break;
        case Direction.down:
            console.log("Moving down");
            break;
        case Direction.left:
            console.log("Moving left");
            break;
        case Direction.right:
            console.log("Moving right");
            break;
        default:
            console.log("Invalid direction");
    }
}

// Simulate calling the function
doSomething(Direction.up);
doSomething(Direction.down);

// Add an event listener for keypress
addEventListener('keypress', (event) => {
    // Map key presses to directions
    let direction: Direction | null = null;

    switch (event.key) {
        case 'w':
            direction = Direction.up;
            break;
        case 's':
            direction = Direction.down;
            break;
        case 'a':
            direction = Direction.left;
            break;
        case 'd':
            direction = Direction.right;
            break;
    }

    if (direction !== null) {
        doSomething(direction);
    }
});


let greetMeout= () => {
    console.log('Hello world');
};


interface Address{
    City: string,
    country: string,
    pincode: number,
    houseNumber: string
};

interface Person{
    name: string,
    age: number,
    address: Address,
};

interface Office {
    address: Address
};

let person : Person ={
    name: 'Tanush',
    age: 20,
    address:{
        City: 'Ahmedabad',
        country:'India',
        pincode:380058,
        houseNumber: 'B-502'
    }
};

interface Human {
    name: string;
    age: number;
    isLegal(): boolean;
}

class Manager implements Human {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    isLegal(): boolean {
        if(this.age >= 18){
            return true;
        }
        else{
            return false;
        }
    }
}

class Shape {
    a: number;

    constructor(a: number) {
        this.a = a;
    }

    area() {
        console.log('Hi, I am an area method');
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super(0); // Provide a value for `a` since the parent class constructor requires it.
        this.width = width;
        this.height = height;
    }

    area() {
        const calculatedArea = this.width * this.height;
        console.log(`The area of the rectangle is: ${calculatedArea}`);
        return calculatedArea;
    }
}

// Example usage
const rectangle = new Rectangle(10, 5);
rectangle.area(); // Outputs: The area of the rectangle is: 50

