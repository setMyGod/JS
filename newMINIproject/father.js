// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users =>{
    for (const user of users) {
        let divid = document.createElement('div');
        let divname = document.createElement('div');
        let divflex = document.createElement('div');
        let link = document.createElement('a');
        divid.innerHTML = user.id
        divname.innerHTML = user.name
        link.href = 'user-details.html?id='+user.id
        link.innerHTML = 'Подробнее'
        document.body.append(divflex)
        divflex.append(divid,divname, link)
        divflex.style.display = 'flex'
        divflex.style.justifyContent = 'space-between'

    }
})
