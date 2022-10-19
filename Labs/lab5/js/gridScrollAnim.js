import { gsap, ScrollTrigger } from "/gsap/all";
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".card");

const width =  document.querySelector(".grid").offsetWidth;

gsap.to(sections, {
  x: -450 * (sections.length-2),
  ease: "none",
  scrollTrigger: {
    trigger: ".products_layout",
    pin: true,
    scrub: 1,
    end: () => "+=" + width
  }
});