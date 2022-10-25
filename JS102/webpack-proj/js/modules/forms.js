function forms() {
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
}

module.exports = forms;