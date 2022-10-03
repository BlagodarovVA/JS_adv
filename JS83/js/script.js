'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();       // запрос на сервер
    // методы
    request.open('GET', 'js/current.json');           // сбор настроек для выполнения запроса
                                                            // 'GET' - методы записываются в верхнем регистре
                                                            // путь пишется относительно файла html
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');    // заголовок для передачи JSON
    request.send();                         // отправляем запрос
    // свойства: 
    // status - статус запроса
    // statusText - описание статуса
    // response - ответ сервера
    // readyState - текущее состояние запроса

    // события
    //request.addEventListener('readystatechange', () => {    // отслеживает статус готовности запроса в данн момент
    request.addEventListener('load', () => {                    // проще предыдущего
        //if (request.readyState === 4 && request.status === 200) {  // если статус готовности 4 и запрос ОК
        if (request.status === 200) {
            console.log(request.response);                          // выводим ответ
            const data = JSON.parse(request.response);              // преобразуем в объект
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);    // рассчитываем, 2 знака после запятой
        } else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });


});