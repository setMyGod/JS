
// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let d = document.getElementById('content')
console.log(d.innerText);
let d1 = document.getElementById('rules')
console.log(d1.innerText);
d.innerText = 'Simply text'
d1.innerText = 'I like JS'
let elements = document.body.children
for (i of elements){
 i.style.background = 'red'
}
let colortext = document.body.children
for (i of colortext){
 i.style.color = 'blue'
}
let all = document.getElementById('rules').classList
console.log(all);
let texcolor2 = document.getElementsByClassName('fc_rules')
for(i of texcolor2){
 i.style.color = '#fff' // сделал белым, для лучшей визуализации
}

