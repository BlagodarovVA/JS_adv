fetch('https://dummyjson.com/products/add', {           // возвращает промис
    method: "POST",                                     // объект с настройками
    body: JSON.stringify({name: 'Alex'}),               // в JSON
    headers: {                                          // headers в множественном числе
        'Content-type': 'application/json'
    }
    })               
    .then(res => res.json())                            // ответ в промис JSON. res.json() - преобразует в объект
    .then(json => console.log(json));                   // работаем с промисом объекта
