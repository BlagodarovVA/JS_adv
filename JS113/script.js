'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');



let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {transform: 'translateY(0px) rotate(0deg)', filter: 'opacity(100%)'},
            {transform: 'translateY(-100px) rotate(72deg)', filter: 'opacity(70%)'},
            {transform: 'translateY(0px) rotate(144deg)', filter: 'opacity(50%)'},
            {transform: 'translateY(100px) rotate(216deg)', filter: 'opacity(40%)'},
            {transform: 'translateY(200px) rotate(288deg)', filter: 'opacity(70%)'},
            {transform: 'translateY(0px) rotate(360deg)', filter: 'opacity(100%)'},
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});


let macbookAnimation;
btnMacbook.addEventListener('click', () => {
    if (!macbookAnimation) {
        macbookAnimation = images[1].animate([
            {transform: 'translateX(0px)', filter: 'opacity(100%)'},
            {transform: 'translateX(200px)', filter: 'opacity(50%)'},
            {transform: 'translateX(400px)', filter: 'opacity(100%)'},
            {transform: 'translateX(200px)', filter: 'opacity(50%)'},
            {transform: 'translateX(0px)', filter: 'opacity(100%)'}
        ], {
            duration: 4000,
            iterations: Infinity
        });
    } else if (macbookAnimation.playState === 'paused') {
        macbookAnimation.play();
    } else {
        macbookAnimation.pause();
    }
});