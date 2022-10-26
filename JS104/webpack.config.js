'use strict';

let path = require('path');

module.exports = {
  mode: 'development',        // режим
  entry: './js/script.js',       // файл, с которого начинаем
  output: {
    filename: 'bundle.js',    // файл выхода
    path: __dirname + '/js'   // куда ложим
  },
  watch: true,

  devtool: "source-map",      // инфа об исходниках

  module: {}                  // подключаемые модули
};
