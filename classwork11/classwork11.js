// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні ' +
// на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];



for (let i of users) {
    let div = document.createElement('div');
    let btn = document.createElement('button');

    btn.innerText = 'Добавить в избранное'
    div.innerText = JSON.stringify(i)

    btn.onclick = function (){
        let favorites = JSON.parse(localStorage.getItem('favorites'))|| [];
        favorites.push(i)
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    document.body.append(div,btn)
}

// for (let i of users) {
//     let div = document.createElement('div');
//     let btn = document.createElement('button');
//     document.body.append(div,btn)
//     btn.innerText = 'Добавить в избранное'
//     div.innerText = JSON.stringify(i)
//
//     btn.addEventListener('click', function (){
//         favorites = []
//         favorites.push(i)
//         localStorage.setItem('favorites', JSON.stringify(favorites));
//
//
//     })
//
// }