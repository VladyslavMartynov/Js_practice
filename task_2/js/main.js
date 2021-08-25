"use strict"
//hw1 Есть массив ['Капуста', 'Репа', 'Редиска', 'Морковка']. Надо вывести в консоль строку 'Капуста | Репа | Редиска | Морковка';
const arr = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const arrayToString = array => Array.isArray(array) ? array.join('|') : 'It is not an array';

const newArr = arrayToString(arr);
console.log(newArr);

//hw2 Есть строка 'Вася;Петя;Вова;Олег'. Используя стандартные методы строк получить массив их имен;
const str = 'Вася,Петя,Вова,Олег';

const stringToArray = str => typeof str === 'string' ? str.split(',') : 'It is not a string';

const newStr = stringToArray(str);
console.log(newStr);

//hw3 Напишите функцию hello2(), которая при вызове будет принимать переменную (в аргументы) name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
// В случае отсутствующего аргумента выводить «Привет, гость»
//По идеи работает даже без доп проверки для name
const hello2 = name =>  name  ? `Hello ${name}`: `Hello guest`;

console.log(hello2('Vlad'));
console.log(hello2());

// Hw 4 Есть массив ['яблоко', 'ананас', 'груша']
// Привести каждый элемент массива в верхний регистр (сделать все слово большими буквами) и получить результат (новый массив) в новую переменную.
const fruit = ['яблоко', 'ананас', 'груша'];
const fruitoUppercase = arr => arr.join(',').toUpperCase().split(',');

const fruitsInUpperCase = fruitoUppercase(fruit);
console.log(fruitsInUpperCase);

//hw5 Написать функцию addOneForAll, которая может принять неограниченное кол-во аргументов.
// Добавить к каждому аргументу 1 и вернуть новый массив с новыми значениями.
// Пример:
// передал в массив такие числа - 1, 2, 3, 4
// функция добавляет к каждму числу + 1
// функция возвращает новый массив, в котором новые значения

const addOneForAll = (...param) => param.map(el => ++el);

const num = addOneForAll(1,2,3,4);
console.log(num);

// hw6 Написать функцию getSum, которая может принять неограниченное кол-во аргументов и возвращает их сумму.

const getSum = (...param) => param.reduce( (acc,item) => acc + item);

const val = getSum(1,2,3,4,5);
console.log(val);

// hw7
// Есть массив [1, 'hello', 2, 3, 4, '5', '6', 7, null]. Отфильтровать массив так, чтобы остались только числа. Сделать можно любым способом из того, что учили.

const list = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

const arrFilter = arr => Array.isArray(arr) ? arr.filter(el => typeof el === 'number'): 'Error it is not an array';

const newList = arrFilter(list);
console.log(newList);

// HW8:
// Написать функцию arrayTesting, которая принимает в себя любой массив (в аргументы)
// функция проверяет есть ли в массиве хоть одно true значение
// и если оно есть, то возвращаем из функции строку 'Нашли true значение', если его нет - 'Ничего нет'
const falsyList = [0, false, null];
const newFalsyList = [0, false, null,1,'Hello'];

const arrayTesting = arr => {
    if(Array.isArray(arr)){
        return  arr.some(el => el) ? 'Нашли true значение':'Ничего нет';
    }
    else{
        return 'Error it is not an array';
    }
}
console.log(arrayTesting(newFalsyList));
console.log(arrayTesting(falsyList));