const grid = document.querySelector(".grid");

animateCSSGrid.wrapGrid(grid, {
    duration: 300,
    stagger: 25,
    onStart: elements =>
      console.log(`started animation for ${elements.length} elements`),
    onEnd: elements =>
      console.log(`finished animation for ${elements.length} elements`)
});


