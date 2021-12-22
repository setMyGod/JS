let url = new URL(location.href);
let userID = url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users/' + userID)
    .then(response => response.json())
    .then(user => {
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
            document.body.append(father)
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
            document.body.append(postbutton)
            postbutton.onclick = function (){
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => response.json())
                        .then(post =>{
                                for (const i of post) {
                                        if(userID.id === post.userId){
                                                let pstdiv = document.createElement('div');
                                                pstdiv.innerText = i.title
                                                document.body.append(pstdiv)
                                                let psta = document.createElement('a');
                                                document.body.append(psta)
                                                psta.innerHTML = 'comments'
                                                psta.href = 'post.details.html'


                                               // for(let x of post){
                                               //         let psta = document.createElement('a');
                                               //         document.body.append(psta)
                                               //         psta.innerHTML = 'comments'
                                               //
                                               // }

                                        }
                                }

                        })
            }








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



