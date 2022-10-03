const btn = document.querySelector('.btn');
let timerId,
    timerId1,
    i = 0;
    
function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 5);
    function frame() {
        if (pos ==300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos +"px";
        }
    }
}

btn.addEventListener('click', myAnimation);



/*
btn.addEventListener('click', () => {
    //const timerId1 = setTimeout(logger, 2500);
    timerId1 = setInterval(logger, 500);         //повторение через промежуток времени
});

//1
timerId = setTimeout(function(text) {     //сначала принимает функцию, которая запустится потом
    console.log(text);                          //объявлена, но не вызывается
}, 2000, 'Hello');                              //2 секунды

//2
//const timerId1 = setTimeout(logger, 2500);

clearInterval(timerId);                         //отключение таймера
clearInterval(timerId1);

function logger () {
    if (i === 3) {
        clearInterval(timerId);
        clearInterval(timerId1);
    }
    console.log('text');
    i++;
}

//рекурсивный вызов дождется окончания функции + своего интервала
let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 1000);
}, 1000);
*/