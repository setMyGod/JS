// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ об'єкти. Застилізувати,
// за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
//  https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(respnse => {
        for (const i of respnse.slice(0,5)) {
            let div = document.createElement('div');
            document.body.append(div)
            div.style.height = '500px'
            div.style.width = '300px'
            div.style.flexDirection = 'column'
            div.style.background = 'silver'
            div.style.padding = '20px'
            div.style.display  = 'flex'
            div.style.border ='2px solid crimson'
            div.style.boxSizing ='border-box'

            let h1 = document.createElement('h1');
            h1.innerHTML = `UserID: ${i.userId}`
            let h2 = document.createElement('h2');
            h2.innerHTML = `id:${i.id}`
            let h3 = document.createElement("h3");
            h3.innerHTML = `${i.title}`
            let p = document.createElement('p');
            p.innerText = `${i.body}`
           let papa = document.getElementById('papa');
            papa.style.display = 'flex'
            papa.style.justifyContent = 'space-between'
            papa.style.paddingTop = '10px'
            papa.style.columnGap = '10px'

            papa.append(div)
            div.append(h1,h2,h3,p)
        }
    })

//     Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(info=>info.json())
.then(info=>{
    for (const e of info) {
        let div1 = document.createElement('div');
        let comh1 = document.createElement('h1');
        let comh2 = document.createElement('h2');
        let comh3 = document.createElement('h3');
        let comh4 = document.createElement('h4');
        let comp = document.createElement('p');
        document.body.append(div1)
        div1.append(comh1, comh2, comh3, comh4, comp);
        comh1.innerHTML = `PostID ${e.postId}`
        comh2.innerHTML = `id:${e.id}`
        comh3.innerHTML = `name: ${e.name}`
        comh4.innerHTML = `email: ${e.email}`
        comp.innerText = `${e.body}`
        let secondpapa = document.getElementById('secondpapa');
        secondpapa.append(div1)

        secondpapa.style.marginTop ='50px'
        secondpapa.style.columnGap = '20px';
        div1.style.height = '400px'
        div1.style.display = 'flex'
        div1.style.flexDirection = 'column'
        div1.style.boxSizing = 'border-box'
        div1.style.border = '2px solid silver'
        div1.style.background = 'teal'
        div1.style.color ='#fff'
        div1.style.marginTop = '20px'
        div1.style.alignItems = 'center'
        div1.style.textAlign = 'center'

    }
})