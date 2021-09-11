const li = document.getElementsByClassName('li') as HTMLCollection;
const arrayLi = Array.from(li);
const sumBtn = document.getElementById('sum') as HTMLButtonElement;
const inp = document.getElementById('inp') as HTMLInputElement;

// 1.Реализовать Числа Фибоначчи двумя способами (рекурсия и цикл)
//Recursion
function fibonacci(num: number): number {
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(3));

//for loop
function fibon(nums: number): number [] {
    let fib: number [] = [0, 1];
    let data: number [] = [];

    for(let i = 2; i <= nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        data.push(fib[i]);
    }
    return data;
}

console.log(fibon(3));

//2.Рассчитать сумму натуральных чисел до n (2 решения - рекурсия и цикл)
function natulRow (n: number): number {
    let total: number = 0;

    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

console.log(natulRow(10));

const sum = (num:number): number => num > 0? num + sum(num - 1) : num;
console.log(sum(10));

// 3.Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//     Сделайте два варианта решения.
//     Используя setInterval.
//     Используя рекурсивный setTimeout.
function printNumbers(from: number, to: number): number{
    const id: number = window.setInterval(() => {
        if(from <= to){
            console.log(from++);
        }
    },1000);

    return id;
}

console.log(printNumbers(0, 5));

const printNum = (from: number, to: number): number => {
    const id:number = window.setTimeout( function Time() {
        if(from <= to){
            console.log(from++);
            setTimeout(Time,1000);
        }
    },1000);

    return id;
}

setTimeout(() => {
    printNum(0, 5);
},5000);

// 4.Нужно создать интервал, который выводит в консоль количество секунд, прошедших с момента запуска программы.
// "Прошло: 1 сек."
// "Прошло: 2 сек." ..... и так далее
// Допишите программу так, чтобы она останавливалась при достижении 5 секунд и надпись о пройденном времени больше не выводилась в консоль.
const tickFunction = (): number => {
    let tick: number = 0;
    const id: number = window.setInterval(() => {
        tick++;
        console.log(`Прошло: ${tick} секунд`);

        if(tick === 5){
            clearInterval(id);
        }
    },1000)
    return id;
}

setTimeout(() => {
    tickFunction();
},12000);

const sumValuesFromList = (): number => {
    let totalSum: number = 0;
    const resultArr: number [] = [];

    for(let li of arrayLi){
        const trigger = parseInt(li.innerHTML);

        if(!Number.isNaN(trigger)){
            resultArr.push(trigger);
            totalSum += trigger;
            inp.value = `${resultArr.join('+')} = ${totalSum}`;
        }
    }
    return totalSum;
}

sumBtn.addEventListener('click', sumValuesFromList);