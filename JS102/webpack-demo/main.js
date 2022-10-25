function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.goodbye = function() {
        console.log('bye');
    };
}

// помечаем для экспорта
module.exports = myModule;