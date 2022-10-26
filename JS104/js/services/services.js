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


// получаем данные с сервера
async function getResource(url) {     // внутри функции будет асинхронный код
    let res = await fetch(url);       // await - ставим пред операциями, которые необходимо дождаться

    if (!res.ok) {
        // объект Ошибка. делаем ее, чтобы пойти в reject в промисе
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();              // также ждем окончания работы промиса
};


export {postData};
export {getResource};