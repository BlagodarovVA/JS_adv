'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => {    // слежение за изменением элемента
    console.log(mutationRecords);
});

observer.observe(box, {     // если элемент меняется, выполняем функцию
    childList: true
});

observer.disconnect();      // перестать следить




function minVal(args) {
    console.log(Math.min(...args));     // минимальное значение в массиве
}

minVal([10, -2, 100, 0, -4, -10]);