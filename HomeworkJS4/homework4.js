//1створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle( a, b) {
    s = a * b;
    console.log(s)
}
rectangle(20, 20)

//2.створити функцію яка обчислює та повертає площу кола з радіусом r

function circle(pi, r) {
    s = pi * r**2
    console.log(s)

}
circle(3.14, 12);

// 3.створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// 2*pi*R*(h+R)

function cylinder(r, h){
    s = 2*3.14*r*(r+h);
    console.log(s)
}
cylinder(10, 8)

//4.створити функцію яка приймає масив та виводить кожен його елемент

function massive (arr){
    for ( let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}



massive(["Hello world",14, 88, true]);

//5.створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph (a){

    document.write(`<p>${a}</p>`);


}
paragraph("Hello World")

//6.створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function elements(el){
    document.write(`<ul>
        <li>${el}</li>
        <li>${el}</li>
        <li>${el}</li>
                </ul>`)
}
elements("I like JS :)")

//7.створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulli  (arg1, arg2) {

    for (i = 0; i < arg2; i++) {
        document.write(`<ul>
            <li>${arg1}</li>
                        </ul>`)

    }
}
ulli("JS Developer", 3);

//8.створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function spisok(mass1){
    for (i = 0; i < mass1.length; i++){
        document.write(`<li>${mass1[i]}</li>`)
    }
}
spisok(["JS",true,14,"develorep",88]);

//9.створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let obj = [{id:1, name:"Vasya", age:22}, {id:2, name:"Nastya", age:21}, {id:3, name:"Petya", age: 33}];
function massive1 (obj) {

    for (i = 0; i<obj.length; i++) {
        document.write(`<div>${obj[i].id}. ${obj[i].name} - ${obj[i].age}</div>`)


    }
}
massive1(obj);

