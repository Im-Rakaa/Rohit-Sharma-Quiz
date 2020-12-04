var readlineSync = require('readline-sync');

var userInput = readlineSync.question('May i have your name??');
console.log('Hi ' + userInput +'!')
console.log("Welcome as being a Rohit Sharma fan, let's see how would you know him!!")
var score = 0;
var totalQuestions = 8;
function play(question,answer){
  var userInput = readlineSync.question(question);
    if(userInput === answer){
    console.log("Right Answer Buddy!!");
    score += 1;
    console.log('Current Score: ',score);
  }else{
    console.log("Oops Wrong answer dude!");
    score -= 1;
    console.log('Current Score: ',score);
  }
  console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ ");
}

var questions = [{
  question: "How many 100's Rohit has scored till now in ODI's??",
  answer: "29"
},{
  question: "At what age Rohit Sharma started his International Career??",
  answer: "20"
},
{
  question: "How many 100's Rohit has scored in T20I's??",
  answer: "4"
},{
  question: "Against which team Rohit Sharma made his test debut??",
  answer: "west indies"
},
{
  question: "How many 100's Rohit had scored in World Cup 2019??",
  answer: "5"
},{
  question: "Rohit Sharma made his debut against which team?",
  answer: "ireland"
},{
  question: "How many IPL's he has won??",
  answer: "5"
},{
  question: "In which year Rohit Sharma was born??",
  answer: "1987"
}];

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
if(score<=0){
  console.log("OOPS!!You scored: ",+ score +'out of ', totalQuestions);
}else{
  console.log("YAYY!!You scored:  ",+ score + ' out of ', totalQuestions);
}

