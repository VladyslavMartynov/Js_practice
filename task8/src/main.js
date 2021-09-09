// 1 ) Создайте элемент 'p', при клике на котором появляется картинка размером 100px
// При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px
// При клике на картинке она должна исчезать
var p = document.createElement('p');
var img = document.getElementById('img');
var wrapper = document.getElementById('wrapper');
var inputVal = document.getElementById('inputVal');
var btn = document.getElementById('btn');
var invisibleBtn = document.getElementById('invisibleBtn');
var spanText = document.getElementById('spantext');
var box = document.getElementById('box');
var inpCircle = document.getElementById('inpCircle');
var btnCircle = document.getElementById('btnCircle');
var circle = document.getElementById('circle');
var WRAP_STYLE = "\n    max-width: 900px;\n    width: 100%;\n    margin: 0 auto;\n    margin-bottom: 20px;\n";
var P_STYLE = "display: none;";
var ZOOM_IMG = "\n    width: 200px;\n    cursor: pointer;\n    transition: 1s;\n    border: 1px solid black;\n";
var IMG_STYLE = "\n    cursor: pointer;\n    display: inline-block;\n    margin-top: 50px;\n    width: 100px;\n    height: 100px;\n    border: 1px solid black;\n    transition: 1s;\n";
var BTN_STYLE = "\n    width: 50px;\n    height: 20px;\n    display: inline-block;\n    border: 1px solid black;\n    background-color: green;\n    color: white;\n    cursor: pointer;\n    text-align: center;\n";
var INVIS_BTN_STYLE = "\n    width: 70px;\n    height: 20px;\n    display: inline-block;\n    border: 1px solid black;\n    background-color: purple;\n    color: white;\n    cursor: pointer;\n    text-align: center;\n";
var BOX_STYLE = "\n    max-width: 900px;\n    width: 100%;\n    margin: 0 auto;\n    position: relative;\n    \n";
var CIRCLE_BTN_STYLE = "\n    padding: 5px 30px;\n    text-align: center;\n    position: absolute;\n    cursor: pointer;\n    background-color: #deb887;\n    color: black;\n    text-decoration: none;\n    border-radius: 10px;\n    margin-left: 10px;\n    margin-top: -4px;\n";
var CIRCLE_MOVE_STYLE = "\n  position: relative;\n  width: 100px;\n  height: 100px;\n  display: inline-block;\n  border-radius: 50%;\n  background-color: red;\n  cursor: pointer;\n  margin-top: 10px;\n  transition: 3s;\n  \n  \n";
var CIRCLE_STYLE = "\n    width: 100px;\n    height: 100px;\n    display: inline-block;\n    border-radius: 50%;\n    background-color: red;\n    cursor: pointer;\n    margin-top: 10px;\n";
btn.setAttribute('style', BTN_STYLE);
btn.innerText = "Click";
invisibleBtn.setAttribute('style', INVIS_BTN_STYLE);
invisibleBtn.innerText = "Invisible";
box.setAttribute('style', BOX_STYLE);
// inpCircle.setAttribute('style', CIRCLE_INP_STYLE);
btnCircle.setAttribute('style', CIRCLE_BTN_STYLE);
circle.setAttribute('style', CIRCLE_STYLE);
wrapper.setAttribute('style', WRAP_STYLE);
p.innerText = 'Click me!';
p.style.cursor = 'pointer';
wrapper.prepend(p);
wrapper.append(img);
var eventP = function () {
    img.setAttribute('src', 'images/Patrik.jfif');
    img.setAttribute('style', IMG_STYLE);
    p.setAttribute('style', P_STYLE);
};
var imgZoom = function () {
    img.setAttribute('style', ZOOM_IMG);
};
var imgNoZoom = function () {
    img.setAttribute('style', IMG_STYLE);
};
var imgDisappear = function () {
    img.remove();
};
p.addEventListener('click', eventP);
img.addEventListener('mouseover', imgZoom);
img.addEventListener('mouseout', imgNoZoom);
img.addEventListener('click', imgDisappear);
// Дан массив с числами.
// Найдите сумму последних N элементов до первого нуля с конца.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.
var array = [1, 2, 3, 0, 4, 5, 6];
var trigger = 0;
var result = array.reduceRight(function (acc, item) {
    if (item === trigger) {
        trigger = -1;
        return acc;
    }
    else if (trigger !== -1) {
        return acc + item;
    }
    else {
        return acc;
    }
});
console.log(result);
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
var arr = [1, 2, 3, 4, 5, 6];
var num = 0;
var resultArr = arr.reduce(function (acc, item) {
    if (acc >= 10) {
        return acc;
    }
    else {
        num++;
        return acc + item;
    }
}, 0);
console.log(num);
//Есть инпут, в который что-то вводим. Рядом с инпутом есть кнопка. По нажатию на кнопку выводим в консоль то, что вписали в инпут.
// const getValue = (elem: HTMLInputElement) => {
//     alert(elem.value);
// }
var handleInp = function () {
    alert(inputVal.value);
};
btn.addEventListener('click', handleInp);
//Добавьте JavaScript к кнопке button, чтобы при нажатии элемент
// исчезал.
var eventText = function () {
    spanText.innerText = "";
};
invisibleBtn.addEventListener('click', eventText);
var moveCircle = function (elem, value) {
    elem.setAttribute('style', CIRCLE_MOVE_STYLE + ";left:" + value + "px;");
};
var validateInput = function (elem) {
    var trigger = Number.parseInt(elem.value);
    if (!Number.isNaN(trigger)) {
        if (trigger < 600) {
            moveCircle(circle, trigger);
        }
        else {
            elem.value = 'Error';
        }
    }
    else {
        elem.value = "";
    }
};
var handlePx = function () {
    validateInput(inpCircle);
};
btnCircle.addEventListener('click', handlePx);
