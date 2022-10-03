"use strict";

const now = new Date();                     //часовой пояс по гринвичу
const now1 = new Date('2022-09-04');         //задать дату
const now2 = new Date(2022, 11, 20, 20);     //месяцы в дате считаются с 0
const now3 = new Date(0);                    //0 - 0 мсек. отсчет в js c 1970 года
const now4 = new Date(-999999999999);       // отрицательное значение до 1970 года

/* Get
console.log(now.getFullYear());             // получить год, метод
console.log(now.getMonth());                // получить месяц
console.log(now.getDate());                 // получить число. дни считаются с 1
console.log(now.getHours());                // получить часы
console.log(now.getMinutes());              // получить минуты
console.log(now.getSeconds());              // получить секунды
console.log(now.getMilliseconds());         // получить мсек
console.log(now.getDay());                  // получить день недели. нумерация начиная с ВС - 0 день

console.log(now.getUTCHours());             // получить часы UTC (-3 часа)

console.log(now.getTimezoneOffset());       // разница в минутах между местным временем и UTC

console.log(now.getTime());                 // таймштамп - мсек с 1970 года
*/

// Set аналогично Get
now.setHours(18);                // задать часы. в vscode бедет -3 часа. в браузере ок
console.log(now);  


new Date.parse('2022-09-04');   // аналогично new Date('2022-09-04');   


let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i** 3;               // возведение в степень 3
}

let end = new Date();

console.log(`Цикл отработапл за ${end - start} милиcекунд`);