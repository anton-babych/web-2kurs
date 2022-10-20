gsap.registerPlugin(ScrollTrigger);

export function animateGrid(){
  const grid = document.querySelector(".grid");
  const width = grid.offsetWidth;

  gsap.to(".grid", {
    x: -width + screen.width,
    ease: "none",
    scrollTrigger: {
      trigger: ".products",
      pin: true,
      scrub: 1,
      //markers: true,
      end: () => "+=" + width
    }
  });
}