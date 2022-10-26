

function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //Tabs
    const tabs = document.querySelectorAll(tabsSelector),
            tabsContent = document.querySelectorAll(tabsContentSelector),
            tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {             //скрываем все табы
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {            //показываем нужные табы. по умолчанию поставили 0
        tabsContent[i].classList.add('show', 'fade');       //добавляем классы отображения и анимации
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;                    //присваеваем событие переменной для удобства

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {                 //перебираем табы и раскрываем нужный
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });    
}

export default tabs;      // дописываем для экспорта