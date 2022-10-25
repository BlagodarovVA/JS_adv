// импорт
//import {one, two} from './main.js';
// console.log(`${one} and ${two}`);


//import {one as first} from './main.js';    // переименовываем
// console.log(first);


// import * as data from './main.js';           // импорт всего
// console.log(`${data.one} und ${data.two}`);
// data.sayHi();


import sayHi from './main.js';             // импорт с параметром defaul 
sayHi();