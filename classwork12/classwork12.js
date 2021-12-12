// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => {
        for (let r of response) {
            let div = document.createElement('div');
            let h1 = document.createElement('h1');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let btn = document.createElement('button');
            btn.innerText = 'Добавить в избранное'
            h1.innerHTML = `User ID: ${r.userId}`
            h2.innerHTML = `ID: ${r.id}`
            h3.innerHTML = `${r.title}`
            p.innerHTML = `${r.body}`
            div.append(h1,h2,h3,p,btn)
            document.body.append(div)
            let father = document.getElementById('father');
            father.appendChild(div)
            div.style.background = 'gold'
            div.style.display = 'flex';
            div.style.flexDirection = 'column';
            div.style.alignItems = 'center';
            div.style.marginTop = '20px';
            div.style.height = '350px';
            btn.style.height = '50px';
            father.style.display = 'flex';
            father.style.flexDirection = 'column';
            btn.style.background = 'teal';

            btn.addEventListener('click', function (){
                let favorites = []
                favorites.push(r.body)
                localStorage.setItem('comments',JSON.stringify(favorites))

            })








        }



    })