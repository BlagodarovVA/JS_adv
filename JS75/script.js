'use strict';

const num = new Number(3);
//console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {                  // добавляем метод к прототипу
    console.log(`Пользователь ${this.name} ушел`);  // появится у потомков созданных после этого метода
};

const ivan = new User('Ivan', 32);      // в переменной будет объект, который вернет функция
const alex = new User('Alex', 25);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);