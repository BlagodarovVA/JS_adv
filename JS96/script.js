'use strict';

// классический синтаксис
// new RegExp('pattern', 'flags');

// синтаксис короче и проще
// /pattern/f

// search
const ans = prompt('Введите ваше число');
//const reg = /n/ig;
const reg = /\d/g;

// test - метод ищет в строке паттерн регулярного выражения
//console.log(reg.test(ans));

//console.log(ans.match(reg));

const str = 'My name is R2D2';

// ищем комбинацию - текст цифра текст цифра
console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\D/ig));


/*
\d - класс цифры
\w - слова, буквы
\s - пробелы
*/


// Обратные классы
/*
\D - не цифра
\W - не буква
\S - не пробел
*/


/* флаги
i - независимо от регистра
g - ищем несколько вхождений
m - включает многострочный режим
*/

//console.log(ans.search(reg));

// match - возвращаем массив
//console.log(ans.match(reg));

//const pass = prompt('Password');

//console.log(pass.replace(/./g, "*"));
//console.log(pass.replace(/\./g, "*"));
/*
. - берем все элементы, которые попадут в строку
\ - экранируем символ, чтобы воспринимать как обычный текст
\\ - экранируем слэш слэшем. аналогично прочие спецсимволы
*/

// замена дефиса на двоеточие
//console.log('12-34-56'.replace(/-/g, ":"));

