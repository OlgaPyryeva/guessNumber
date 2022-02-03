"use strict";

let tryGuess = 10;
let userNumber;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isNumber(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

const guessNumber = function (num) {
  num = +prompt("Угадай число от 1 до 100");
  if (tryGuess == 10) {
    userNumber = getRandomNumber(1, 100);
  }

  if (num === null || num === 0 || num == "") {
    alert("Игра окончена");
  }
  if (tryGuess == 0) {
    if (confirm("Попытки закончились, хотите сыграть еще?") == true) {
      tryGuess = 10;
      guessNumber();
    }
  }
  if (!isNumber(num) && tryGuess > 0) {
    tryGuess--;
    alert(`Введи число! Осталось попыток ${tryGuess}`);
    guessNumber();
  }
  if (num > userNumber && num > 0 && tryGuess > 0) {
    tryGuess--;
    alert(`Загаданное число меньше, осталось попыток ${tryGuess}`);
    guessNumber();
  }
  if (num < userNumber && num > 0 && num != "" && num != null && tryGuess > 0) {
    tryGuess--;
    alert(`Загаданное число больше, осталось попыток ${tryGuess}`);
    guessNumber();
  }
  if (num === userNumber && tryGuess > 0) {
    let repeat = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
    if (repeat == true) {
      tryGuess = 10;
      guessNumber();
    }
  }
};

guessNumber();

console.log(userNumber);
