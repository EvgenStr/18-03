// 3. Написать функцию генерации массива случайно длинны и заполненного случайными числами 
// (параметры функции определить самостоятельно)

function randomArr(){
    var n = (Math.random() * 100);
var array = [];
while (array.length < n) {
    var t = parseInt(Math.random() * 100);
    array[array.length] = t;
}
return array;
}

var randomRes = randomArr();
console.log(randomRes);