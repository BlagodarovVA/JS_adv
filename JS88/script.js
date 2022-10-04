'use strict';

// filter - фильтрует элементы в массиве

const names = ['Ivan', 'Anna', 'Ksenia', 'Volondemort'];
// фильтрованный массив с именами короче 5
const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);


// map

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result);


// every / some

const some = [4, 'asfas', 'asdfasde'];
// есть ли среди элементов число
console.log(some.some(item => typeof(item) === 'number'));
// все ли числа?
console.log(some.every(item => typeof(item) === 'number'));


// reduce
// схлопывает или собирает массив в одно целое
const arr = [4, 5, 1, 3, 2, 6];
/* каждую итерацию берет числа и складывает:
 sum = 0      current = 4
 sum = 0 + 4  current = 5
 sum = 4 + 5  current = 1 ...*/
const res = arr.reduce((sum, current) => sum + current);
// const res = arr.reduce((sum, current) => sum + current, 3);  // 3 - начальный аргумент, вместо 0
console.log(res);

// строки
const arr1 = ['apple', 'pear', 'plum'];

const res1 = arr1.reduce((sum, current) => `${sum}, ${current}`);
console.log(res1);


// пример
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
// вытащить имена людей

const newArr = Object.entries(obj)      // объект преобразуем в матрицу
.filter(item => item[1] === 'persone')  // отбираем только массивы с вторым элементом persone
.map(item => item[0]);                  // отобрать только имена

console.log(newArr);


