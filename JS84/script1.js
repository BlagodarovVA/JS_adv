const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');


function calcOrDouble(number, basis = 2) {
    //basis = basis || 2;      //если не передан второй аргумент, то по умолчанию подставится
    console.log(number * basis);
}

calcOrDouble(3);