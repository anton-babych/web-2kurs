import { animateGrid } from "./gridScrollAnim.js";

const gridParent = document.querySelector(".grid");

fetch("http://localhost:3000/cards")
    .then(data => data.json())
    .then(res => createProducts(res));

function createProducts(data){
    data.forEach(({id, name, color, image_link}) => {
        const el = document.createElement('div');
        el.classList.add('card');
        el.style.backgroundColor = `${color}`;

        const img = document.createElement('div');
        img.classList.add('card__img');
        img.style.backgroundImage = `url(${image_link})`;
        el.append(img);

        const namediv = document.createElement('div');
        namediv.classList.add('card__name');
        namediv.innerText = name;
        el.append(namediv);

        gridParent.append(el);
    });

    animateGrid();
}