const max = Math.max(2,34,41,4,6,7,)
const numbers = [23,3,445,65,776,65];
const arrayMax = Math.max(...numbers);

// console.log(...numbers);
console.log(arrayMax);

// use spread operator to copy a object or array 
const friends = [2, 4, 34, 3];
const bondhu = friends;
const dosto = [...friends] //copy
console.log(dosto);
friends.push(100);
console.log(friends);
console.log(dosto);
// advance 
const sonkha = [...friends, 9000] //add extra element while copy
console.log(sonkha);