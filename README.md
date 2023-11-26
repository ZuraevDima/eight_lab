___
# МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ПРОФЕСИОНАЛЬНОГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»
### <p align="center">Лабораторная работа №8 «JavaScript».</p> 
#### <br><p align="right">Подготовил студент направления подготовки 01.03.02 «Прикладная математика и информатика»<br> Института естественных наук и техносферной безопасности<br> Зураев Дмитрий Бакенович.</p><br><p align="right">Научный руководитель:<br> Соболев Евгений Игоревич</p><br> <p align="center">Южно-Сахалинск 2023 г.</p>
___
### <p align="center">Введение</p>
<p align="justify"> <b>JavaScript</b> является одним из самых популярных языков программирования, применяемых веб-разработкой. Он обладает мощными возможностями для работы с функциями, что делает его незаменимым инструментом для создания интерактивных и динамических веб-приложений.
</p>

### <p align="center">Цели</p>
<p align="justify">Ознакомиться с основными концепциями и возможностями JavaScript в области работы с функциями. Функции в JavaScript являются одним из ключевых строительных блоков языка, позволяющих организовывать код в модули и повторно использовать его.</p>

### <p align="center">Задачи</p>
<p align="justify">Применить технологию JS.</p>

____________________
## <p align="center">_Решение_</p>

1. Напишите оператор `if`, такой, чтобы в качестве выражения в скобках у него были значения `true`, `false` (Например, `if( true )` или `if( false )`). Посмотрите как работает этот оператор, поместив какую-нибудь команду после круглых скобок (Например, `console.log(1)`).
```javascript
function one(){
    var a = 5;
    if(a == 5)
        console.log("yes, a = 5");
    if(a != 5)
        console.log("no, a != 5");
}
```
2. Создайте переменные `m` и `n`. В `m` поместите произвольное числовое значение. Напишите оператор ветвления `if` так, чтобы если `m` было больше 50, то в переменную `n` помещалось слово «большое», иначе — слово «маленькое».
```javascript
function two(){
    var m = 100;
    var n;
    if(m > 50)
        n = "большое";
    else
        n = "маленькое";
        console.log(n);
}
```
3. Определите сколько раз выполнится цикл `while`? Примечание: это можно сделать прочитав скрипт или запустив его консоли браузера.
` var i = 2;
while( i < 9 ){
 	  console.log( i++ );
}`

```javascript
function three(){
    var i = 2;
    while( i < 9 ){
        console.log( i++ );
    } //семь раз. [2;8]
}
```
4. Напишите скрипт, который используя оператор `while` выведет все числа от 45 до 67.
```javascript
function four(){
    var i = 45;
    while(i < 68){
        console.log(i++);
    }
}
```
5. Напишите скрипт, который используя оператор `while` выведет все числа от 45 до 670, кратные 10.
```javascript
function five(){
            var i = 45;
            while(i < 671){
                if(i % 10 == 0)
                    console.log(i);
                i++;
            }
        }
```
6. Напишите скрипт, который используя оператор `for` выполнит два предыдущих задания.
```javascript 
function six(){
            for(var i = 45; i < 68; i++)
                console.log(i);

            for(var i = 45; i < 671; i++)
                if(i % 10 == 0)
                    console.log(i);
        }
```
7. Переменная `n` хранит целое число от 0 до 9. Используя оператор `switch`, написать скрипт, который в зависимости от числа будет выводить слово (Например, если `n` равно 3, то будет выводиться слово «три»). `var n = 5;
switch( n ){
 //Напишите тут свой код
}`
```javascript 
function seven(){
            var n = 3;
            switch(n){
                case 0:
                    console.log("Ноль");
                    break;
                case 1:
                    console.log("Один");
                    break;
                case 2:
                    console.log("Два");
                    break;
                case 3:
                    console.log("Три");
                    break;
                case 4:
                    console.log("Четыре");
                    break;
                case 5:
                    console.log("Пять");
                    break;
                case 6:
                    console.log("Шесть");
                    break;
                case 7:
                    console.log("Семь");
                    break;
                case 8:
                    console.log("Восемь");
                    break;
                case 9:
                    console.log("Девять");
                    break;
                default:
                    console.log("error");
            }
        }
```
8. Используя `document.write()` и любую из циклических конструкций выведите  десять одинаковых изображений (надо выводить `<img src="..." alt="..." />)`)
```javascript
function eight(){
            for(var i = 0; i < 10; i++)
            {
                document.write('<img src="TheEarth.jpg" alt="The Earth">');
            }
        }
```
9. В переменных `size` и `unit` хранятся размер и единицы измерения информации 120 и «Кб» соответственно. Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) и 1килобайт равен 1024 байта, найти количество байт в `size`.
```javascript
function nine(){
        var size = 120;
        var unit = "Гб";
        switch(unit){
            case "Кб":
                size *= 1024;
                console.log(size + " байт");
                break;
            case "Мб":
                size = 120*1024*1024;
                console.log(size + " байт");
                break;
            case "Гб":
                size = 120*1024*1024*1024;
                console.log(size + " байт");
                break;
            default:
                console.log("error");
            }
        }
        // if(unit == "Кб")
        //     size *= 1024;
        // else if (unit == "Мб")
        //     size = 120*1024*1024;
        // else if (unit == "Гб")
        //     size = 120*1024*1024*1024;
        // console.log(size);

```
10. Постройте при помощи циклов JavaScript скрипт для календаря на HTML. Примечание: выполнить задание для одного месяца, используя HTML-элемент `table`
```javascript
 //ten
        function createCalendar(){
            let style = "<style> table,th,td,caption { border: 1px solid black;\n border-collapse: collapse;}</style>"
            let str = '<table><caption>Октябрь</caption><tr>';
            for(let i = 1; i<=7; i++)
            {
                switch(i){
                    case 1:
                        str+="<th>Пн</th>\n";
                        break;
                    case 2:
                        str+="<th>Вт</th>\n";
                        break;
                    case 3:
                        str+="<th>Ср</th>\n";
                        break;
                    case 4:
                        str+="<th>Чт</th>\n";
                        break;
                    case 5:
                        str+="<th>Пт</th>\n";
                        break;
                    case 6:
                        str+="<th>Сб</th>\n";
                        break;
                    case 7:
                        str+="<th>Вс</th>\n";
                        break;   
                }
            }
            str+="</tr>"
            for(let i = 1; i <= 31; i++)
            {
                str+=`<td>${i}</td>`;
                if(i % 7 == 0 ) str +="</tr><tr>";
                if(i == 31) str += "</tr>"
            }
            str+="</table>";
            document.write(style + str);
        }
```
11. Напишите функцию `hello1()`, которая при вызове будет возвращать строку `«Привет, JavaScript!»`.
```javascript
function hello1(){
            return "Привет, JavaScript!";
        }
function testEleven(){
            console.log(hello1());
        }
```
12. Напишите функцию `hello2()`, которая при вызове будет принимать переменную `name` (например, `«Василий»`) и выводить строку (в нашем случае `«Привет, Василий»`).  В случае отсутствующего аргумента выводить `«Привет, гость»`
```javascript
function hello2(name){
    if(name = "")
        return "Привет, гость"
    return "Привет, " + name;
}
function testTwelve(){
            console.log(hello2("Дима"));
        }
```
13. Напишите функцию `mul(n,m)`, которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.
```javascript
function mul(n, m){
    return n*m;
}
function testThirteen(){
            console.log(mul(4,5));
        }
```
14. Создайте функцию `repeat(str, n)`, которая возвращает строку, состоящую и n повторений строки `str`. `n` — по умолчанию 2, `str` — пустая строка
```javascript
  function repeat(str, n){
            var stroka = "";
            for(var i = 0; i < n; i++){
                stroka += str;
            }
            return stroka;
        }
        function testFourteen(){
            console.log(repeat("HELLO ", 5));
        }
```
15. Создайте функцию `rgb()`, которая будет принимать три числовых аргумента и возвращать строку вида `«rgb(23,100,134)»`. Если аргументы не заданы, считать их равными нулю. Не проверять переменные на тип данных
```javascript
function rgb(f=0,s=0,t=0){
            return `rgb(${f},${s},${t})`;
        }
        function testFifteen(){
            console.log(rgb(20,28,228));
        }
```
16. Создайте функцию `avg()`, которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).
```javascript
function avg() {
            if (arguments.length === 0) {
                return 0; 
            }
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum / arguments.length;
        }
        function textSixteen(){
            console.log(avg(2, 4, 6)); // Вывод: 4
            console.log(avg(5, 4, 2)); // Вывод: 3.66
            console.log(avg()); // Вывод: 0
        }
```
17. Создайте функцию `m(a,b)` оболочку для `mul()`. `m()` должна принимать два аргумента а возвращать результат работы `mul()` с этими двумя аргументами После выполнения задания поэкспериментируйте, создайте функцию `log()`, которая будет принимать одно значение, а вызывать  `console.log()` с этим значением.
```javascript
function m(a,b){
            mul(a,b);
        }
        function log(str)
        {
            console.log(str);
        }
        function testSeventeen(){
            testThirteen();
        }
```
18. Напишите функцию `operation(m,n,o)`, в которой `m` и `n` — числовые переменные, а `o` — функциональный литерал, который берет два аргумента и выполняет математическую операцию над ними 
```javascript
function operation(m,n,o){
            switch(o)
            {
                case '+':
                    console.log(m + n);
                    break; 
                case '-':
                    console.log(m - n);
                    break; 
                case '*': 
                    console.log(m * n);
                    break;
                case '/':
                    console.log(m / n);
                    break;
                break;
            }
        }
        function testEighteen(){
            operation(7,111,"*");
        }
```
19. Напишите функцию `addN(n)`, которая вернёт другую функцию. Возвращенная функция должна складывать получаемый аргумент с аргументом `n` возвращающей функции. 
```javascript
function addN(n){
            return function(a){
                return a + n;
            }
        }
        function testNineteen(){
            const add5 = addN(5);
            console.log(add5(20));
        }
```
20. Напишите функцию `words()`,  которая в зависимости от переданного в нее целочисленного аргумента `n`, будет выводить слово `«товар»` в нужно форме (`«12 товаров»`, но `«22 товара»`). По умолчанию аргумент `d` должен иметь значение `0`
```javascript
  function words(n, word = 'товар') {
            if (n === 0) {
            return `0 ${word}ов`;
            } else if (n === 1) {
            return `1 ${word}`;
            } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
            return `${n} ${word}а`;
            } else {
            return `${n} ${word}ов`;
            }
        }
        function testTwenty(){
            console.log(words(12));
        }
```
### Файл index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<body>
    <script>
        function one(){
            var a = 5;
            if(a == 5)
                console.log("yes, a = 5");
            if(a != 5)
                console.log("no, a != 5");
        }
        function two(){
            var m = 100;
            var n;
            if(m > 50)
                n = "большое";
            else
                n = "маленькое";
            console.log(n);
        }
        function three(){
            var i = 2;
            while( i < 9 ){
                console.log( i++ );
            } //семь раз. [2;8]
        }
        function four(){
            var i = 45;
            while(i < 68){
                console.log(i++);
            }
        }
        function five(){
            var i = 45;
            while(i < 671){
                if(i % 10 == 0)
                    console.log(i);
                i++;
            }
        }
        function six(){
            for(var i = 45; i < 68; i++)
                console.log(i);

            for(var i = 45; i < 671; i++)
                if(i % 10 == 0)
                    console.log(i);
        }
        function seven(){
            var n = 3;
            switch(n){
                case 0:
                    console.log("Ноль");
                    break;
                case 1:
                    console.log("Один");
                    break;
                case 2:
                    console.log("Два");
                    break;
                case 3:
                    console.log("Три");
                    break;
                case 4:
                    console.log("Четыре");
                    break;
                case 5:
                    console.log("Пять");
                    break;
                case 6:
                    console.log("Шесть");
                    break;
                case 7:
                    console.log("Семь");
                    break;
                case 8:
                    console.log("Восемь");
                    break;
                case 9:
                    console.log("Девять");
                    break;
                default:
                    console.log("error");
            }
        }
        function eight(){
            for(var i = 0; i < 10; i++)
            {
                document.write('<img src="TheEarth.jpg" alt="The Earth">');
            }
        }
        function nine(){
        var size = 120;
        var unit = "Гб";
        switch(unit){
            case "Кб":
                size *= 1024;
                console.log(size + " байт");
                break;
            case "Мб":
                size = 120*1024*1024;
                console.log(size + " байт");
                break;
            case "Гб":
                size = 120*1024*1024*1024;
                console.log(size + " байт");
                break;
            default:
                console.log("error");
            }
        }
        // if(unit == "Кб")
        //     size *= 1024;
        // else if (unit == "Мб")
        //     size = 120*1024*1024;
        // else if (unit == "Гб")
        //     size = 120*1024*1024*1024;
        // console.log(size);

        //ten
        function createCalendar(){
            let style = "<style> table,th,td,caption { border: 1px solid black;\n border-collapse: collapse;}</style>"
            let str = '<table><caption>Октябрь</caption><tr>';
            for(let i = 1; i<=7; i++)
            {
                switch(i){
                    case 1:
                        str+="<th>Пн</th>\n";
                        break;
                    case 2:
                        str+="<th>Вт</th>\n";
                        break;
                    case 3:
                        str+="<th>Ср</th>\n";
                        break;
                    case 4:
                        str+="<th>Чт</th>\n";
                        break;
                    case 5:
                        str+="<th>Пт</th>\n";
                        break;
                    case 6:
                        str+="<th>Сб</th>\n";
                        break;
                    case 7:
                        str+="<th>Вс</th>\n";
                        break;   
                }
            }
            str+="</tr>"
            for(let i = 1; i <= 31; i++)
            {
                str+=`<td>${i}</td>`;
                if(i % 7 == 0 ) str +="</tr><tr>";
                if(i == 31) str += "</tr>"
            }
            str+="</table>";
            document.write(style + str);
        }
        //eleven
        function hello1(){
            return "Привет, JavaScript!";
        }
        function testEleven(){
            console.log(hello1());
        }
        //twelve
        function hello2(name){
            if(!name)
                return "Привет, гость"
            return `Привет, ${name}`;
        }
        function testTwelve(){
            console.log(hello2("Дима"));
        }   
        //thirteen
        function mul(n, m){
            return n*m;
        }
        function testThirteen(){
            console.log(mul(4,5));
        }
        //fourteen 
        function repeat(str, n){
            var stroka = "";
            for(var i = 0; i < n; i++){
                stroka += str;
            }
            return stroka;
        }
        function testFourteen(){
            console.log(repeat("HELLO ", 5));
        }
        //fifteen
        function rgb(f=0,s=0,t=0){
            return `rgb(${f},${s},${t})`;
        }
        function testFifteen(){
            console.log(rgb(20,28,228));
        }
        //sixteen
        function avg() {
            if (arguments.length === 0) {
                return 0; 
            }
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum / arguments.length;
        }
        function textSixteen(){
            console.log(avg(2, 4, 6)); // Вывод: 4
            console.log(avg(5, 4, 2)); // Вывод: 3.66
            console.log(avg()); // Вывод: 0
        }
        //seventeen
        function m(a,b){
            mul(a,b);
        }
        function log(str)
        {
            console.log(str);
        }
        function testSeventeen(){
            testThirteen();
        }
        //eighteen
        function operation(m,n,o){
            switch(o)
            {
                case '+':
                    console.log(m + n);
                    break; 
                case '-':
                    console.log(m - n);
                    break; 
                case '*': 
                    console.log(m * n);
                    break;
                case '/':
                    console.log(m / n);
                    break;
                break;
            }
        }
        function testEighteen(){
            operation(7,111,"*");
        }
        //nineteen
        function addN(n){
            return function(a){
                return a + n;
            }
        }
        function testNineteen(){
            const add5 = addN(5);
            console.log(add5(20));
        }
        //twenty
        function words(n, word = 'товар') {
            if (n === 0) {
            return `0 ${word}ов`;
            } else if (n === 1) {
            return `1 ${word}`;
            } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
            return `${n} ${word}а`;
            } else {
            return `${n} ${word}ов`;
            }
        }
        function testTwenty(){
            console.log(words(12));
        }
        function clearC(){
            console.clear();
        } 
    </script>
    <p><button onclick="clearC()"><b>Очистить консоль</b></button></p>
    <button onclick="one()">Задание 1</button>
    <button onclick="two()">Задание 2</button>
    <button onclick="three()">Задание 3</button>
    <button onclick="four()">Задание 4</button>
    <button onclick="five()">Задание 5</button><br><br>
    <button onclick="six()">Задание 6</button>
    <button onclick="seven()">Задание 7</button>
    <button onclick="eight()">Задание 8</button>
    <button onclick="nine()">Задание 9</button>
    <button onclick="createCalendar()">Задание 10</button><br><br>
    <button onclick="testEleven()">Задание 11</button>
    <button onclick="testTwelve()">Задание 12</button>
    <button onclick="testThirteen()">Задание 13</button>
    <button onclick="testFourteen()">Задание 14</button>
    <button onclick="testFifteen()">Задание 15</button><br><br>
    <button onclick="textSixteen()">Задание 16</button>
    <button onclick="testSeventeen()">Задание 17</button>
    <button onclick="testEighteen()">Задание 18</button>
    <button onclick="testNineteen()">Задание 19</button>
    <button onclick="testTwenty()">Задание 20</button>
</body>
</html>
``` 
[Kata1](https://www.codewars.com/kata/596fd97f65ad2fc072000037)
```javascript
class Converter {
  constructor(size, unit){
     this.size = size;
     this.unit = unit;
  }
  roundNumber(num) {
    if (num % 1 === 0) {
      return num; 
    } else { 
      const roundedValue = (Math.floor(num * 1000) / 1000).toFixed(3);
      return parseFloat(roundedValue);
    }
  }
  toB(){
    switch(this.unit){
        case "KB":
          this.unit = "B";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024)} ${this.unit}`;
          break;
        case "MB":
          this.unit = "B";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024*1024)} ${this.unit}`;
          break;
        case "GB":
          this.unit = "B";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024*1024*1024)} ${this.unit}`;
          break;
        case "TB":
          this.unit = "B";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024*1024*1024*1024)} ${this.unit}`;
          break;
        default:
          this.size = this.size;
    }
    this.unit = "B";
  }
  toKB(){
    switch(this.unit){
        case "B":
          this.unit = "KB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024)} ${this.unit}`; 
          break;
        case "MB":
          this.unit = "KB";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024)} ${this.unit}`;
          break;
        case "GB":
          this.unit = "KB";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024*1024)} ${this.unit}`;
          break;
        case "TB":
          this.unit = "KB";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024*1024*1024)} ${this.unit}`;
          break;
        default:
          this.size = this.size;
    }
  }
  toMB(){
    switch(this.unit){
        case "B":
          this.unit = "MB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024/1024)} ${this.unit}`;
          break;
        case "KB":
          this.unit = "MB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024)} ${this.unit}`;
          break;
        case "GB":
          this.unit = "MB";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024)} ${this.unit}`;
          break;
        case "TB":
          this.unit = "MB";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024*1024)} ${this.unit}`;
          break;
        default:
          this.size = this.size;
    }
  }
  toGB(){
    switch(this.unit){
        case "B":
          this.unit = "GB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024/1024/1024)} ${this.unit}`;
          break;
        case "KB":
          this.unit = "GB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024/1024)} ${this.unit}`;
          break;
        case "MB":
          this.unit = "GB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024)} ${this.unit}`;
          break;
        case "TB":
          this.unit = "GB";
          this.size = `${this.roundNumber(parseFloat(this.size)*1024)} ${this.unit}`;
          break;
        default:
          this.size = this.size;
    }
  }
  toTB(){
    switch(this.unit){
        case "B":
          this.unit = "TB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024/1024/1024/1024)} ${this.unit}`;
          break;
        case "KB":
          this.unit = "TB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024/1024/1024)} ${this.unit}`;
          break;
        case "MB":
          this.unit = "TB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024/1024)} ${this.unit}`;
          break;
        case "GB":
          this.unit = "TB";
          this.size = `${this.roundNumber(parseFloat(this.size)/1024)} ${this.unit}`;
          break;
        default:
          this.size = this.size;
    }
  }

```
[Kata2](https://www.codewars.com/kata/5925138effaed0de490000cf)
```javascript
function tiaosheng(failedCount){
  let jump = 0;
  if (failedCount.length === 0) 
    jump = 60;
  else {
    let time = 0;
    for (let i = 0; i < failedCount.length; i++) {
      if (failedCount[i] + 3 * (i + 1) >= 63) 
        break;
      time = failedCount[i] + 3 * (i + 1);
      jump = failedCount[i];
    }
    if (time < 60) 
      jump = jump + (60 - time)
  }
  return jump;
}
```
[Kata3](https://www.codewars.com/kata/59269e371a640c0e98000085)
```javascript
function xPlusY(n) {
    let count = 0
    n = n.split('')
    
    for (let card = 0; card < n.length - 1; card++) {
        if (n[card] == 1) {
            count++
            n[card] = '0'
          
            if(n[card + 1] == 1)
              n[card + 1] = '0'
            else
              n[card + 1] = '1'
        }
    }
    if(n[n.length - 1] == 1)
      return count+=1;
    else 
      return count
}
```
[Kata4](https://www.codewars.com/kata/5913ffb2cb1475215c000039)
```javascript
function countTriangles(n){
  if(n % 2 == 1)
    return (6 * n * n * n + 9 * n * n + 2 * n - 1) / 2;
  else
    return (6 * n * n * n + 9 * n * n + 2 * n) / 2;  
}
```
## <p align="center">_Вывод_</p>
В ходе выполнения данной лабораторной работы я ознакомился с функциями в JavaScript. Я изучил, как объявлять функции, передавать аргументы и возвращать значения.