const sidebar = document.querySelector(".sidebar");
const sidebarTitle = document.querySelector(".sidebar-title");
const container = document.querySelector(".container");

let expanded = false;

sidebarTitle.addEventListener('click', () => {
    gsap.to(sidebar, 0.5, {width: expanded?150:300, ease: "power2.out"});
    
    sidebarTitle.textContent = expanded ? "відкрий" : "закрий";
    
    const names = document.querySelectorAll(".shop-item__name");
    names.forEach(x => {
        x.style.opacity = expanded?0:1;
        //x.classList.toggle("disabled");
    });

    expanded = !expanded;
});