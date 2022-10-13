import { itemDatas } from "./itemDatas.js";
import { addShoppingCartItem } from "./shoppingCart.js";

export function initGridItems(){
    const grid = document.querySelector('.grid');

    document.querySelector(".container");
    
    for(let itemData of itemDatas){
        let gridItem = document.createElement("div");
        gridItem.classList.add("item");
        gridItem.dataset.id = itemData.id;
        grid.append(gridItem);
    
        let gridItemImage = document.createElement("img");
        gridItemImage.src = itemData.imgSrc;
        gridItemImage.classList.add("item__image");
        gridItem.append(gridItemImage);
    
        let gridItemName = document.createElement("h5");
        gridItemName.textContent = itemData.name;
        gridItemName.classList.add("item__name");
        gridItem.append(gridItemName);
    
        let gridItemQuantity = document.createElement("h5");
        gridItemQuantity.textContent = `В наявності: ${itemData.quantity}`;
        gridItemQuantity.classList.add("item__quantity");
        gridItem.append(gridItemQuantity);
    
        let gridItemButton = document.createElement("a");
        gridItemButton.innerHTML = `
            <p class="btn__txt">Додати в кошик</p>
        `;
        //gridItemButton.textContent = `Додати в кошик`;
        //gridItemButton.src = "#";
        gridItemButton.classList.add("btn", "btn_default");
        gridItem.append(gridItemButton);
        
       

        gridItemButton.addEventListener('click', (el) =>{
            addShoppingCartItem(itemData);
            
            gsap.to(gridItem, {opacity: 0, duration: 0.3,
            onComplete: () => {
                setTimeout(()=>{
                    gridItem.remove();
                }, 500); 
            }
            });
        });
    
        //gridItem.addEventListener('click', ev => {
        //    let target = ev.target;
        //    
        //    //if (target.classList.contains("item")) {
        //    //    target.classList.toggle("item--opened");
        //    //}
//
        //    let items = document.querySelectorAll(".item");
    //
        //    for(let itm of items){
        //        console.log(itm)
        //        if(itm.dataset.id != target.dataset.id)
        //        {
        //            gsap.to(itm, {opacity: 0.1, duration: 0.5});
        //        }
        //    }
//
        //    gsap.to(target, {width: "*=2", duration: 0.5});

    
            
        //if(gridItem.classList.contains("item--opened")){
        //    gridItem.classList.remove("item--opened");
        //    let gridItemDesription = gridItem.querySelector('.item__description');
        //    gridItemDesription.remove();
    //
        //}else if(!gridItem.classList.contains("item--opened")){
        //    gridItem.classList.add("item--opened");
        //    let gridItemDesription = document.createElement("p");
        //    gridItemDesription.textContent = "Капсули по 250 мг № 6, № 10 у блістерах";
        //    gridItemDesription.classList.add("item__description");
        //    gridItem.append(gridItemDesription);
        //}
        //});
    }
}

//barba.hooks.once((data) => {
//    console.log("grid check");
//    initGridItems();
//});

//initGridItems();