'use strict';

// 1) обычная функция: this = window, но если 'use strict' - undefined
/*
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;           // используем замыкание
    }

    console.log(sum());
}

showThis(4, 5);*/


// 2) если используем метод внутри объекта, то контекст вызова ссылается на объект
/*
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();
*/


// 3) this в конструкторах и классах - это новый экземпляр объекта
/*
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

let ivan = new User('Ivan', 32);
*/

// 4) ручная привязка this: call, apply, bind

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
const user = {
    name: 'Johan'
};

// методы передают функции конкретный контекст вызова
// делают одно и то же, разница в синтаксисе
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

// метод bind ручного присвоения контекста создаёт новую функцию
function count(num) {
    return this * num;
}
const double = count.bind(2);
console.log(double(13));


const btn = document.querySelector('button');

// когда обработчик события написан в классическом режиме,
// тогда контекстом будет сам элемент, на котором произошло событие
// this равняется тому же, что и event target
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});

// this в стрелочной функции
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};
obj.sayNumber();


// если тело функции помещается в 1 строку, то можно написать без фигурных скобок
// return не пишется, подставляется автоматом
const double2 = (a) => a * 2;
console.log(double(251));