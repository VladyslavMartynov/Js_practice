// 1 ) Создайте элемент 'p', при клике на котором появляется картинка размером 100px
// При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px
// При клике на картинке она должна исчезать
const p = document.createElement('p');
const img = document.getElementById('img')!;
const wrapper = document.getElementById('wrapper')!;
const inputVal = document.getElementById('inputVal') as HTMLInputElement;
const btn = document.getElementById('btn')!;
const invisibleBtn = document.getElementById('invisibleBtn')!;
const spanText = document.getElementById('spantext')!;
const box = document.getElementById('box')!;
const inpCircle = document.getElementById('inpCircle') as HTMLInputElement;
const btnCircle = document.getElementById('btnCircle')!;
const circle = document.getElementById('circle')!;

const WRAP_STYLE = `
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
`;
const P_STYLE = `display: none;`;
const ZOOM_IMG = `
    width: 200px;
    cursor: pointer;
    transition: 1s;
    border: 1px solid black;
`;
const IMG_STYLE = `
    cursor: pointer;
    display: inline-block;
    margin-top: 50px;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    transition: 1s;
`;

const BTN_STYLE = `
    width: 50px;
    height: 20px;
    display: inline-block;
    border: 1px solid black;
    background-color: green;
    color: white;
    cursor: pointer;
    text-align: center;
`;

const INVIS_BTN_STYLE = `
    width: 70px;
    height: 20px;
    display: inline-block;
    border: 1px solid black;
    background-color: purple;
    color: white;
    cursor: pointer;
    text-align: center;
`;
const BOX_STYLE = `
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    position: relative;
`;
const CIRCLE_BTN_STYLE = `
    padding: 5px 30px;
    text-align: center;
    position: absolute;
    cursor: pointer;
    background-color: #deb887;
    color: black;
    text-decoration: none;
    border-radius: 10px;
    margin-left: 10px;
    margin-top: -4px;
    border: none;
`;
const CIRCLE_MOVE_STYLE = `
  position: relative;
  width: 100px;
  height: 100px;
  display: inline-block;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
  margin-top: 10px;
  transition: 3s;
`;
const CIRCLE_STYLE = `
    width: 100px;
    height: 100px;
    position: relative;
    display: inline-block;
    border-radius: 50%;
    background-color: red;
    cursor: pointer;
    margin-top: 10px;
    transition: 2s;
    left: 0;
`;

btn.setAttribute('style', BTN_STYLE);
btn.innerText = "Click";

invisibleBtn.setAttribute('style',INVIS_BTN_STYLE);
invisibleBtn.innerText = "Invisible";

box.setAttribute('style',BOX_STYLE);
btnCircle.setAttribute('style', CIRCLE_BTN_STYLE);
circle.setAttribute('style', CIRCLE_STYLE);

wrapper.setAttribute('style', WRAP_STYLE);
p.innerText = 'Click me!';
p.style.cursor = 'pointer';

wrapper.prepend(p);
wrapper.append(img);

const eventP = (): void => {
    img.setAttribute('src','images/Patrik.jfif');
    img.setAttribute('style', IMG_STYLE);
    p.setAttribute('style', P_STYLE);
}

const imgZoom = (): void => {
    img.setAttribute('style', ZOOM_IMG);
}

const imgNoZoom = (): void => {
    img.setAttribute('style', IMG_STYLE);
}

const imgDisappear = (): void => {
    img.remove();
}

p.addEventListener('click',eventP);
img.addEventListener('mouseover', imgZoom);
img.addEventListener('mouseout', imgNoZoom);
img.addEventListener('click', imgDisappear);
// Дан массив с числами.
// Найдите сумму последних N элементов до первого нуля с конца.
// Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.
const array: number [] = [1, 2, 3, 0, 4, 5, 6];
let trigger: number = 0;
const result: number = array.reduceRight((acc, item) => {
    if(item === trigger) {
        trigger = -1;
         return acc;
    } else if(trigger !== -1) {
        return acc + item;
    } else {
        return acc;
    }
});
console.log(result);
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
const arr: number [] = [1, 2, 3, 4, 5, 6];
let num: number = 0;
let resultArr: number = arr.reduce((acc, item) => {
    if(acc >= 10){
        return acc;
    } else {
        num++;
        return acc + item;
    }
},0)

console.log(num);
//Есть инпут, в который что-то вводим. Рядом с инпутом есть кнопка. По нажатию на кнопку выводим в консоль то, что вписали в инпут.
// const getValue = (elem: HTMLInputElement) => {
//     alert(elem.value);
// }
const handleInp = (): void => {
    alert(inputVal.value);
}
// Привяжите всем ссылкам в документе событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.

const link = document.getElementsByTagName('a') as HTMLCollection;
const href = (event: any): void => {
	event.target.innerText = `${event.target.innerText} (${event.target.href})`;
};

for (let i = 0; i < link.length; i++){
    link[i].addEventListener('mouseover', href);
}

btn.addEventListener('click', handleInp);
//Добавьте JavaScript к кнопке button, чтобы при нажатии элемент
// исчезал.
const eventText = (): void => {
    spanText.innerText =``;
}

invisibleBtn.addEventListener('click', eventText);

const moveCircle = (elem: HTMLElement, value: number): void => {
    elem.setAttribute('style',`${CIRCLE_MOVE_STYLE};left:${value}px;`);
}

const basicPosition = () => {
    setTimeout(() => {
        circle.setAttribute('style', CIRCLE_STYLE);
    },3000);
}

const validateInput = (elem: HTMLInputElement): void => {
    const trigger = Number.parseInt(elem.value);
    if(!Number.isNaN(trigger)){
        if(trigger < 600){
            moveCircle(circle, trigger);
            basicPosition();
        } else {
            elem.value = 'Error';
        }

    } else {
        elem.value = ``;
    }
}

const handlePx = (): void => {
    validateInput(inpCircle);
}

btnCircle.addEventListener('click', handlePx);