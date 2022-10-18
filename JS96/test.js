'use strict';

// считает сумму цифр, пока она не станет однозначной

function digitalRoot(n) {
    if (n < 10) {
        return n;
    }

    while (n > 9) {
        var digits = String(n).split("").map(Number);
        n = digits.reduce((sum, current) => sum + current);

      }
    console.log('n - ',n);
    return n;
}

digitalRoot(25);
digitalRoot(456);
digitalRoot(8796354);