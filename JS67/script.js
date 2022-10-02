"use strict";

/*
let user = {name: 'Vasiliy'};

//const arr = [user];
let map = new WeakMap();
map.set(user, 'data');

user = null;

//console.log(user);
//console.log(arr[0]);

// console.log(map.keys());
console.log(map.has(user));
*/

//пример. держим в кеше пользователей онлайн
let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));


console.log('----------------------');
// WeakSet
// add, has, delete

let messages = [
    {text: 'Hello', from: 'Johana'},
    {text: 'World', from: 'Alex'},
    {text: '....', from: 'Bolo'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
//readMessages.add(messages[1]);


messages.shift();                           //удаляем первый элемент массива
console.log(readMessages.has(messages[0]));

