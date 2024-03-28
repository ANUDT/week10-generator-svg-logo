
class Question {
    constructor(question, options, correctAnswer) {
      this.question = question;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    displayQuestion() {
      console.log(this.question);
      this.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
      });
    }
  
    isCorrect(answer) {
      return answer === this.correctAnswer;
    }
  }
  
  module.exports = Question;



const Question = require(`./questions.js`);

const question1 = new Question(
"What is the loge shape?"
["square", "circle"],
);

const question2 = new Question(
"How many shapes are there??"
["1", "2"],
);

const question3 = new Question(
"What color is the shape?"
["red", "blue"],
);

const question3 = new Question(
"What is color has the letters?"
["white", "black"],
);
    
question1.displayQuestion();
question2.displayQuestion();
question3.displayQuestion();
question4.displayQuestion();

const answer1 = 1; 
console.log("Question 1:", question1.isCorrect(answer1) ? "Correct" : "Incorrect");

const answer2 = 2; 
console.log("Question 2:", question2.isCorrect(answer2) ? "Correct" : "Incorrect");
