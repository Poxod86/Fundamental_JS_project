# Конспект по курсу фундаментальный JavaScript

# 1. Первая часть

## __1.1  Вводный блок__

- Для чего нужен JavaScript
- Какие версии есть у языка
- Где находится официальная документация
- Как подключить JavaScript
- Как запустить JS-скрипт вне браузера


### <span style='color: #ff710a;'>  Сфера применения JavaScript 

Изначально JavaScript был придуман для браузера. Сейчас его возможности значительно выросли.

<span style='color: #47ff40;'> _JavaScript </span> может применятся:_
- для фронтенд части сайта
- для backend части сайта
- для мобильных и декстопных приложений
- для других задач

###  <span style='color: #ff710a;'> Версии JavaScript

JavaScript разработан американцем Бренданом Айком 1995 году. В 1997 году он превратился в стантдарт <span style='color: #47ff40;'> _ECMAScript_ </span>

До 2016 года версии JS назывались <span style='color: #47ff40;'>ES1, ES2, ES3, ES4, ES5, ES6 

C 2017 года версии JS называются по году  <span style='color: #47ff40;'> 2016, 2017, 2018, ...

Из основных ES5 - ES6

Можно услышать такие названия:<span style='color: #47ff40;'> JS, JavaScript, ECMAScript, ES6, Vanilla JavaScript (без библиотек) и т.д. 

###  <span style='color: #ff710a;'> Документация JavaScript

Есть официальная документация - на сайте  ECMA 

Наиболее популярная - это неофициальная документация на сайте [MDM Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript)

###  <span style='color: #ff710a;'> Подключение JavaScript

JavaScript  можно подключить непосредственно в файле html заключив код в тэги 

 <span style='color: #47ff40;'>\<script>

   <span style='color: #47ff40;'> console.log('Мой первый скрипт');

  <span style='color: #47ff40;'>\</script> 
  
  

Или же, что чаще бывает скрипт подключают отдельным файлом перед закрывающим тэгом body

<span style='color: #47ff40;'>\<script src="script.js">\</script>

Пример можно посмотреть в папке <span style='color: #79c6ff;'>00-js-basics


###  <span style='color: #ff710a;'> JavaScript  вне браузера

node.js 

после установки можно проверить <span style='color: #47ff40;'>node -v 

Для запуска достаточно перейти в дирректорию скрипта и  ввести команду в терминале<span style='color: #47ff40;'> __node название_скрипта.js__ 