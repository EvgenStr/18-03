// 2 .Написать функцию которая принимала бы 3 параметра, число и диапазон значений, 
// результатом должно быть массив чисел из
// диапазона которые делят заданное число  без остатка
// G(3, 1, 3);
// 1 2 3 наши значения
// результат 1 3
// A - диапазон макс
// B - диапазон минимум
// C - число на которое делим без остатка

function two(a, b, c) {
  var twob = [];

  for (var i = 0; i <= a; i++) {
    twob[i] = i+b;
  }
  //   console.log(twob);
  var twoRes = [];
  var k = 0;
  for (i = 0; i < a; i++) {
    if ( twob[i]%c == 0) {
      twoRes[k] = twob[i];
      k++;
    }
    // console.log(twoRes);
  }
  return twoRes;
}

var abc = two(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4]));
console.log(abc);

// var a = 3;
// var b = 1;
// var c = 3;

// var temp = [];
// for (var i = 1; i <= a; i ++) {
//   temp[i-1] = i;
// }
// console.log(temp);

// function two(a, b, c) {
//     var twob = [];
//     for (var i = 0; i <= a; i +=b) {
//       twob[i - 1] = i;
//     }
//     console.log(twob);
//     var twoRes = [];
//     var k = 0;
//     for (i = 0; i < a; i += b) {
//       if (c % twob[i] == 0) {
//         twoRes[k] = twob[i];
//         k++;
//       }
//       console.log(twoRes);
//     }
//     return twoRes;
//   }

//   var abc = two(3, 1, 3);
//   console.log(abc);
