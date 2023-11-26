//one
var a = 5;
if(a == 5)
    console.log("yes, a = 5");
if(a != 5)
    console.log("no, a != 5");
//two
var m = 10;
var n;
if(m > 50)
    n = "большое";
else
    n = "маленькое";
console.log(n);
//three
var i = 2;
while( i < 9 ){
 	  console.log( i++ );
} //семь раз. [2;8]
//four
var i = 45;
while(i < 68){
    console.log(i++);
}
//five
var i = 45;
while(i < 671){
    if(i % 10 == 0)
        console.log(i);
    i++;
}
//six(4 and 5)
for(var i = 45; i < 68; i++){
    console.log(i);
}
for(var i = 45; i < 671; i++){
    if(i % 10 == 0)
        console.log(i);
}
//seven
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
//eight
for(var i = 0; i < 10; i++)
{
document.write('<img src="TheEarth.jpg" alt="The Earth">');
}
//nine
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
// if(unit == "Кб")
//     size *= 1024;
// else if (unit == "Мб")
//     size = 120*1024*1024;
// else if (unit == "Гб")
//     size = 120*1024*1024*1024;
// console.log(size);

//ten
function createCalendar(){
    let style = "<style>\n table,th,td,caption \n{\n border: 1px solid black;\n border-collapse: collapse; \n}\n</style>\n"
    let str = '<table>\n<caption>Октябрь</caption>\n<tr>\n';
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
    str+="</tr>\n"
    for(let i = 1; i <= 31; i++)
    {
        str+=`<td>${i}</td>\n`;
        if(i % 7 == 0 ) str +="</tr>\n<tr>\n";
        if(i == 31) str += "</tr>"
    }
    str+="</table>";
    document.write(style + str);
}
//eleven
function hello1(){
    return "Привет, JavaScript!";
}
//twelve
function hello2(name){
    if(name = "")
        return "Привет, гость"
    return "Привет, " + name;
}
//thirteen
function mul(n, m){
    return n*m;
}
//fourteen 
function repeat(str, n){
    var stroka = "";
    for(var i = 0; i < n; i++){
        stroka += str;
    }
    return stroka;
}
//fifteen
function rgb(f=0,s=0,t=0){
    return `rgb(${f},${s},${t})`;
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
// Пример использования:
// console.log(avg(2, 4, 6)); // Вывод: 4
// console.log(avg(1, 3, 5, 7, 9)); // Вывод: 5
// console.log(avg()); // Вывод: 0

//seventeen
function m(a,b){
    mul(a,b);
}
function log(str)
{
    console.log(str);
}
//eighteen
function operation(m,n,o){
    return o(m,n);
}
//nineteen
function addN(n){
    return function(a){
        return a+n;
    }
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