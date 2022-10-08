const sidebar = document.querySelector(".sidebar");
const sidebarTitle = document.querySelector(".sidebar-title");
const container = document.querySelector(".container");

let expanded = false;

sidebarTitle.addEventListener('click', () => {
    gsap.to(sidebar, 0.5, {width: expanded?60:300, ease: "power2.out"});
    
    sidebarTitle.textContent = expanded ? "відкрий" : "закрий";
    
    expanded = !expanded;
});