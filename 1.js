// 1. Написать функцию которая принимала бы 2 параметра (число и символ, порядок может быть любой)
// функция должна вернуть строку из символов заданной длинны.
// G("a", 2); // результат "аа"
// G(4, "a"); // результат "aaaa"
// G("a", "b"); // Error

function one(a, b) {
  var one = "";
  if (isNaN(a)==isNaN(b)) {
    one += "Error";
  } else if (isNaN(a)) {
    for (var i = 1; i <= b; i++) {
      one += a;
    }
  } else if (isNaN(b)) {
    for (var i = 1; i <= a; i++) {
      one += b;
    }
  }
  return one;
}
var res = one(process.argv[2], process.argv[3]);
console.log(res);
console.log(isNaN(process.argv[2]), isNaN(process.argv[3]))
