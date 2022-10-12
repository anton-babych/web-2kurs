fetch('https://dummyjson.com/posts?skip=1&limit=7')
    .then(res => res.json())
    .then(json => createComment(json.posts));

function createComment(data){
    data.forEach(({title, body}) => {
        const el = document.createElement('div');
        el.classList.add('bubble');
        el.innerHTML = `
            <h3 class="bubble__title">${title}</h3>
            <p class="bubble__text">${body}</p>
        `;
        document.querySelector(".comments").append(el);
    });
}
