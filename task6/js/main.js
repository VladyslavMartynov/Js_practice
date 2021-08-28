"use strict"
// Создать функцию конструктор Animal c аргументами name, age, color. Написать логику для того, чтобы функцию можно было вызывать как с, так и без new:
// При вызове без new новый обьект все равно должен создаться

function Animal(name, age, colour) {

    if(!new.target){
        return new Animal(name, age, colour);
    }

    this.name = name;
    this.age = age;
    this.colour = colour;
}

const animal = Animal('Name', 'Age', 'Colour');
console.log(animal);

// Создайте функцию-конструктор Calculator, который создаёт объекты с такими методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// setAction() запрашивает действие при помощи prompt, которые мы хотим сделать (+, -, / и т.д)
// doAction() выполняет действие, которое юзер ввел (будет вызывать в себя методы sum, mul, min и т.д)
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// min() возвращает разницу введённых свойств.
// другие методы можете добавит если хотите (метод для квадратного корня и т.д.)

function Calculator() {

}

Calculator.prototype.read = function() {
    const val1 = +(prompt('Enter your 1 number'));
    const val2 = +(prompt('Enter your 2 number'));
    this.first = val1;
    this.second = val2;
}

Calculator.prototype.setAction = function() {
    const action = prompt('Enter a math operation');
    this.action = action;
}

Calculator.prototype.doAction = function() {
        switch(this.action){
        case '+':
            this.sum();
            break;

        case '-':
            this.min();
            break;

        case '/':
            this.divide();
            break;

        case '*':
            this.mul();
            break;

        case '**':
            this.pow();
            break;
    }
}

Calculator.prototype.sum = function() {
    this.sum = this.first + this.second;
}

Calculator.prototype.min = function() {
    this.min = this.first - this.second;
}

Calculator.prototype.mul = function() {
    this.mul = this.first * this.second;
}

Calculator.prototype.divide = function() {
    this.divide = this.first / this.second;
}

Calculator.prototype.pow = function() {
    this.pow = this.first ** this.second;
}

const calculator = new Calculator();
calculator.read();
console.log(calculator);
calculator.setAction();
calculator.doAction();
console.log(calculator);

// Создать функцию конструктор Nums, которая принимает бесконечное множество аргументов, и они записываются в свойство args в виде массива
// Добавить в прототип для всех объектов, которые создадим от конструктора Nums, 2 метода:

// метод getSum должен вернуть сумму всех элементов (которые только целые числа) массива args
// метод myFilterReverse должен отфильтровать массив и оставить только целые числа и развернуть массив (было [1, 2, 3] -> стало [3, 2, 1])
// Метод .reverse использовать нельзя :)

// только целые числа -> Number.isInteger(1); // true Number.IsInteger(1.2); // false

function Nums(...args){
    this.args = [...args];
}

Nums.prototype.getSum = function() {
    const arr = this.filter();
    const result = arr.reduce((acc, item) => acc + item);
    return result;
}

Nums.prototype.filterReverse = function() {
    const arr = this.filter();
    const reverseArr = arr.map((item, i) => {
        return arr[arr.length - i - 1];
    });
    return reverseArr;
}

Nums.prototype.filter = function() {
    const filterArr = this.args.filter(el => {
        return Number.isInteger(el); 
    });

    return filterArr;
}

const nums = new Nums(2.6, 1, 2, 3, null, [], {});
console.log(nums.getSum());
console.log(nums.filterReverse());

// Есть массив [1, 1, 2, 2, 3]
// Создать свой метод getUnique для любых массивов, который отфильтрует массив и оставит в нем только уникальные значения
// Подсказка: чтобы было легче почитайте про метод .includes()

const arr = [1, 1, 2, 2, 3];
function getUnique(arr){
    return Array.isArray(arr) ? 
    [...new Set(arr)] : `Error ${arr} is not correct!`;
}

console.log(getUnique(arr));

// 5* Есть объект {a: 1, b: 2, c: 3, d: false, e: 0}; Нужно создать 2 метода для любых объектов:
// метод getKeySum, который найдет сумму значений всех ключей, которые true.
// метод reversKey который поменяет местави key и value (ключ и значение)
// Пример Был объект {a: 1, b: 2}.reversKey() -> стало {1: 'b', 2: 'a'}

const obj = {
    a: 1, 
    b: 2, 
    c: 3, 
    d: false, 
    e: 0,

    getKeySum(){
        const filter = Object.values(this).filter(el => el && typeof el !== 'function');
        const totalsum = filter.reduce((acc, item) => acc + item);
        return totalsum;
    },

    reverseKey(){
        
        const newObj = Object.keys(this)
            .filter(el => typeof this[el] !== 'function')
        
            .map(el => {
                return {[this[el]]: el};
            });

        return newObj.reduce((acc, el) => {
            return {...acc , ...el};
        });

    }
}

console.log(obj.getKeySum());
console.log(obj.reverseKey());



