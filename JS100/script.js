'use strict';

//конструктор функций
/*
function User(name, age) {
    this.name = name;           // можно изменить значение снаружи
    let userAge = age;          // не дает изменить значение снаружи

    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('недопустимое значение!');
        }
    };
}

const ivan = new User('Ivan', 32);
console.log(ivan.name);
//console.log(ivan.userAge);
console.log(ivan.getAge());

ivan.setAge(40);
ivan.setAge(120);
console.log(ivan.getAge());

ivan.say();
*/

// класс
class User1 {
    constructor(name, age) {
        this.name = name;        // можно изменить значение снаружи
        this._age = age;         // не дает изменить значение снаружи        
    }

    #surname = 'Petrov';         // такое свойство будет приватным, нельзя получить снаружи

    getSurname = () => {
        console.log(this.#surname);
    }

    setSurname = (surname) => {
        this.#surname = surname;
    }

   
    say = () => {
        console.log(`Имя пользователя ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('недопустимое значение!');
        }
    }
}

const ivan = new User1('Ivan', 32);
console.log(ivan.surmane);
// console.log(ivan.age);
// //console.log(ivan._age);   // - плохая практика
// ivan.age = 99;
// console.log(ivan.age);
ivan.getSurname();

ivan.setSurname('Sidorov');
ivan.getSurname();

ivan.say();