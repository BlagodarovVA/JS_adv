import {getResource} from '../services/services.js';

function cards() {
    // Используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {    // ...classes - передаём неограниченное количество операторов
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);       // родительский элемент, куда передаём вёрстку
            this.transfer = 2.5;
            this.changeToBYN();
        }
        changeToBYN() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {   // если classes пустой, то присвоим нужный нам массив
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));    // назначаем каждый класс из массива элементам
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.parent.append(element);                // помещаем элемент в родительский
        }

    }


    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {          // деструктуризация объекта
            // создастся столько раз, сколько передаст объектов сервер
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });
    
    /*
    axios.get('http://localhost:3000/menu')                 // axios берем из библиотеки
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {          // деструктуризация объекта
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();    // создастся столько раз, сколько передаст объектов сервер
            });
        });
    */

}

export default cards;