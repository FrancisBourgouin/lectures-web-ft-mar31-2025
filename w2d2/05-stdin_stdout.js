// STDIN => Standard Input
// STDOUT => Standard Output

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const surveyData = {
  q1: {
    question: "Are you confused about asynchronous code?  ",
    answer: "",
  },
  q2: {
    question:
      "Will you ever achieve a complete understanding of code, life, and everything?  ",
    answer: "",
  },
  q3: {
    question: "Are you a tea person or a coffee person?  ",
    answer: "",
  },
};

const replyAndAddAnswer = (questionId, answer) => {
  const comments = [`Hm, interesting`, `Oh wow!`, `Oh.`];
  const randomIndex = Math.floor(Math.random() * 3);

  console.log(comments[randomIndex]);
  surveyData[questionId].answer = answer;
};

rl.question(surveyData.q1.question, (data) => {
  replyAndAddAnswer("q1", data);

  rl.question(surveyData.q2.question, (data) => {
    replyAndAddAnswer("q2", data);

    rl.question(surveyData.q3.question, (data) => {
      replyAndAddAnswer("q3", data);

      console.log("Processing your results.....");
      setTimeout(() => {
        console.log(surveyData);
        rl.close(); // Close the readline interface
      }, 2000);
    });
  });
});
