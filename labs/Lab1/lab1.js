//1. Function to cap each letetr

function capitalizeEachLetter(str) {
    let words = str.split(' ');  
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word[0].toUpperCase() + word.substring(1);  
    }
    return words.join(' ');  
}

let myString = "hello world, hello world";
let output = capitalizeEachLetter(myString)
console.log(output)


//2.Largest of three given integers

var findLargestInt = function(x, y, z) {
    if (x > y) {
        if (x > z) {
            return x;
        } else {
            return z;
        }
    } else {
        if (y > z) {
            return y;
        } else {
            return z;
        }
    }
};

console.log(findLargestInt(10, 1, 100));


//3. Move characters:
function modifyString(str) {
    if (str.length >= 3) {
        let lastThree = str.slice(-3);  
        let restOfString = str.slice(0, -3); 
        return lastThree + restOfString;  
    } else {
        return "Invalid input, string must be at least 3 characters long";
    }
}

console.log(modifyString("Python"));
console.log(modifyString("JavaScript"));
console.log(modifyString("Hi"));

//4. Find Angle
var findAngle = function(angle) {
    if (angle === 90) {
        return "Right angle";
    } else if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Please input a valid angle";
    }
}


console.log(findAngle(47))
console.log(findAngle(90))
console.log(findAngle(145))
console.log(findAngle(180))


//5. MAx sum of x consecutive numbers

function findMaxSumConsecutive(arr, x){
    let maxSum = 0;
    
    for (let i = 0; i < x; i++) {
        maxSum += arr[i];
    }
    
    let currentSum = maxSum;
    
    for (let i = x; i < arr.length; i++) {
        currentSum = currentSum - arr[i - x] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

console.log(findMaxSumConsecutive([1, 2, 3, 14, 5], 2))
console.log(findMaxSumConsecutive([2, 3, 5, 1, 6], 3))
console.log(findMaxSumConsecutive([9, 3, 5, 1, 7], 2))
