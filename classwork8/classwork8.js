//
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let group = document.getElementById('main_header')
group.classList.add('sep-2021')
let elementsbytag = document.getElementsByTagName('ul')
elementsbytag.style.width = '400px' // не отрабатывает
let allel = document.getElementsByClassName('linkList')
for (let i  of allel) {
    i.style.background = '50%'; // не отрабатывает
}
function addtext (text) {
  let elem = document.getElementsByClassName('listElement2')
    elem.innerText = text; // не отрабатывает

}
let licol = document.getElementsByTagName('li')
for(let i of licol){
    i.style.background = 'silver'// не отрабатывает

}
let aa = document.getElementsByTagName('a');
for (let i of aa) {
    i.classList.add('anchor')
}
let elema = document.getElementsByTagName('a')
for (let i of elema) {
    if (i.innerText === 'link3') {
        i.style.fontSize = '40px'
    }
}

let aa1 = document.getElementsByTagName('a')
for (let i  of aa1) {
    let classNew = i.innerText;
    i.classList.add(classNew)
}

let subheaderslist = document.getElementsByClassName('sub-header');
for (let i of subheaderslist) {
    i.style.background = prompt('eneter color pls')
}

let documentforsubheader = document.getElementsByClassName('sub-header');
for (const documentforsubheaderElement of documentforsubheader) {
    if(documentforsubheader.innerText === 'content 2 segment'){
        documentforsubheaderElement.style.color = prompt('color?')
    }
    
}
document.getElementsByClassName('content_1').innerText = prompt();

let pars = document.getElementsByTagName('p');
for (const par of pars) {
    par.style.padding = '20px'
}
let newdoc = document.getElementsByClassName('text2')

for (const newdocElement of newdoc) {
    newdoc.innerText = 'sep-2021';
}
