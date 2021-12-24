let url = new URL(location.href);
let data = url.searchParams.get('data');
let parseData = JSON.parse(data);
fetch('https://jsonplaceholder.typicode.com/posts'+ parseData.id)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            if (post.id === comment.userId){
                let div = document.createElement('div');
                div.innerText = comment.body
                document.append(div)           }
            )

        }
    })
