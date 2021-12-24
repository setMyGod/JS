let url = new URL(location.href);
let userID = url.searchParams.get('id');


fetch('https://jsonplaceholder.typicode.com/users/' + userID)
    .then(response => response.json())
    .then(user => {
        let superdiv = document.createElement('div')
        let father = document.createElement('div');
        let divuser1 = document.createElement('div');
        let divuser2 = document.createElement('div');
        let divuser3 = document.createElement('div');
        let divuser4 = document.createElement('div');
        let divuser5 = document.createElement('div');
        let divuser6 = document.createElement('div');
        let divuser7 = document.createElement('div');
        let divuser8 = document.createElement('div');
        let divuser9 = document.createElement('div');
        let divuser10 = document.createElement('div');
        let divuser11 = document.createElement('div');
        let divuser12 = document.createElement('div');
        document.body.append(superdiv)
        superdiv.append(father)
        superdiv.style.display = 'flex'
        superdiv.style.justifyContent = 'center'
        father.style.display = 'flex'
        father.style.justifyContent = 'space-between'
        father.style.alignItems = 'center'
        father.style.textAlign = 'center'
        father.style.paddingTop = '20px'
        father.style.border = '4px solid gold'
        father.style.boxSizing = 'border-box'
        father.style.borderRadius = '10px'
        father.style.width = '400px'
        father.append(divuser1,divuser2,divuser3,divuser4,divuser5,divuser6,divuser7,divuser8,divuser9,divuser10,divuser11,divuser12)
        divuser1.innerHTML = user.id
        divuser2.innerHTML = user.name
        divuser3.innerHTML = user.surname
        divuser4.innerHTML = user.email
        divuser5.innerHTML = JSON.stringify(user.address)
        father.style.display = 'flex'
        father.style.flexDirection = 'column'
        let postbutton = document.createElement('button');
        postbutton.style.marginTop = '20px'
        postbutton.innerHTML = 'post of current user'
        postbutton.style.width = '90%'
        postbutton.style.height = '30px'
        father.append(postbutton)

        postbutton.onclick = function (){
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(post =>{
                    for (const i of post) {
                        if(user.id === i.userId){
                            let divspisok = document.createElement('div');
                            document.body.append(divspisok)
                            let pstdiv = document.createElement('div');
                            pstdiv.innerText = i.title
                            let acom = document.createElement('a');
                            divspisok.append(pstdiv,acom)
                            acom.innerHTML = 'comments'
                            acom.href = 'post-details.html='+JSON.stringify(i)
                            divspisok.style.display = 'flex'
                            divspisok.style.alignItems = 'center'
                            divspisok.style.textAlign = 'center'
                            divspisok.style.border = '1px solid silver'
                            divspisok.style.flexDirection = 'column'
                            divspisok.style.width = '500px'
                            divspisok.style.height = '50px'
                            divspisok.style.marginLeft = '690px'
                            divspisok.style.marginTop = '20px'
                            divspisok.style.border = '2px solid blue'











                        }
                    }

                })
        }
        let divbody = document.createElement('did');
        document.body.append(divbody)
        divbody.append(divspisok)

    })



// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу
// post-details.html, которая имеет детальную информацию про текущий пост.
// а странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
//     user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
//     блоки с краткой информацией про post - в ряд по 5 объектов.
//     post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
//     Все без исключения элементы, который характеризируют user,post,comment  визуализировать,
//     так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)









