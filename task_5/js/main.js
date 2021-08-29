"use strict"
// Дан объект с городами и странами.
// Написать функцию getCity. Эта функция (getCity) должна вернуть новый массив, элементы которого будут преобразованы в данный формат: <Столица> - это <Страна>.
// Доступ к объекту может быть любым (через контекст, напрямую и т.д.)
// Можно использовать Object.entries метод )
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

function getCity(obj) {
    if (typeof obj === 'object') {

        const valueArr = Object.entries(obj);
        const newArr = valueArr.map(el => {
            return `${el[0]} - это ${el[1]}`
        });

        return newArr;

    } else {
        return 'Error';
    }
}

const result = getCity(citiesAndCountries);
console.log(result);


// Cоздать объект с названиями дней недели. Где ключами будут ru и en, a значением свойства ru будет массив с названиями дней недели на русском, а en - на английском.
// После написать функцию которая будет выводить в консоль название дня недели пользуясь выше созданным объектом (доступ к объекту можно получить напрямую).

// Все дни недели начинаются с 1 и заканичаются цифрой 7 (1- понедельник, 7 - воскресенье).

// Функция принимает в аргументы 2 параметра:
// lang - название языка дня недели
// day - число дня недели

const daysOfWeek = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getAge(day, lang) {

    const {
        [lang]: lan
    } = daysOfWeek;

    if (!lan || !(day > 0 && day < 8)) {
        return 'Error is not correct data'
    }

    const valueObj = [...lan];
    const findElem = valueObj.find((item, i) => {
        return ++i === day;
    });

    return findElem;
}

console.log(getAge(7, 'ru'));

// Написать универсальную функцию setProto, которая принимает в себя 2 аргумента(currentObj, protoObj).
// 

function setProto(currentObj, protoObj) {
    Object.setPrototypeOf(currentObj, protoObj);
}

const per1 = {
    name: 'Alex',
    work: function () {
        return `${this.name} can work`;
    }
}

const per2 = {
    name: 'Harry',
}

setProto(per2, per1);
console.log(per2);
console.log(per2.work());


const person = {
    setName(name) {
        this.name = name;
    },

    getName() {
        return this.name;
    },

    ageValidation(age) {
        return age > 18 ? age : `Error incorrect data`;
    },

    setAge(age) {
        this.age = this.ageValidation(age);
    },

    getAge() {
        return this.age;
    },

}

const person1 = Object.create(person);
console.log(person1);
person1.setName('Vlad');
console.log(person1.getName());
person1.setAge(19);
console.log(person1.getAge());
console.log('person1', person1);