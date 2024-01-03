const readline = require('readline-sync');


//Write a program that solicits six numbers from the user and logs a message that 
//describes whether the sixth number appears among the first five numbers.

const askQuestion = (questionNumber) => {
  let userInput = readline.question(`Enter the ${questionNumber} number: `);
  return userInput;
};

const checkNumbers = () => {
  let fiveQuestions = ["1st", "2nd", "3rd", "4th", "5th", "last"];
  let userResponses = [];
  for (let question of fiveQuestions) {
    userResponses.push(askQuestion(question));
  }
  let comparison = userResponses.slice(0, 5);
  let last = userResponses[5];
  if (comparison.some((element) => element === last)) {
    return `The number ${last} appears in ${comparison.join(", ")}.`;
  }

  return `The number ${last} does not appear in ${comparison.join(", ")}.`;
};

console.log(checkNumbers());