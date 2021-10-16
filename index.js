const chalk = require('chalk');
var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your Name ? ");

console.log(chalk.red("Welcome ") + chalk.bold.cyan(userName) + chalk.red.underline("  to Olympics 2021 Quiz"));

var current_score=0;


function play(question,answer){

  var userAnswer = readlineSync.question(chalk.magentaBright(question));
  // console.log(question);
  if(userAnswer===answer){
    console.log(chalk.bgGreenBright.grey("right!!"));
    current_score++;
    console.log(chalk.bgBlueBright.grey("current_score = " + chalk.bold(current_score + " ")));
  }

  else{
    console.log(chalk.bgRedBright("Wrong!!"));
    console.log(chalk.bgBlueBright.grey("current_score = " + chalk.bold(current_score + " ")));
  }

}


var questions=[
  {
    question: "What is the rank of INDIA in tokyo olympics ? \n\
                a  45 \n\
                b  67 \n\
                c  48 \n\
                d  87 \n\ "
                ,
    answer: "c",
  },

  {
    question: "Who won the Olympic gold medal in India for javelin throw ? \n\
                a  neeraj chopra \n\
                b  mirabai chanu \n\
                c  ravi kumar dahiya \n\
                d  PV sindhu \n\ "
                ,
    answer: "a",
  },
  
  
  
  {
    question: "under which wrestling category did Deepak punia represented INDIA at tokyo olympics ? \n\
                a  65 \n\
                b  75 \n\
                c  86 \n\
                d  100 \n\ " ,
    answer: "c",
  },
   {
    question: "under which weight category did Sonam malik represented INDIA at tokyo olympics ? \n\
                a  53\n\
                b  73 \n\
                c  62 \n\
                d  100 \n\ " ,
    answer: "c",
  },
   {
    question: "How many medals India won in Olympics in 2021 ? \n\
                a  5 \n\
                b  7 \n\
                c  8 \n\
                d  10 \n\ " ,
    answer: "b",
  }
  ];

for(var i=0;i<questions.length;i++){
  var ask = questions[i].question;
  var correct_answer= questions[i].answer;
  play(ask,correct_answer);
}

console.log(chalk.bgYellowBright.grey("YAY!! your total score is : " + chalk.bold(current_score + " ")));

if(current_score>=3){
  console.log(chalk.cyan.bold.italic.underline("Congrats!! you have unlocked LEVEL 2"));
}
