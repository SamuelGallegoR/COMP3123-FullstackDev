function callAsync(){
    console.log('callAsync-1');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log('callAsync-2');
        //console.log(response.json())
    }).catch((error) => {
        console.log('Error callAsync');
        console.log(error);
    })
    console.log('callAsync-3');
}
//callAsync();


//This is the better way of writing an asyncwait
function callAnotherAsync(){
    console.log('callAsync-1');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log('callAsync-2');
        //console.log(response.json())
    }).catch((error) => {
        console.log('Error callAsync');
        console.log(error);
    })
    console.log('callAsync-3');
}
callAsync();