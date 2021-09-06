var wrapper = document.getElementById('wrapper');
var holder = document.getElementById('holder');
var collection = document.getElementsByClassName('item');
// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром.
var arr = ['Vasya', 'Petya', 'Alexey'];
var removeUser = function (arr, num) {
    return arr.filter(function (el, i) {
        return i !== num;
    });
};
console.log(removeUser(arr, 0));
// Повторите по данному по образцу (используя JS):
// Родительский div можно добавить просто в html файле
var createElem = function (elem) { return document.createElement(elem); };
var appendElem = function (elem, targetElem) { return targetElem.append(elem); };
var setAttrToElem = function (elem, name, value) {
    return elem.setAttribute("" + name, "" + value);
};
var styleElem = function (elem, valueArr) {
    return setAttrToElem(elem, 'style', valueArr);
};
var div = createElem('div');
var div2 = createElem('div');
var div3 = createElem('div');
setAttrToElem(div, 'id', ['box']);
setAttrToElem(div2, 'id', ['box2']);
setAttrToElem(div3, 'id', ['box3']);
appendElem(div, wrapper);
appendElem(div2, wrapper);
appendElem(div3, wrapper);
styleElem(wrapper, ["\n    position: relative;\n    max-width: 600px;\n    min-height: 600px;\n    margin: 0 auto;\n   "]);
styleElem(div, ["\n    background-color: lightcoral;\n    width: 250px;\n    height: 250px;\n    position: absolute;\n    z-index: 1;\n    left: 0;\n    top: 5%\n    "]);
styleElem(div2, ["\n     background-color: cornflowerblue;\n     width: 250px;\n     height: 250px;\n     position: absolute;\n     z-index: 2;\n     left: 28%;\n     top: 28%;\n "]);
styleElem(div3, ["\n    background-color: mediumaquamarine;\n    width: 250px;\n    height: 250px;\n    position: absolute;\n    z-index: 1;\n    right: 0;\n    top: 50%;\n   "]);
// У вас есть следующий код:
// // index.html
//
//     <div class="holder">
//
//         </div>
var createHtmlCollection = function (arr, attr, val, target) {
    arr.forEach(function (el) {
        var elem = createElem(el);
        elem.setAttribute("" + attr, "" + val);
        if (target) {
            target.append(elem);
        }
        else {
            "Error " + target + " invalid property value!";
        }
    });
};
var innerTextCollection = function (collection, i) {
    if (i === void 0) { i = 0; }
    for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
        var elem = collection_1[_i];
        elem.innerHTML = "" + (i += 1);
        console.log(elem);
    }
};
var array = ['div', 'div', 'div', 'div', 'div'];
createHtmlCollection(array, 'class', 'item', holder);
innerTextCollection(collection);
styleElem(holder, ["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    max-width: 400px;\n    border: 2px solid black;\n    margin: 20px auto;\n    border-radius: 20% 20% 0 0;\n"]);
// С помощью стилей привести блоки в такой вид (в стилях только флекс)
