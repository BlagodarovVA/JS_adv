import $ from 'jquery';     // подключаем либу
/*
const btn = $('#btn');      // обращение к элементу по id
console.log(btn);
*/

$(document).ready(function() {      // проверка, что страница загружена
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });
});