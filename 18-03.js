// Задание 1
// написать функцию генерации массива
// функция должна принимать: 2 аргумента и генерировать массив от минимального из чисел до
//  максимального (задать 3, 1 или 1, 3) длинна массива, сумма чисел по модулю

// Если задан только 1 аргумент то создать массив от +- этого числа, длину
//  вычислить как заданное число умножить на 2

// Если аргументов вообще нет, создать массив случайной длинны со случайными
// числами от - 1000 до 1000, диапозон длинны от 10  до 29

function ranArr(a, b) {
  var n = a ^ b;
  var array = [];
  if (a != a && b != b) {
    var n = 10 + Math.random() * 19;
    while (array.length < n) {
      var t = parseInt(-1000 + Math.random() * 2000);
      array[array.length] = t;
    }
  } else if (a != a || b != b) {
    a != a ? (n = b - 2 * b) : b != b ? (n = a - 2 * a) : console.log("error");
    len = n * -2;
    while (array.length < len) {
      var t = parseInt(n + Math.random() * (len / 2));
      array[array.length] = t;
    }
  } else {
    while (array.length < n) {
      var t = parseInt(a + Math.random() * (b - a));
      array[array.length] = t;
    }
  }
  return array;
  console.log(array);
}
// console.log(ranArr(+process.argv[2],+process.argv[3]))
// // var n = (a%10)+(b%10);
// // var n = a ^ b;
// console.log(n);

// ===================================================================================
// Задание 2
// Написать код который бы посчитал каких элементов больше:
// 1) четных или не четны
// 2) положительных или отрицательных
// 3) Что больше сумма всех положительных или отрицательных элементов (по модулю)
// 4) Инверитровать массив (1, 2, 3 -> 3, 2, 1)
// Каждый пример оформит отдельным блоком кода (НЕ ФУНКЦИЕЙ)
// и подробно описать каждое действие комментариями !!!

var arrOne = ranArr(+process.argv[2], +process.argv[3]); /* рандомируем массив*/
console.log(arrOne); /* выводим его для проверки*/
// 1) четных или не четныx
var even = 0; /* счетчики  */
var notEven = 0;
for (var i = 0; i < arrOne.length; i++) {
  /* цикл по длине массива*/
  arrOne[i] % 2 == 0
    ? even++
    : notEven++; /*если четное или не четное то ++ к соответствующему счетчику */
} /* сравниваем счетчики и по результату выводим в консоль*/
even > notEven
  ? console.log(`Четных больше ${even} > ${notEven}`)
  : notEven > even
    ? console.log(`Нечетных больше ${notEven} > ${even}`)
    : console.log(`Их поровну`);
// 2) положительных или отрицательных
var pos = 0; /*счетчики */
var neg = 0;
for (var i = 0; i < arrOne.length; i++) {
  /*если больше 0 то ++ в пос, если минус то ++ в нег, 0 не учитываем */
  if (arrOne[i] > 0) {
    pos++;
  } else if (arrOne[i] < 0) {
    neg++;
  }
}
pos > neg /*сравниваем значения */
  ? console.log(`Положительных больше ${pos} > ${neg}`)
  : neg > pos
    ? console.log(`Отрицательных больше ${neg} > ${pos}`)
    : console.log(`Их поровну`);
// 3) Что больше сумма всех положительных или отрицательных элементов (по модулю)
var summPos = 0; /* сюда суммируем положительные или отрицательные элементы */
var summNeg = 0;
for (var i = 0; i < arrOne.length; i++) {
  /* в зависимости от условия суммируем значения элементов массива */
  if (arrOne[i] > 0) {
    summPos += arrOne[i];
  } else if (arrOne[i] < 0) {
    summNeg += arrOne[i];
  }
}
summPos > summNeg /* сравниваем значения и выводим результат*/
  ? console.log(`Сумма положительных больше ${summPos} > ${summNeg}`)
  : notEven > even
    ? console.log(`Сумма отрицательных больше ${summNeg} > ${summPos}`)
    : console.log(`Суммы равны`);
// 4) Инверитровать массив (1, 2, 3 -> 3, 2, 1)
var buff; /*переменная буфер */
for (var i = 0; i < arrOne.length / 2; i++) {
  /*длинну массива делим на 2 что-бы повторно не изменять значения */
  buff = arrOne[i]; /*ложим в буффер первое значение */
  arrOne[i] =
    arrOne[
      arrOne.length - i - 1
    ]; /* присваиваем "первой" ячейке значение "второй" */
  arrOne[
    arrOne.length - i - 1
  ] = buff; /* забираем из буффера значение "первой" ячейки и присваиваем его "второй" ячейке*/
}
console.log(arrOne); /*выводим для сравнения инвертированный массив */
