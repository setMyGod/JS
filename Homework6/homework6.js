// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
let b = 'lorem ipsum';
let c =  'javascript is cool';
console.log(a.length, b.length, c.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

reg = (word1, word2 , word3) =>{
   document.write(`<div> ${word1.toUpperCase()}</div>`,`<div> ${word2.toUpperCase()}</div>`,`<div> ${word3.toUpperCase()}</div>`)
}
reg('hello world', 'lorem ipsum', 'javascript is cool')

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
reg1 = (word4, word5 , word6) =>{
    document.write(`<div> ${word4.toLowerCase()}</div>`,`<div> ${word5.toLowerCase()}</div>`,`<div> ${word6.toLowerCase()}</div>`)
}
reg1('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL')

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let grazb = ' dirty string   ';
console.log(grazb.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str = 'Каждый охотник желает знать';
let arr =str.split(" ");
console.log((arr));

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
oxotnuk =(str, length) =>{
    return (str.substr(0,7))
}
console.log(oxotnuk('Каждый охотник желает знать'));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let d = function (str){
    console.log(str.replaceAll(" ", "-", ))
}
d("HTML JavaScript PHP")

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

updown=(arg)=>{
    console.log(arg[0].toUpperCase() + arg.slice(1));

}
updown("hello")

// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
capitalizer = (str)=>{
    console.log(str.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' '));
}
capitalizer("hello my dear friend")



