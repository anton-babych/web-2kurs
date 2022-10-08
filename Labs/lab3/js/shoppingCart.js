const shopHolder = document.querySelector(".cart-holder");

export function addShoppingCartItem(itemData){
    let shopItem = document.createElement("div");
    shopItem.classList.add("shop-item");
    shopItem.dataset.id = itemData.id;
    shopHolder.append(shopItem);

    let gridItemImage = document.createElement("img");
    gridItemImage.src = itemData.imgSrc;
    gridItemImage.classList.add("shop-item__img");
    shopItem.append(gridItemImage);

    let gridItemName = document.createElement("h5");
    gridItemName.textContent = itemData.name;
    gridItemName.classList.add("shop-item__name");
    shopItem.append(gridItemName);

    //let gridItemQuantity = document.createElement("h5");
    //gridItemQuantity.textContent = `В наявності: ${itemData.quantity}`;
    //gridItemQuantity.classList.add("shop-item__quantity");
    //shopItem.append(gridItemQuantity);

    let content = `<input class="shop-item__input" type="number" value="1" min="1" max="${itemData.quantity}">`;

    let gridItemInput = document.createElement("div");
    gridItemInput.innerHTML = content;
    gridItemInput.addEventListener('input', function (evt) {
        updateTotal();
    });
    //gridItemQuantity.classList.add("shop-item__quantity");
    shopItem.append(gridItemInput);

    updateTotal();
}

let totalValue = document.querySelector(".sidebar-total__value");

function updateTotal(){
    let num = 0;
    for(let inp of document.querySelectorAll(".shop-item__input")){
        num += +inp.value;
    }
    totalValue.textContent = num;
}
