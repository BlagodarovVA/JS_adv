
window.addEventListener('DOMContentLoaded', () => {

    //Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {             //скрываем все табы
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {            //показываем нужные табы. по умолчанию поставили 0
        tabsContent[i].classList.add('show', 'fade');       //добавляем классы отображения и анимации
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;                    //присваеваем событие переменной для удобства

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {         //перебираем табы и раскрываем нужный
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    //Timer

    const deadline = '2022-10-09';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());         // значения в мсек

        if (t <= 0) {                                           // если отрицательные значения
            days = 0;                                           // то изначально проставляем нули
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
              days = Math.floor(t / (1000 * 60 * 60 * 24)),             // мсек * сек * мин * часы
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),          // считаем остаток от деления, чтобы было меньше 24 часов
              minutes = Math.floor((t / 1000 / 60) % 60),               // считаем остаток в минутах
              seconds = Math.floor((t / 1000) % 60);
        }
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {                 // добавляем 0 в однозначных цифрах таймера
        if (num >= 0 && num <10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);        //переменная для обновления счетчика раз в 1 сек

        updateClock();                                              // обновляем время сразу, чтобы не видеть значения
                                                                    // из вёрстки первую секунду
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {                             //остановка таймера, когда время < 0
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline);
});