//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться
// на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let input1 = document.getElementById("one")
let input2 = document.getElementById("two")
let input3 = document.getElementById("three")
let input4 = document.getElementById("four")

let button = document.querySelector("button")

button.addEventListener('click',function (){
        console.log(input1.value)
        console.log(input2.value)
        console.log(input3.value)
        console.log(input4.value)

    }
)

// - Сворити масив не цензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// ______________________________________________________
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let words = ['bitch','fuck','pedro', 'gomes']
let inp = document.createElement('input');
let but = document.createElement('button');
but.innerHTML = 'Включить цензуру'
document.body.append(inp,but);

but.addEventListener('click',function (){
   let val = inp.value;
   for(i of words){
       if( i === val){
           alert('Ahtung!')

       }

   }
})
// не получилось добавить елс иф или елс, что бы иметь возможность выводить сообщение о том что введеные
// слова нормальные, при добавлении ретерна, отрабатывает только первое слово в массиве, в другом случае мы получаем
// алерт повторяющийся много раз



