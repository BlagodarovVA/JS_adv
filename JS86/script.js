'use strict';
/*
console.log('Запрос информации...');

// создаём обещание. оно может завершиться положительно или отрицательно
// вместо аргументов будут подставлены фцункции
const req = new Promise(function(resolve, reject) {
    setTimeout(() =>  {                                // имитация асинхронного кода 
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 200
        };
    
        resolve(product);                  // вызываем, когда все ок и получили данные
    }, 2000);

});

req.then((product) => {                         // метод then обработки положительного результата (resolve)
    return new Promise((resolve, reject) => {   // если нужны еще действия после предыдущих, возвращаем новый промис
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            //reject();                   // ошибка. пропускаем все then и переходим к catch
        }, 2000);
    });
// выполняем слудующую обработку по цепочке данных, которые вернулись в 1 then
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {            // обработка ошибки. всегда пишется в конце
    console.error('Произошла ошибка');
}).finally(() => {          // finally пишется в самом конце и позволяет выполнить действия независимо от исхода
    console.log('Finally');
});
*/

const test = time => {
    return new Promise(resolve => {         // если reject не нужен, можно использовать только resolve
        setTimeout(() => resolve(), time);
    });
};

//test(1000).then(() => console.log('1000 ms'));  // вызываем функцию, передаем 1сек, и действие для resolve
//test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {  // ждем окончания всех промисов, потом выполняем
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => {  // ждем выполнения именно первого промиса, тогда продолжаем
    console.log('Race');
});