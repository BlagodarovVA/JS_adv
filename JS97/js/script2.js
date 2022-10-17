// парсинг URL
const siteURL = 'https://demo-bevalex.simpleone.ru:5555/list/simple_node?condition=';
const url = new URL(siteURL);
console.log(url);


// удаление подстроки
let str = 'ksa;ljgfsau!gdfpiwq!gerpugfasdfafsa!';
let newStr = str.split('')
.filter(item => item != '!')
.join('') ;