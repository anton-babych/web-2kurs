gsap.registerPlugin(ScrollTrigger);

const date = document.querySelector(".date");
const historyLayout = document.querySelector(".history");

const startDate = 1900,
    endDate = 2022;

function historyData (date, destription, img_link) {
    this.date = date;
    this.destription = destription;
    this.img_link = img_link;
}

const historyDatas = [
    new historyData(1928, "Завод був заснований у 1867 році як невелика приватна консервна фабрика. 1928 року Фабрика перетворюється у великий завод", 'imgs/forHistory/.png'),
    new historyData(1960, "Починається виробництво соків та пюре для дитячого харчування з місцевих фруктів та овочів. Одеський завод забезпечує близько 60% потреби СPСР у дитячому харчуванні.", 'imgs/forHistory/.png'),
    new historyData(1995, "На заводі відбувається модернізація всіх потужностей з монтажем сучасного европейського обладнання та вперше в Україні запускається виробництво соків у картонній упаковці.", 'imgs/forHistory/.png'),
    new historyData(2002, "Починається виробництво соків з доступною ціновою пропозицією від Одеського заводу дитячого харчування, який у споживачів отримав назву сік у білому пакеті.", 'imgs/forHistory/.png'),
    new historyData(2016, "Соки та нектари «Наш Сік» випускаються у новому сучасному дизайні упаковки.", 'imgs/forHistory/.png'),
];


initHistory();

function initHistory(){
    for(let i = 0; i<historyDatas.length; i++){
        instantiateLilCircle(historyDatas[i], i % 2==0);
    }

    //let sections = gsap.utils.toArray(".history__section");
//
    //gsap.from(sections, {
    //    scaleX: 0,
    //    ease: "none",
    //    scrollTrigger: {
    //      trigger: ".history",
    //      start: "0% 50%",
    //      end:"90% 50%",
    //      scrub: 1,
    //    },
    //    stagger: 1,
    //  });
}




function instantiateLilCircle(data, isEven){
    let pos = getDatePos(data.date);

    const circle = document.createElement('div');
    circle.classList.add('static-circle');
    circle.innerHTML = `
        <div class="history__section ${isEven ? 'section-left' : 'section-right'}">
            ${data.destription}
        </div>`;
    circle.style.top = `${-pos}px`;
    historyLayout.append(circle);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: circle.children[0],
            start: "-50% 50%",
            end:"50% 50%",
            scrub: 1,
            //markers: true,
        }, 
    });
    
    tl.from(circle, {
        opacity: 0.5,
        scale: 0.9,
    });

    tl.to(circle, {
        opacity: 0.5,
        scale: 0.9,
    });
}

function getDatePos(year){
    const heightHistory = historyLayout.offsetWidth * 0.78;
    let progress = (startDate - year)/(endDate-startDate);
    let relativePos = heightHistory * progress;
    return relativePos;
}

function updateDate(progress){
    let dateNum = startDate + Math.floor(((endDate - startDate) * progress));
    date.innerHTML= `${dateNum}`;

}







ScrollTrigger.create({
    trigger: ".history",
    start: "0% 50%",
    end: "96% 50%",
    pin: ".history__center",
    scrub: 1,
    //markers: true,
    onUpdate: self => updateDate(self.progress)
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".history",
        start: "0% 50%",
        end: "96% 50%",
        scrub: 1,
       // markers: true,
    }, 
});

tl.to(".history", {
    backgroundColor: "#181818",
    duration: 3,
});

tl.to(".history", {
    backgroundColor: "#4c0f7b",
    duration: 3,
});
//
//ScrollTrigger.create({
//    trigger: ".history",
//        pin: true,
//        scrub: 1,
//        markers: true,
//        end: () => "+=" + 1000
//});

