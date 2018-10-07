// Quesstion application //


(function () {
function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion =
  function() {
    console.log(this.question);

  for(var i = 0; i < this.answers.length; i++) {
    console.log(i + ':' + this.answers[i]);
  }
}

Question.prototype.checkAnswer =
    function(ans, callback) {
      var sc;

      if (ans === this.correct) {
        console.log('Correct Answer!!!');
        sc = callback(true);

      } else {
        console.log('Wrong Answer!!!')
      }
    }




var q1 = new Question('Is javascript easy?',
    ['Yes', 'No'],
    0);

var q2 = new Question('Where is the White House located?',
    ['Portland', 'San Francisco', 'District of Columbia'],
    2);

var q3 = new Question('What\'s the U.S. population?',
  ['100m', '320m', '450m'],
  1);


  var questions = [q1, q2, q3];


  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return score
    }
  }

  var keepScore = score();



function nextQuestion () {


  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();


  var answer = parseInt(prompt("Please type in the correct answer"));




  if( answer !== 'exit') {

    questions[n].checkAnswer(parseInt(answer), keepScore);
    nextQuestion();
  } else {
    return
  }


  }

  nextQuestion();

})();

  // if(answers === answers[i]) {
  //   prompt('That is correct');
  // } else {
  //   prompt('Wrong answer')
  // }
