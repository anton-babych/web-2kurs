import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

ScrollTrigger.defaults({
    toggleActions: "restart pause resume none",
    //markers: true,
});

var pinTween = tl.to(".main", {
    scrollTrigger: {
        trigger: ".main",
        start: "0px 0px",
        end: "1000px 100px",
        scrub: true,
        pin: true,
        id: "pin"
    },
    duration: 3,
});

var juiceTween = tl.to(".main__img-holder", {
    scrollTrigger: {
        trigger: ".main__img-holder",
        start: "top 0px",
        end: "bottom 100px",
        scrub: 1,
        id: "juice"
    },
    left: 80,
    duration: 3,
});

var nameTween = tl.to(".main__title-back", {
    scrollTrigger: {
        trigger: ".main__title-back",
        start: "0px 0px",
        end: "1000px 100px",
        scrub: 1,
        id: "back-name",
    },
    x: 250,
    duration: 3,
});

var titleTween = tl.to(".title", {
    scrollTrigger: {
        trigger: ".main__title-back",
        start: "0px 0px",
        end: "300px 100px",
        scrub: 1,
        id: "title"
    },
    opacity: 0,
    duration: 3,
});


//

