
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
            modal = document.querySelector('.modal');

    
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


    // Закрытие модального окна кликом по подложке
    modal.addEventListener('click', (e) => {        // передаём объект события е
        if (e.target === modal || e.target.getAttribute('data-close') == '') {       // если место клика строго совпадаетс с модальным окном, а не модальным диалогом
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
            this.transfer = 2.5;
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

    // получаем данные с сервера
    const getResource = async (url) => {     // внутри функции будет асинхронный код
        const res = await fetch(url);       // await - ставим пред операциями, которые необходимо дождаться

        if (!res.ok) {
            // объект Ошибка. делаем ее, чтобы пойти в reject в промисе
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();              // также ждем окончания работы промиса
    };


    /*
    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {          // деструктуризация объекта
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();    // создастся столько раз, сколько передаст объектов сервер
        });
    });
    */

    axios.get('http://localhost:3000/menu')                 // axios берем из библиотеки
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {          // деструктуризация объекта
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();    // создастся столько раз, сколько передаст объектов сервер
            });
        });


    // Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',                 // картинка вместо текста
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Ой-ёй-ёй, ой-ёй-ёй, что-то пошло не так...'
    };

    forms.forEach(item => {         // для каждой формы привязываем функцию postData
        bindPostData(item);             // которая является обработчиком события при отправке
    });

    const postData = async (url, data) => {     // внутри функции будет асинхронный код
        // await - ставим пред операциями, которые необходимо дождаться
        const res = await fetch(url, {          // возвращаем промис от fetch. асинхронный код
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();              // также ждем окончания работы промиса
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();                                     // без перезагрузки страницы

            const statusMessage = document.createElement('img');    // создаём блок для сообщения
            statusMessage.src = message.loading;                    // назначаем атрибут
            // стиль
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);    // вставка сообщения после формы

            /*const request = new XMLHttpRequest();
            request.open('POST', 'server.php');*/

           /*request.setRequestHeader('Content-type', 'multipart/form-data');    // заголовок говорит, что приходит
           Когда используем связку XMLHttpRequest и FormData - заголовок устанавливать не нужно, он установится автоматически*/

            // Отправляем информацию в JSON
            //request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form);        // собирает данные с формы

            const json = JSON.stringify(Object.fromEntries(formData.entries()));    // преобразуем объект в json

            //const json = JSON.stringify(object);                // преобразуем новый объект в JSON


            postData('http://localhost:3000/requests', json)
            //.then(data => data.text())                        // преобразуем ответ в текст
            .then(data => {
                console.log(data);
                showThanksModal(message.success);               // модальное окно - успешно
                statusMessage.remove();                         // удаляем сообщение через 3 сек                
            }).catch(() => {
                showThanksModal(message.failure);               // сообщение - ошибка
            }).finally(() => {
                form.reset();                                   // очищаем форму после отправки
            });

            //request.send(json);                                 // отправляем json
            //request.send(formData);                           // отправляем данные

/*            request.addEventListener('load', () => {            // отслеживаем загрузку запроса
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);               // модальное окно - успешно
                    form.reset();                                   // очищаем форму после отправки
                    statusMessage.remove();                         // удаляем сообщение через 3 сек
                } else {
                    showThanksModal(message.failure);               // сообщение - ошибка
                }
            });*/
        });
    }

    function showThanksModal(message) {                            // функция нового модального окна после отправки
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');              // скрываем блок ввода данных юзера
        openModal();                                        // открываем модальное окно

        const thanksModal = document.createElement('div');  // создаем новый блок
        thanksModal.classList.add('modal__dialog');         // назначаем классы
        // добавляем вёрстку в блок
        thanksModal.innerHTML = `                           
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);   // добавляем блок в модальное окно
        setTimeout(() => {                                      
            thanksModal.remove();                               // удаляем блок через 4 сек
            prevModalDialog.classList.add('show');              // возвращаем первое модальное окно
            prevModalDialog.classList.remove('hide');
            closeModal();                                       // закрываем модальное окно
        }, 4000);
    }

    // Slider

    const slides = document.querySelectorAll('.offer__slide'),      // получаем элементы со страницы
          slider = document.querySelector('.offer__slider'),        // для обращения к слайдеру и установки свойства
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;                 // отступ

    if (slides.length < 10) {                           // инициализация номера
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';                     // картинки в ряд
    slidesField.style.transition = '0.5s all';              // эффект скольжения

    slidesWrapper.style.overflow = 'hidden';                // скрываем слайды не в области видимости

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function strToNumber(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == strToNumber(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += strToNumber(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;   // сдвигаем слайды на отступ

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = strToNumber(width) * (slides.length - 1);
        } else {
            offset -= strToNumber(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;   // сдвигаем слайды на отступ

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = strToNumber(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;   // сдвигаем слайды на отступ

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
        });
    });



});
