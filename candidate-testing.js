const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions;
let candidateAnswers;
let correctAnswers;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // Part 1: Minimum Viable Quiz
  candidateAnswer = input.question(question);

}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let grade;
  grade = "Pass";

  // Part 1: Minimum Viable Quiz
  if (candidateAnswer === correctAnswer){
    console.log(grade);
  } else {
    console.log("Sorry, wrong answer.");
  }
}


// return grade;

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  const hello = `Hello ${candidateName} and welcome aboard.`
  console.log(hello)
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};