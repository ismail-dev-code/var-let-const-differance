// function declaration *************

function add (a, b){
    const result = a + b;
    return result;
}
const sum1 = add(5, 60);
console.log(sum1);

function add(a, b){
    return a+b;
}
const sum2 = add(5,100);
console.log(sum2);

// function expression ***********
const add2 = function(a,b){
    return a+b;
}
const sum3 = add2(10,58);
console.log(sum3);

// arrow function ******** 
const add3 = (a, b) => a+b
const add4 = (num1, num2, num3, num4, num5) => num1+num2+num3+num4+num5
// const sum = add3(20,44);
const sum = add4(23,3,5,13,3)
console.log(sum);
const multiply = (num1, num2) => num1*num2
const multi = multiply(40, 2)
console.log(multi);