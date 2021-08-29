"use strict"
// Написать функцию bindFunc, которая принимает в себя 2 + аргументов (Точно должна принять 2 аргумента, а дальше сколько угодно).
// 1 аргумент - какая-то функция
// 2 аргумент - значение контекста
// 3 + ... аргументы - любое кол-во аргументов
// Эта функция, должна устанавливать контекст для функции, которая в первом аргументе, и возвращать эту функцию с новым контекстом.
// Сам контекст, который мы хотим установить, находиться во втором аргументе
const bindFunc = (fn, context, ...args) => {
    return fn.apply(context, [...args]);
}

const obj = {
    name: "Vlad",
    age: 32,
}

function getAge(){
    return this.age;
}

const bindAge = bindFunc(getAge, obj);
console.log(bindAge);

// Написать функцию, которая не принимает никаких аргументов. В теле функции написать логику для нахождения суммы значений любого количества ключей (значения ключей должны быть больше нуля) из переданного контекста.
function sumKeys(){
    const valueObj = Object.values(this);
    const filterObj = valueObj.filter(el => el != 0 && typeof el === 'number');
    const sumObj = filterObj.reduce((acc, item) => acc + item);
    return sumObj;
}

const objectA = {
    a: 1,
    b: 2,
    c: 3,
}

const sum = sumKeys.bind(objectA);
console.log(sum());
// Написать функцию, которая возвращает новый массив, в котором должны быть только четные числа, которые больше двуx и меньше 10. Новый массив будет состоять из значений ключа values из контекста, если такого ключа нет, то выводим сообщение "Не найдено".

function getNewArray(){
        if(!this.values){
            return `Не найдено`;
        }

        const valueArr = this.values;
        const filterArr = valueArr.filter(el => {
            return typeof el === 'number' && el % 2 === 0;
        }); 

        const modifiedArr = filterArr.filter(el => {
            return el > 2 && el < 10;
        });

        const newArr = [...modifiedArr];
        return newArr;
}

const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
};

const result = getNewArray.bind(valObject0);
console.log(result());


