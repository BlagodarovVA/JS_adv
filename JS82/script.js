'use strict';

const persone = {
    name: 'Uasya',
    tel: '+777223336655',
    parents: {
        mom: 'Olga',
        dad: 'Miha'
    }
};

//console.log(JSON.stringify(persone));       // Превращаем объекты JS в нужный формат

//console.log(JSON.parse(JSON.stringify(persone)));   // парсинг JSON в обычный объект


const clone = JSON.parse(JSON.stringify(persone));      // глубокий клон объекта
clone.parents.mom = 'Hana';
console.log(persone);
console.log(clone);
