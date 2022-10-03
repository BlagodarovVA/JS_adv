'use strict';

const box = document.querySelector('.box'),
        btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// с учетом полосы прокрутки, border, margin
// const width = box.offsetWidth;
// const height = box.offsetHeight;

// размер скролла
const width = box.scrollWidth;
const height = box.scrollHeight;


console.log(width, height);

// разворачиваем текст по кнопке
btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight +'px';
    console.log(box.scrollTop);
});

// получаем координаты. есть методы
console.log(box.getBoundingClientRect());

// вывод стилей, применённых к объекту
// также получают и стили псевдоэлементов
const style = window.getComputedStyle(box);
console.log(style.display);

// получить количество пикселей, которое пролистано
console.log(document.documentElement.clientWidth);

// прокрутка вверх в браузере
//document.documentElement.scrollTop = 0;
//window.scrollBy(0, 400);
//window.scrollTo(0, 400);