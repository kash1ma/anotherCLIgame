#!/usr/bin/env node
import readlineSync from 'readline-sync';

import playScmGame from './games/scm.js';
import playProgressionGame from './games/progression.js';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function greetingWithNameReturn() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function chooseGame() {
  console.log('Game 1 is SCM game, game 2 is Progression game');
  const choice = readlineSync.question('Enter the number of the game: ');

  switch (choice) {
    case '1':
      playScmGame();
      break;
    case '2':
      playProgressionGame();
      break;
    default:
      console.log('Invalid choice. Please enter a number between 1 and 2.');
  }
}

function playgame(rules, generateQuestion) {
  const name = greetingWithNameReturn();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generateQuestion();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `${yourAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export { playgame, getRandomNumber };
