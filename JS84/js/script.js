
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


    // Modal //
    const modalTrigger = document.querySelectorAll('[data-modal]'),
            modal = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');

    
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        //modal.classList.toggle('show');           // переключаель. если класса нет, то добавим. если есть, то уберем
        document.body.style.overflow = 'hidden';    // отключение прокрутки за модальным окном
        //clearInterval(modalTimerId);                // очистка таймера, если окно уже было открыто
    }


    modalTrigger.forEach(btn => {                       // чтобы работало для любой кнопки, а не одной.
        btn.addEventListener('click', openModal);
    });
    

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        //modal.classList.toggle('show');           // переключаель. если класса нет, то добавим. если есть, то уберем
        document.body.style.overflow = '';          // возвращаем скролл
    }

    modalCloseBtn.addEventListener('click', closeModal);    // функцию передаём, а не вызываем


    // Закрытие модального окна кликом по подложке
    modal.addEventListener('click', (e) => {        // передаём объект события е
        if (e.target === modal) {                   // если место клика строго совпадаетс с модальным окном, а не модальным диалогом
            closeModal();                          // то закрываем модальное окно
    
        }
    });


    // Закрытие модального окна нажатием Esc
    // коды - https://www.toptal.com/developers/keycode
    document.addEventListener('keydown', (e) => {   // событие нажатие кнопки
        if (e.code === "Escape" && modal.classList.contains('show')) {    // если код Escape и модальное окно открыто
            closeModal();  
        }
    });


    // Вызов модального окна по таймеру
    //const modalTimerId = setTimeout(openModal, 10000);


    function showModalByScroll() {          // показ модального окна при скроле
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);    // удаляем обработчик после срабатывания
        }
    }

    // Вызов модального окна, если проскролил до конца
    window.addEventListener('scroll', showModalByScroll);


    // Используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {    // ...classes - передаём неограниченное количество операторов
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);       // родительский элемент, куда передаём вёрстку
            this.transfer = 2.55;
            this.changeToBYN();
        }

        changeToBYN() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {   // если classes пустой, то присвоим нужный нам массив
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));    // назначаем каждый класс из массива элементам
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.parent.append(element);                // помещаем элемент в родительский
        }

    }

    // долгий способ создания объекта и вызова рендера
    //const div = new MenuCard();
    //div.render();

    // простой способ создания объекта и вызова рендера
    new MenuCard(                           // вызывается 1 раз и больше нигде не хранится
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',                     // используем разные кавычки, если их несколько
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'                  // родительский селектор
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        15,
        '.menu .container', 
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container', 
        'menu__item'
    ).render();

    
    // Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Ой-ёй-ёй, ой-ёй-ёй, что-то пошло не так...'
    };

    forms.forEach(item => {         // для каждой формы привязываем функцию postData
        postData(item);             // которая является обработчиком события при отправке
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();                     // без перезагрузки страницы

            const statusMessage = document.createElement('div');    // создаём блок для сообщения
            statusMessage.classList.add('status');                  // назначаем класс
            statusMessage.textContent = message.loading;            // сообщение, пока грузит
            form.append(statusMessage);                             // добавляем на форму

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

           /*request.setRequestHeader('Content-type', 'multipart/form-data');    // заголовок говорит, что приходит
           Когда используем связку XMLHttpRequest и FormData - заголовок устанавливать не нужно, он установится автоматически*/

            // Отправляем информацию в JSON
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);    // собирает данные с формы

            const object = {};                      // создаём пустой объект для заполнения и конвертации
            formData.forEach(function(value, key) {     // заполняем из formData
                object[key] = value;
            });

            const json = JSON.stringify(object);        // преобразуем новый объект в JSON

            request.send(json);                       // отправляем json
            //request.send(formData);                 // отправляем данные

            request.addEventListener('load', () => {    // отслеживаем загрузку запроса
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;    // сообщение - успешно
                    form.reset();                                   // очищаем форму после отправки
                    setTimeout(() => {                              // удаляем сообщение через 3 сек
                        statusMessage.remove();
                    },3000);
                } else {
                    statusMessage.textContent = message.failure;    // сообщение - ошибка
                }
            });
        });
    }


});
