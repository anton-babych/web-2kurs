//import {moveCircles} from './movingCircles.js';
//import {initGridItems} from './grid.js';

barba.hooks.enter((data) => {
    console.log("grid check aaaaaaa");
    console.log(data.current.container.parentNode.querySelector(".grid-script"));
});

barba.init({
    peventRunning: true,
    
      transitions: [
        {
            name: "default",
            
            before(){
                console.log("load");
            },
            
            leave(data){
                const done = this.async();
                let currentPage = data.current.container;
                gsap.fromTo(currentPage, {opacity: 1}, {opacity: 0, duration: 1, onComplete: done} );
            },

            beforeEnter(data){
                //console.log(data.current.container.parentNode.querySelector(".grid-script"));
            },
            
            enter(data){
                console.log(data.current.container.parentNode.querySelector(".grid-script"));
                console.log("enter");
                const done = this.async();
                let nextPage = data.next.container;
                gsap.fromTo(nextPage, {opacity: 0}, {opacity: 1, duration: 1, onComplete: done} );
                //gsap.fromTo('.item', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, stagger: 0.1, onComplete: done});
            }
        },
    ],

});