// Generate Random Math Problems 
// var questions = [[stringExp1, ans1],[stringExp2, ans2]......]

var questionModGenerator = function(){
  var p1 = Math.floor(Math.random()*1000);
  var p2 = Math.floor(Math.random() * p1);  //ensures p2 <= p1

  var string = p1 + " mod " + p2 + " = ?"
  var ans = p1 % p2;

  return [string, ans];
};

var questionAddGenerator = function(){
  var p1 = Math.floor(Math.random()*500);
  var p2 = Math.floor(Math.random() * p1);  //ensures p2 <= p1

  var string = p1 + " + " + p2 + " = ?"
  var ans = p1 + p2;

  return [string, ans];
};

var questionSubtGenerator = function(){
  var p1 = Math.floor(Math.random()*500);
  var p2 = Math.floor(Math.random() * p1);  

  var string = p1 + " - " + p2 + " = ?"
  var ans = p1 - p2;

  return [string, ans];
};

var questionMultGenerator = function(){
  var p1 = Math.floor(Math.random()*20);
  var p2 = Math.floor(Math.random() * p1);  

  var string = p1 + " x " + p2 + " = ?"
  var ans = p1 * p2;

  return [string, ans];
};

var questionDivGenerator = function(){
  var p2 = Math.floor(Math.random()*20);
  var ans = Math.floor(Math.random() * p1) + 1;  
  var p1 = ans * p2;

  var string = p1 + " / " + p2 + " = ?"

  return [string, ans];
};

var generators = [questionModGenerator, questionAddGenerator, questionSubtGenerator, questionMultGenerator, questionDivGenerator];

var generateQuestions = function(num){
  // generates num questions
  var questions = [];
  for( var i = 0; i < num; i++){
    questions.push(generators[Math.floor(Math.random()*generators.length)]());
  }
  return questions;
}