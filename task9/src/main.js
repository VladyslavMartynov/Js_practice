var li = document.getElementsByClassName('li');
var arrayLi = Array.from(li);
var sumBtn = document.getElementById('sum');
var inp = document.getElementById('inp');
// 1.Реализовать Числа Фибоначчи двумя способами (рекурсия и цикл)
//Recursion
function fibonacci(num) {
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(3));
//for loop
function fibon(nums) {
    var fib = [0, 1];
    var data = [];
    for (var i = 2; i <= nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        data.push(fib[i]);
    }
    return data;
}
console.log(fibon(3));
//2.Рассчитать сумму натуральных чисел до n (2 решения - рекурсия и цикл)
function natulRow(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(natulRow(10));
var sum = function (num) { return num > 0 ? num + sum(num - 1) : num; };
console.log(sum(10));
// 3.Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//     Сделайте два варианта решения.
//     Используя setInterval.
//     Используя рекурсивный setTimeout.
function printNumbers(from, to) {
    var id = window.setInterval(function () {
        if (from <= to) {
            console.log(from++);
        }
    }, 1000);
    return id;
}
console.log(printNumbers(0, 5));
var printNum = function (from, to) {
    var id = window.setTimeout(function Time() {
        if (from <= to) {
            console.log(from++);
            setTimeout(Time, 1000);
        }
    }, 1000);
    return id;
};
setTimeout(function () {
    printNum(0, 5);
}, 5000);
// 4.Нужно создать интервал, который выводит в консоль количество секунд, прошедших с момента запуска программы.
// "Прошло: 1 сек."
// "Прошло: 2 сек." ..... и так далее
// Допишите программу так, чтобы она останавливалась при достижении 5 секунд и надпись о пройденном времени больше не выводилась в консоль.
var tickFunction = function () {
    var tick = 0;
    var id = window.setInterval(function () {
        tick++;
        console.log("\u041F\u0440\u043E\u0448\u043B\u043E: " + tick + " \u0441\u0435\u043A\u0443\u043D\u0434");
        if (tick === 5) {
            clearInterval(id);
        }
    }, 1000);
    return id;
};
setTimeout(function () {
    tickFunction();
}, 12000);
var sumValuesFromList = function () {
    var totalSum = 0;
    var resultArr = [];
    for (var _i = 0, arrayLi_1 = arrayLi; _i < arrayLi_1.length; _i++) {
        var li_1 = arrayLi_1[_i];
        var trigger = parseInt(li_1.innerHTML);
        if (!Number.isNaN(trigger)) {
            resultArr.push(trigger);
            totalSum += trigger;
            inp.value = resultArr.join('+') + " = " + totalSum;
        }
    }
    return totalSum;
};
sumBtn.addEventListener('click', sumValuesFromList);
