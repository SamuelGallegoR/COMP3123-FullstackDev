//1. Re-write a function with ES6
console.log("--Exercise No. 1--\n")

const greeter = (myArray, counter=0) => {
    const greetings = "Hello"
    for (let name in myArray){
        console.log(`${greetings}, ${myArray[name]}!`)
        //Note that counter parameter does absolutelly nothing, We could get rid of it
    }
}

let myArray = ['Samuel Gallego', "John Doe", 'Bruce Wayne']
greeter(myArray)

//2. Capitalize each word by using destructuring function argument and spread operator
console.log("\n\n--Exercise No. 2--\n")


const capitalize = ([firstLetter, ...restOfWord]) => firstLetter.toUpperCase() + restOfWord.join('').toLowerCase()

console.log(capitalize("hello World"))
console.log(capitalize("this Is An Example"))


//3. Create a method to capitalize each color using previous method
console.log("\n\n--Exercise No. 3--\n")

const capitalizeEach = (anArray) => anArray.map(item => capitalize(item))
let colors = ['yellow', 'blue', 'red']
console.log(capitalizeEach(colors))


//4. Filter out numbers less than 20 using proto .filter()
console.log("\n\n--Exercise No. 4--\n")

let moreThan20 = (array) => array.filter(num => num > 20)
let myNums =[1, 60, 34, 30, 20, 5];

console.log(moreThan20(myNums))


//5. Create a method to calculate sum and product using the proto .reduce()
console.log("\n\n--Exercise No. 5--\n")

let calculateSum = (numList) => numList.reduce((theSum, num)=>theSum+num, 0);
let calculateProduct = (numList) => numList.reduce((theSum, num)=>theSum*num, 1)

var array = [1, 2, 3, 4, 5]

console.log(calculateSum(array))
console.log(calculateProduct(array))

//6.Class super class, and Sedan subclass
console.log("\n\n--Exercise No. 6--\n")

class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    info(){
        let s = ""
        s += `Model: ${this.model} \n`
        s += `Year: ${this.year} \n`
        return s;
    }

}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year)
        this.balance = balance
    }

    info(){
        let s = super.info();
        s += `Balance: ${this.balance}`;
        return s;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.info());

const sedan = new Sedan( 'Volvo SD', 2018, 30000);
console.log(sedan.info());
// Output
//Model: Pontiac Firebird Engine 1976
// Volvo SD has a balance of $30000.00
