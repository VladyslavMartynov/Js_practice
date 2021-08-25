"use strict"
const nameFunc = name =>  typeof name === 'string' ? `Hello ${name}`: 'Error data type is incorrect';

//testing
let personName = nameFunc('Vlad');
console.log(personName);

let personNamesecond = nameFunc(null);
console.log(personNamesecond);

//display all types
console.log(typeof 12);
console.log(typeof '12');
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 9007199254740991n);
console.log(typeof [1,2,3,4,5]);
console.log(typeof {name:'Vlad', age:23 , job:'React developer'});
console.log(typeof Symbol("id"));
console.log(typeof nameFunc);