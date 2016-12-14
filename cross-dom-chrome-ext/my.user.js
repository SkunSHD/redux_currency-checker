// ==UserScript==
// @name         Cross-domain request allowance
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       MD
// @include      http://localhost:3000/*
// @grant        none
// ==/UserScript==

(function(window, undefined) {
  'use strict';
  var w = window.unsafeWindow || window;
  // В юзерскрипты можно вставлять практически любые javascript-библиотеки.
  // Код библиотеки копируется прямо в юзерскрипт.
  // При подключении библиотеки нужно передать w в качестве параметра окна window
  // Пример: подключение jquery.min.js
  // (function(a,b){function ci(a) ... a.jQuery=a.$=d})(w);

  // [3] не запускаем скрипт во фреймах
  // без этого условия скрипт будет запускаться несколько раз на странице с фреймами
  if (w.self != w.top) {
    return;
  }

  function  get(url, callback) {
    chrome.extension.sendRequest({ 'action':'xget', 'url':url }, callback);
  }

  // [4] дополнительная проверка наряду с @include
  if (/http:\/\/localhost:3000/.test(w.location.href)) {
    //Ниже идёт непосредственно код скрипта
    // alert("Userscripts приветствует вас навязчивым окном.");
    // попробовать переделать кодировку параметров запроса
    get("http://www.cbr.ru/scripts/XML_daily.asp?date_req=02/03/2016", alert);
  }
})(window);