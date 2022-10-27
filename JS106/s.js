'use strict';

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch (error) {               // если в try возникает любая ошибка, перемещаемся в catch
//catch (e) {}                  // если catch не нужен
    console.log('Error');
    console.log(error);         // покажет ошибку в try
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {

}

console.log('Still normal');