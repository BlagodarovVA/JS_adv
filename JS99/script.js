'use strict';

const persone = {
    name: "Alex",
    age: 25,

    get userAge() {             // получаем
        return this.age;
    },

    set userAge(num) {          // устанавливваем
        this.age = num;
    }
};

console.log(persone.userAge = 32);
console.log(persone.userAge);       // геттеру не нужны круглые скобки при вызове