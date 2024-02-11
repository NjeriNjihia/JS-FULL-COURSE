let age; //global variable available in the entire code

function add(a, b){
    return a+b;
}
function Calculator(){
    let num1 = 10; //local variables on availble in this function 
    let num2 = 90;
    let sum = num1 + num2;
    return sum;
}
// console.log(num1) return undefined error
console.log(add(29,10))
let sum = add(10, 20);
console.log(sum);

function myAge(){
    age=20;
    console.log(`my age is ${age}`);
    //console.log("my age is " + age)
}

myAge();

        const multiplication = (i, j) => { return i*j}


let result = multiplication(3,4)
console.log(result);
