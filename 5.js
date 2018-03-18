// 5*. Написать функцию которая принимает 2 значения,
//  массив и число и подсчитает сколько таких чисел содержит массив

function randomArr() {
  var n = Math.random() * 15;
  var array = [];
  while (array.length < n) {
    var t = parseInt(Math.random() * 10);
    array[array.length] = t;
  }
  return array;
}
var randomRes = randomArr();
console.log(randomRes);
// A=array; B = Number
function countArr(a, b) {
  var j = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] == b) {
      j++;
    }
  }
  return j;
}
var abc = countArr(randomRes, parseInt(process.argv[2]));
console.log(`Таких чисел содержит массив = ${abc}`);