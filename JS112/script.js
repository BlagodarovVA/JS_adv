const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');

let timerId,
    timerId1,
    i = 0,
    pos = 0;
 
/*
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
*/

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos +"px";

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }

}

// анонимная стрелочная функция для того, чтобы анимация выполнилась по клику, а не сразу
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// остановка анимации
let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);