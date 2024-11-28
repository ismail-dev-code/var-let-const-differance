const difference = (x, y) => x-y;
const multiply = (first, second, third) => first * second * third;

// single parameter or one parameter *************************
const student = {name: 'Faisal', age: 20}
const getAge = (person) => person.name;
const age = getAge(student)
console.log(age);

const getThird  = numbers => numbers[2];
const third = getThird([1,2,25,25,5,2,2])
console.log(third);

function add(a, b){
    const result = a + b
    return result;
}
const sum2 = add(10, 6)
console.log(sum2);

const add = (a, b) => {
    const result = a + b
    return result;
} 
const sum3 = add(4, 263)
console.log(sum3);

const add = (a, b) => a + b
const sum4 = add(23, 23)
console.log(sum4);

const dibba = (a, b, c, d) => a * b * c * d
const sum = dibba(2, 4, 6, 8)
console.log(sum);

