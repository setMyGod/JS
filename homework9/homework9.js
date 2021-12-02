
//
// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


let div = document.createElement('div')
document.body.appendChild(div)
div.innerText = 'Hello World'
console.log(div);
div.classList.add('wrap','collapse', 'alpha', 'beta')
let wr = document.getElementsByClassName('wrap');
for (i of wr){
    i.style.background = 'silver'
}
let coll = document.getElementsByClassName('collapse')
for (i of coll){
    i.style.color = 'red'
}
let alph = document.getElementsByClassName('alpha')
for (i of alph){
    i.style.fontSize = '100px'
}
document.body.appendChild(div)

let divclone = div.cloneNode(true);
document.body.appendChild(divclone)
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let menu = document.getElementsByClassName('menu')[0];
// let li = document.createElement('li');
// let li1 = li.cloneNode(true);
// let li2 = li.cloneNode(true);
// let li3 = li.cloneNode(true);
//
// menu.append(li,li1,li2,li3)
// li.innerText = 'Main'
// li1.innerText = 'Products'
// li2.innerText = 'About us'
// li3.innerText = 'Contacts'
let menu = document.getElementsByClassName('menu')[0];
let items =  ['Main','Products','About us','Contacts']
for(i of items){
    let li = document.createElement('li');
    li.innerText = i;
    menu.append(li)
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for(i of coursesAndDurationArray){
    let block = document.createElement('div');
    coursesAndDurationArray.title.append(div)
    coursesAndDurationArray.style.append(div)


}