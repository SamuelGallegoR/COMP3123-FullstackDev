//Callback function
var makeACall = function(a, b, add, sub){
    if(a>b){
        return sub(a, b)
    }else
        return add(a,b)
}
console.log(makeACall(10, 20, f1, f2)) //30

// When youre going to re-use a function many times, you declare it
var print = function(){
    console.log("Hello world 1s")
}
setInterval(print, 1000)

//If is a single use, use anonimous declaration
setInterval(()=> {
    console.log("Hello world 2s")
}, 2000)
