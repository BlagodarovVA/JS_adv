
window.addEventListener('DOMContentLoaded', () => {

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

});