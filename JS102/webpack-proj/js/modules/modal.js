function modal() {
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

}

module.exports = modal;