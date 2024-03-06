#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playScmGame from './scm.js';
import playProgressionGame from './progression.js';

export default function chooseGame() {
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
