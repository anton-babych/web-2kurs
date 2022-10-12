import {moveCircles, stopCircles} from './movingCircles.js';
import {initGridItems} from './grid.js';

moveCircles();

//const btn = document.querySelector(".btn_transparent").addEventListener('click', ev => {
//    let target = ev.target;
//
//    const center = document.querySelector(".center");
//    const centerPos = center.getBoundingClientRect();
//    const xcenter = (centerPos.left + centerPos.right) / 2;
//
//    console.log("click");
//
//    stopCircles();
//
//    gsap.to(".rotate-element", {
//        duration: 1,
//        size: 2,
//        opacity: 0,
//        onComplete: () => {
//            
//        },
//    });
//    
//    gsap.to(center, {
//        duration: 0.5,
//        y: "-200%",
//        opacity: 0,
//        onComplete: () => {
//            center.remove();
//            //initGridItems();
//            //gsap.fromTo('.item', 0.5, {opacity: 0, y: 200}, {opacity: 1, y:0, stagger: 0.1});
//        },
//    });
    
   
    //const rotateElements = document.querySelectorAll(".rotate-element");
    //const items = document.querySelectorAll(".item");
//
    //for(let i = 0; i < items.length; i++){
    //    const itemPos = items[i].getBoundingClientRect();
    //    const xitem = (itemPos.left + itemPos.right) / 2;
    //    const yitem = (itemPos.top + itemPos.bottom) / 2;
//
    //    gsap.to(rotateElements[i], {
    //        delay: 0.1,
    //        duration: 0.2,
    //        left: xitem,
    //        top: yitem,
    //        //onComplete: () => {
    //        //    //center.remove();
    //        //    initGridItems();
    //        //    gsap.fromTo('.item', {opacity: 0, y: 50}, 
    //        //    {opacity: 1, y: 0, stagger: 0.1});
    //        //    },
    //    });
    //}

    
//});


//let tween = gsap.to(".rotate-element", {
//    duration: 1,
//    x: "-=200",
//    stagger: 0.1
//});
