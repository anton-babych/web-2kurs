"use strict";

import CircleWithItems from './circleWithItems.js';
import {itemDatas} from './itemDatas.js';

let id1;
let id2;

export function moveCircles(){
    const circle1 = new CircleWithItems(500, 0.0025, 1300, 15, 2, itemDatas);
    const circle2 = new CircleWithItems(700, 0.0035, 1100, 25, 1.3, itemDatas);

    id1 = setTimeout(function log(){
        circle1.updateImgs(circle1.images);
        id1 = setTimeout(log, 100);
    }, circle1.delay);

    id2 = setTimeout(function log(){
        circle2.updateImgs(circle2.images);
        id2 = setTimeout(log, 100);
    }, circle2.delay);
}

export function stopCircles(){
    clearTimeout(id1);
    clearTimeout(id2);
}











//barba.hooks.before((data) => {
//    console.log("before hook");
//    moveCircles();
//});
//setTimeout(function(){
//    clearTimeout(id1);
//    //circle1.images[0]
//}, 5000);

