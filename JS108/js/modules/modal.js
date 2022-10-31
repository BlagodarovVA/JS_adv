function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    //modal.classList.toggle('show');           // переключаель. если класса нет, то добавим. если есть, то уберем
    document.body.style.overflow = 'hidden';    // отключение прокрутки за модальным окном

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);                // очистка таймера, если окно уже было открыто
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    //modal.classList.toggle('show');           // переключаель. если класса нет, то добавим. если есть, то уберем
    document.body.style.overflow = '';          // возвращаем скролл
}


function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal //
    const modalTrigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector);


    modalTrigger.forEach(btn => {                       // чтобы работало для любой кнопки, а не одной.
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));  // стрелочная обертка, чтобы функция не вызывалась без клика
    });
    

    // Закрытие модального окна кликом по подложке
    modal.addEventListener('click', (e) => {        // передаём объект события е
        if (e.target === modal || e.target.getAttribute('data-close') == '') {       // если место клика строго совпадаетс с модальным окном, а не модальным диалогом
            closeModal(modalSelector);                          // то закрываем модальное окно
    
        }
    });


    // Закрытие модального окна нажатием Esc
    // коды - https://www.toptal.com/developers/keycode
    document.addEventListener('keydown', (e) => {   // событие нажатие кнопки
        if (e.code === "Escape" && modal.classList.contains('show')) {    // если код Escape и модальное окно открыто
            closeModal(modalSelector);  
        }
    });


    function showModalByScroll() {          // показ модального окна при скроле
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);    // удаляем обработчик после срабатывания
        }
    }

    // Вызов модального окна, если проскролил до конца
    window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export {closeModal, openModal};