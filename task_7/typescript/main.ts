const wrapper = document.getElementById('wrapper')!;
const holder = document.getElementById('holder')!;
const collection = document.getElementsByClassName('item') as HTMLCollection;

type nameArr = Array<string>;

// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.
const arr: nameArr = ['Vasya', 'Petya', 'Alexey'];

const removeUser = (arr: Array<string>, num: number): Array<string> =>
     arr.filter((el, i) => {
        return i !== num;
    });

console.log(removeUser(arr, 0));

// Повторите по данному по образцу (используя JS):
// Родительский div можно добавить просто в html файле

const createElem = (elem: string): HTMLElement => document.createElement(elem);

const appendElem = (elem: HTMLElement, targetElem: HTMLElement) => targetElem.append(elem);

const setAttrToElem = (elem: HTMLElement, name?: string, value?: Array<string>) =>
    elem.setAttribute(`${name}`, `${value}`);

const styleElem = (elem: HTMLElement, valueArr: Array<string>) =>
   setAttrToElem(elem,'style', valueArr);

const div = createElem('div');
const div2 = createElem('div');
const div3 = createElem('div');

setAttrToElem(div,'id',['box']);
setAttrToElem(div2,'id',['box2']);
setAttrToElem(div3,'id',['box3']);

appendElem(div, wrapper);
appendElem(div2, wrapper);
appendElem(div3, wrapper);

styleElem(wrapper,[`
    position: relative;
    max-width: 600px;
    min-height: 600px;
    margin: 0 auto;
   `]);

styleElem(div,[`
    background-color: lightcoral;
    width: 250px;
    height: 250px;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 5%
    `]);

styleElem(div2,[`
     background-color: cornflowerblue;
     width: 250px;
     height: 250px;
     position: absolute;
     z-index: 2;
     left: 28%;
     top: 28%;
 `]);

styleElem(div3,[`
    background-color: mediumaquamarine;
    width: 250px;
    height: 250px;
    position: absolute;
    z-index: 1;
    right: 0;
    top: 50%;
   `]);

// У вас есть следующий код:
// // index.html
//
//     <div class="holder">
//
//         </div>

const createHtmlCollection = (arr: Array<string>, attr: string, val: string, target: HTMLElement) => {
    arr.forEach((el) => {
        const elem = createElem(el);
        elem.setAttribute(`${attr}`,`${val}`);

        if(target as HTMLElement){
            (target as HTMLElement).append(elem);
        } else {
            `Error ${target} invalid property value!`;
        }
    });
}

const innerTextCollection = (collection: HTMLCollection, i:number = 0) => {
    for (const elem of collection) {
        elem.innerHTML = `${(i += 1)}`;
        console.log(elem);
    }
}

const array: Array<string> = ['div', 'div', 'div', 'div', 'div', 'div', 'div', 'div'];
createHtmlCollection(array, 'class', 'item', holder);

innerTextCollection(collection);

styleElem(holder,[`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: 400px;
    border: 2px solid black;
    margin: 20px auto;
    border-radius: 20% 20% 0 0;
`]);

// С помощью стилей привести блоки в такой вид (в стилях только флекс)
















