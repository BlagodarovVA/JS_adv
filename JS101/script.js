'use strict';

const app = 123;

const number = 1;

// 1
(function(){
    let number = 2;
    console.log('in - ',number);
    console.log(number + 3);
}());

console.log('out - ',number);

// 2

const user =(function() {
    const privat = function() {
        console.log('I am privat');
    };

    return {
        sayHello: privat            // пишем метод и передаем в него ссылку на функцию
    };
}());

user.sayHello();