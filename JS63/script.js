"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);        //получаем свойства элемента
//console.log(btns[0].classList.item(1));       //метод позволяет получить класс по индексу
console.log(btns[1].classList.add('red', 'newClass'));      //добавляем к имени класса red
//console.log(btns[0].classList.remove('blue'));  //удаляем класс
//console.log(btns[0].classList.toggle('blue'));  //если класс на элементе есть, то будет убран. если нет, то добавлен

/*
if (btns[1].classList.contains('red')) {    //проверяем наличие класса на элементе
    console.log('red');
}*/


btns[0].addEventListener('click', () => {       //ждем клика
    /*
    if (!btns[1].classList.contains('red')) {   //если класса нет
        btns[1].classList.add('red');           //то добавляем
    } else {
        btns[1].classList.remove('red');        //иначе удаляем
    }*/

//или так

    btns[1].classList.toggle('red');
});


wrapper.addEventListener('click', (event) => {      //event содержит инфу об элементе, где событие
    //if (event.target && event.target.tagName == "BUTTON") {
    if (event.target && event.target.matches("button.red")) {    
    //if (event.target && event.target.classList.contains('blue')) {
        console.log('Hellouuu');
    }
});


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);                            //кнопку помещаем во враппер