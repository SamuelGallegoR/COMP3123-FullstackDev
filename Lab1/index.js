console.log("Hello World");

var obj = {
    name: "Jhon",
    age: 30
};


console.log(obj)

let student = {
    name: "Sammy",
    age: 21,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    result: ''
};

console.log(student.name);
console.log(student.age)
console.log(student.isAdmin)
console.log(student.courses)
console.log(student.wife)
console.log(student.result)


console.log(typeof(student.name));
console.log(typeof(student.age));
console.log(typeof(student.isAdmin))
console.log(typeof(student.courses))
console.log(typeof(student.wife))
console.log(typeof(student.result))

//Function declaration
function sayHello(){
    console.log("Say Hello to my little friend!!!!!")
}


//Declaring a function as a expression
var sayHello = function(){
    console.log("Say Hello to my little friend!!!!!")

}

//Declaring function as an arrow function
var sayHello = () =>{
    console.log("Say Hello to my little friend!!!!!")

} 

sayHello();
console.log(typeof(sayHello))