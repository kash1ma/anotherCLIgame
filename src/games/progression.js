import { playgame, getRandomNumber } from '../index.js';
// Function to generate an arithmetic progression with a missing element
function generateProgression() {
    const progressionLength = Math.floor(Math.random() * 6) + 5; // Случайная длина от 5 до 10
    const progression = [];
    const firstEl = getRandomNumber(1, 20); // Случайное число для первого элемента
    const ratio = getRandomNumber(2, 5); // Случайное число для множителя
  
    for (let i = 0; i < progressionLength; i += 1) {
      progression.push(firstEl * Math.pow(ratio, i)); // Добавляем элементы прогрессии
    }
  
    return progression;
  }

function generateQuestion() {
  const progression = generateProgression();
  const missingNum = getRandomNumber(0, progression.length - 1);
  const correctAnswer = `${progression[missingNum]}`;
  progression[missingNum] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}

export default function playProgressionGame() {
  const rules = 'What number is missing in the progression?';
  playgame(rules, generateQuestion);
}