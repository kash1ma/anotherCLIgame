import { playgame, getRandomNumber } from '../index.js';

function scmOfThreeNumbers(a, b, c) {
  // Находим НОК для первых двух чисел
  const lcmOfAB = scm(a, b);
  // Затем находим НОК для результата и третьего числа
  return scm(lcmOfAB, c);
}

// Функция для нахождения НОК двух чисел
function scm(a, b) {
  // Находим НОД для двух чисел
  const gcdResult = gcd(a, b);
  // НОК равен произведению чисел, деленному на НОД
  return (a * b) / gcdResult;
}

// Функция для нахождения НОД двух чисел
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function generateQuestion() {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const number3 = getRandomNumber(1, 50);
  const question = `${number1} ${number2} ${number3}`;
  const correctAnswer = `${scmOfThreeNumbers(number1, number2, number3)}`;
  return [question, correctAnswer];
}

export default function playScmGame() {
  const rules = 'Find the smallest common multiple of given numbers.';
  playgame(rules, generateQuestion);
}
