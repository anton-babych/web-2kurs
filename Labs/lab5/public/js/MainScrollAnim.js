gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

ScrollTrigger.defaults({
    toggleActions: "restart pause resume none",
});

const maxHeight = "600px";

var pinTween = tl.to(".main", {
    scrollTrigger: {
        trigger: ".main",
        start: "0px 0px",
        end: `${maxHeight} 100px`,
        scrub: true,
        pin: true,
        id: "pin"
    },
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
});

var nameTween = tl.to(".main__title-back", {
    scrollTrigger: {
        trigger: ".main__title-back",
        start: "0px 0px",
        end: `${maxHeight} 100px`,
        scrub: 1,
        id: "back-name",
    },
    x: 250,
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
});

var titleTween = tl.from(document.querySelector(".main__about"), {
    scrollTrigger: {
        start: "300px 0px",
        end: `${maxHeight} 100px`,
        scrub: 0.5,
        id: "title",
    },
    opacity: 0,
    x: "-=200",
});

//

