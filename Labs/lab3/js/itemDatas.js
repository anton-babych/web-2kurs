let idCounter = 0;

class ItemData{
    constructor(name, imgSrc, description, quantity){
        this.id = ++idCounter;
        this.name = name;
        this.imgSrc = imgSrc;
        this.description = description;
        this.quantity = quantity;
    }
}

export const itemDatas = [
    new ItemData("Фармадол", "../img/farmadol.png","Для лікування мігрені, головного болю, зубного болю, первинна дисменорея", 100),
    new ItemData("Нурофєн Форте", "../img/nurofen.png","НУРОФЄН ФОРТЕ таблетки 400 мг №12", 20),
    new ItemData("Нормовен", "../img/normoven.png","Капіляростабілізуючий засіб. Підгруппа: бiофлавоноїди", 7),
    new ItemData("Реліф", "../img/relif.png","Для лікування геморою та анальних тріщин для місцевого застосування", 2),
    new ItemData("Детралекс", "../img/detralex.png","Група: капіляростабілізуючі засоби. Підгрупа: біофлавоноїди", 10),
    new ItemData("Стоптусин-тева", "../img/stoptusin.png","Від кашлю, від застуди, при сухому кашлі", 1020),
    new ItemData("Гексаліз", "../img/geksaliz.png","таблетки для розсмоктування по 10 таблеток у блістері; по 3 блістери в картонній коробці. Група: препарати, що застосовуються у разі захворювань горла", 52),
    new ItemData("Ібупрофен", "../img/iboprofen.png","таблетки, вкриті плівковою оболонкою, по 200 мг № 50 (50х1), № 50 (10х5) у блістерах. Група: нестероїдні протизапальні та протиревматичні засоби", 25),
    new ItemData("Стрепсілс", "../img/strepsils.png","Стрепсілс Інтенсив з Медом та Лимоном 8,75 МГ №16 льодяники", 11)
];