// 4. Написать функции  для (за входной массив взять случайный из задания 3):
// Посчитать среднее+
// сумму всех элементов+
// Разность всех элементов+
// Количество четных / нечетных элементов+
// Минимум / Максимум
// Количество положительных и отрицательных элементов+

function randomArr() {
  var n = Math.random() * 15;
  var array = [];
  while (array.length < n) {
    var t = parseInt(Math.random() * 100);
    array[array.length] = t;
  }
  return array;
}

var randomRes = randomArr();
console.log(randomRes);

// Посчитать среднее
// сумму всех элементов
function averageArr(a) {
  var summ = 0;
  var k = 0;
  for (var i = 0; i < a.length; i++) {
    summ += a[i];
    k++;
  }
  var averageSumm = `Сумма элементов = ${summ}, среднее ${summ / k}`;
  // console.log(`Сумма элементов = ${summ}, среднее ${summ / k}`);
  return averageSumm;
}
console.log(averageArr(randomRes));
// Разность всех элементов
function difference(a) {
  var diff = 0;
  for (var i = 1; i < a.length; i++) {
    diff += a[i - 1] - a[i];
  }
  var diffRes=`Разность элементов = ${diff}`;
  return diffRes;
}
console.log(difference(randomRes));
// Количество положительных и отрицательных элементов
function posNeg(a){
var pos = 0,
  neg = 0;
for (var i = 0; i < a.length; i++) {
  if (a[i] > 0) {
    pos++;
  } else {
    neg++;
  }
}
var pos=`Количество положительных  ${pos}, количество отрицательных ${neg}`
return pos;
}
console.log(posNeg(randomRes));
// Количество четных / нечетных элементов
function evenNot(a){
var even = 0,
  odd = 0;
for (var i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
var evenRes=`Количество четных  ${even}, количество не четных ${odd}`;
return evenRes;
}
console.log(evenNot(randomRes));
// Минимум / Максимум
function maxMin(a){
var max = 0;
for (var i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
}
var min = max;
for (var i = 0; i < a.length; i++) {
  if (a[i] < min) {
    min = a[i];
  }
}
var minMaxRes=`MAX  ${max}, MIN ${min}`;
return minMaxRes;
}
console.log(maxMin(randomRes));