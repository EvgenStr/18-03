// 1. Написать функцию которая принимала бы 2 параметра (число и символ, порядок может быть любой)
// функция должна вернуть строку из символов заданной длинны.
// G("a", 2); // результат "аа"
// G(4, "a"); // результат "aaaa"
// G("a", "b"); // Error

function one(a, b) {
  var one = "";
  if (isNaN(a && b)) {
    one += "Error";
  } else if (isNaN(b)) {
    for (var i = 0; i <= a; i++) {
      one += b;
    }
  } else if (isNaN(a)) {
    for (var i = 0; i <= b; i++) {
      one += a;
    }
  }
  return one;
}
var res = one("a", 2);
console.log(res);
