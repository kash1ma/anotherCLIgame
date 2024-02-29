#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export default function getUserName() {
  // Use the `question` function to prompt the user for input
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}