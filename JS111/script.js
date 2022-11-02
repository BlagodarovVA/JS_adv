'use strict';

// функция-генератор - при каждом вызове последовательно дает
// следующий результат, пока не дойдет до конца
/*
function* generator() {
    yield 'B';
    yield 'l';
    yield 'u';
    yield 'e';
    yield 't';
    yield 'o';
    yield 'o';
    yield 't';
    yield 'h';
}

const str = generator();
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next().value);      // получаем только значение
*/


function* count(n) {
    // цикл не идет до конца, а каждый вызов по 1 итерации
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// запуск макс количество раз
for (let k of count(7)) {
    console.log(k);
}

// const counter = count(7);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);