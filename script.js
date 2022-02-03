"use strict";

//"Загадывание случайного числа от 1 до 100"
const guessNumber = function (num) {
  let userNumber = 8;

  num = +prompt("Угадай число от 1 до 100");

  if (num === null || num === 0) {
    alert("Игра окончена");
  }
  if (!isNumber(num)) {
    alert("Введи число!");
    guessNumber();
  }
  if (num > userNumber && num > 0) {
    alert("Загаданное число меньше");
    guessNumber();
  }
  if (num < userNumber && num > 0) {
    alert("Загаданное число больше");
    guessNumber();
  }
  if (num === userNumber) {
    alert("Поздравляю, Вы угадали!!!");
  }
};

function isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

guessNumber();
