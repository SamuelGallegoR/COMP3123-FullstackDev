
a =210
var p1 = new Promise((resolve, reject) =>{
    if(a==10){
        resolve('Success');
    }else{
        reject("Failure")
    }    

})

p1.then((result)=> {
    console.log(result);
}, ()=> {
    console.log('Failure')
})



var f1 = function add(a, b){
    return a+b
}

var f2 = function sub(a,b){
    return a - b
}