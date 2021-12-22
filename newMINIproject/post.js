let url = new URL(location.href);
let users = url.searchParams.get('id');
fetch(' https://jsonplaceholder.typicode.com/user.id/posts')
        .then(response => response.json())
        .then(post =>{


        })

