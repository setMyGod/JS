// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
//     чтобы при клике на кнопку исчезал элемент с id="text".

let h1 = document.createElement('h1');
document.body.append(h1)
h1.style.color = 'green'
h1.innerText = 'I Like JS'
h1.classList.add('text')


let button = document.getElementById('delete');
button.style.color = 'gray'
button.onclick = function (){
    h1.remove()
}

    // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let hide = document.getElementById(' del');
hide.onclick = function (){
    hide.remove()
}

// Cтворити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.

let elementById = document.getElementById('newbut');
elementById.onclick = function () {

    let age = document.getElementById('age').value;
    if (+age < 18){
        alert('Подрости малыш')
    }

    else {
        alert('Добро пожаловать')
    }
};

// - Создайте меню, которое раскрывается/сворачивается при клике



let div = document.createElement('div');
let btn = document.createElement('BUTTON')
document.body.append(div)
document.body.append(btn)
div.appendChild(btn)
btn.innerText = "Расскрывающийся список"
let img = document.createElement('img');
div.appendChild(img);


btn.onclick = function (){
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT013rP8t8LrP5IIt_QCxWXn1MAT673yYgrCw&usqp=CAU"


}

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

let lor  = [{title:'JS', body:'Super language'},{title:'Python', body:'best for back end'}]

let comdiv = document.createElement('div');
for ( i  of lor){
    let div1 = document.createElement('div');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let btn1 = document.createElement('BUTTON')
    let hr = document.createElement('hr');
    h2.innerText = i.title
    p1.innerHTML = i.body
    btn1.innerHTML = 'Свернуть'

    btn1.onclick = function (){
       p1.style.display= 'none';
    }
    div1.append(h2, p1, btn1);
    comdiv.append(div1, hr)


}
document.body.appendChild(comdiv)





