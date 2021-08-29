"use strict"
// Получить от юзера число.
// Получить сумму квадаров всех чисел от 1 до числа, которое ввел юзер. Пример:
// Юзер ввел 4
// (1 * 1) + (2 * 2) + (3 * 3) + (4 * 4) = 30
// Вывести в консоль результат
// Привести во вторую степерь можно через оператор **. 3 ** 2 = 9
const num = Number(prompt('Enter your number'));
alert(num);

const sumSquare = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i**2;
    }
    console.log(`The sum is ${sum}`);
}

sumSquare(num);

// Есть массив [3, 5, 12, 9, 23, 93, 17]
// Отфильтровать его так, чтобы остались только те числа, которые больше 2 и меньше 20. И потом получить их сумму.
const arr = [3, 5, 12, 9, 23, 93, 17];

const arrFilter = arr => { 
    const filterArr = arr.filter(el => el > 2 && el < 20);
    const sum = filterArr.reduce((acc,item) => acc + item);

    return Array.isArray(arr) ? sum : 'Error is not an array';
}

console.log(arrFilter(arr));

// Дан массив [[1, 6, 3, '6'], [10, 15, 13, '10']]. Найти сумму элементов, которые являются числами и которые кратны двум
const list = [[1, 6, 3, '6'], [10, 15, 13, '10']];
const arrTransform  = arr => {

    const flatArr = arr.flat();
    const filteredData  = flatArr.filter(el => typeof el === 'number' && el % 2 === 0);
    const totalSum = filteredData.reduce((acc, item) => acc + item);
    
    return Array.isArray(arr) ? totalSum : 'Error is not an array';
}

console.log(arrTransform(list));

// Написать функцию, которая устанавливает новые свойства в объект.

const keys = prompt('Enter your key');
const value = prompt('Enter your value');

const addPropeties = (key,value,object) => typeof object === 'object' && !object.hasOwnProperty(key) ? 
    { ...object, [key]:value } : 'Уже есть';

const person = {name:'Vlad'};
const obj = addPropeties(keys,value,person);
console.log(obj);
