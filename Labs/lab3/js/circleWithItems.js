const centerPos = document.querySelector('.center').getBoundingClientRect();
const circleParent = document.querySelector('.circle-parent');

const xcenter = (centerPos.left + centerPos.right) / 2,
    ycenter = (centerPos.top + centerPos.bottom) / 2;

const measureUnit = "px";

let idCounter = 0;

export default class CircleWithItems{
    constructor(radius, step, delay, quantity, startKoef, ItemDatas){
        this.radius = radius;
        this.step = step;
        this.delay = delay;
        this.quantity = quantity;
        this.startKoef = startKoef;
        this.xoffset = 0;
        this.yoffset = 0;
        this.images = [];
        
        this.init(ItemDatas);
    }

    init(datas){
        for(let i = 0; i < this.quantity; i++){
            let item = document.createElement("img");
            item.classList.add('rotate-element', 'small-img');
            let itemDa = getItem(datas);
            item.src = itemDa.imgSrc;
            item.dataset.id = itemDa.id;
            idCounter++;
            circleParent.append(item);

            this.images[i] = item;
        }

        let boundingimg = this.images[0].getBoundingClientRect();
        this.xoffset = (boundingimg.left + boundingimg.right) / -2;
        this.yoffset = (boundingimg.top + boundingimg.bottom) / -2;

        this.setup();
    }

    setup() {
        let start = 270 * Math.PI/180,
        spacing = 2 * Math.PI / this.images.length;

        for(let i = 0; i < this.images.length; i++){
            posImage(this.images[i], start, this.radius * this.startKoef, this.xoffset, this.yoffset);
            lookAtScreenCenter(this.images[i]);
            start += spacing;
        }
    }

    updateImgs(imgs){
        for(let i = 0; i < imgs.length; i++){
            let img = imgs[i];
            
            lookAtScreenCenter(img);

            let prevPos = +img.dataset.pos;
            let pos = prevPos + +this.step;
            let lerpedPos = lerp(prevPos, pos, 0.01);

            posImage(img, lerpedPos, this.radius, this.xoffset, this.yoffset);

            img.dataset.pos = pos;
        }

        //this.timeoutId = setTimeout(function(){
        //    this.update(this.images);
        //}, 100);
    }
}    

function lookAtScreenCenter(im){
    let x = (im.style.left) + (im.clientWidth / 2),
        y = (im.style.top) + (im.clientHeight / 2);

    let radian = Math.atan2(x - xcenter, y - ycenter);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;
    im.style.transform = `rotate(${rotation}deg)`;
}

function posImage(im, start, r, xoffset, yoffset){
    im.style.top = `${yoffset + Math.floor(ycenter + (r * Math.sin(start)))}${measureUnit}`;
    im.style.left = `${xoffset + Math.floor(xcenter + (r * Math.cos(start)))}${measureUnit}`;

    im.dataset.pos = start;
}

function lerp (start, end, amt){
    return (1-amt)*start+amt*end;
}

function getItem(items){

    if(items.length > idCounter){
        let a = items[idCounter];
        return a;
    }else{
        return randomItem(items);
    }
}

function randomItem(items){
    return items[Math.floor(Math.random()*items.length)];
}

