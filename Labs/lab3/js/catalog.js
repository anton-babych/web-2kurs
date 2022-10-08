import {initGridItems} from './grid.js';

initGridItems();
gsap.fromTo('.item', 0.5, {opacity: 0, y: 200}, {opacity: 1, y:0, stagger: 0.1});