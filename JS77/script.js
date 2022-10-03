'use strict';

class Rectangle {       // название класса всегда должно быть с большой буквы
    constructor(height, width) {        // что буудет уметь класс. аргументы будут приходить извне
        this.height = height;
        this.width = width;
    }

    calcArea() {                        // метод. не разделяем знаком ;
        return this.height * this.width;
    }

}

class ColoredRectangleWithText extends Rectangle {      // наследует всё от Rectangle
    constructor (height, width, text, bgColor) {
        super(height, width);                                        // наследует конструктор родителя. всегда первая строка
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'PriveT', 'red');

div.showMyProps();
console.log(div.calcArea());        // используем метод родителя

/*
const square = new Rectangle(10, 10);   // создаем объект
const long = new Rectangle(20, 100);    // 2 объект

console.log(square.calcArea());
console.log(long.calcArea());
*/
