function myQuiz(score) {
  var firstQuestion = prompt("What's the first name of the current US President?");
  if (firstQuestion == "Joe") {
    score = score + 5;
    confirm("Right! Your score is: " + score);
    console.log("Score: " + score);
  } else {
    score = score - 5;
    confirm("Wrong! Your score is: " + score);
    console.log("Your score is: " + score);
  }

  var secondQuestion = prompt("What's the capital of France?");
  if (secondQuestion == "Paris") {
    score = score + 5;
    confirm("Right! Your score is: " + score);
    console.log("Score: " + score);
  } else {
    score = score - 5;
    confirm("Wrong! Your score is: " + score);
    console.log("Your score is: " + score);
  }

  var thirdQuestion = prompt("What's the meaning of LTI?");
  if (thirdQuestion == "Larsen & Toubro Infotech"
      || thirdQuestion == "Larsen and Toubro Infotech") {
    score = score + 5;
    confirm("Right! Your score is: " + score);
    console.log("Score: " + score);
  } else {
    score = score - 5;
    confirm("Wrong! Your score is: " + score);
    console.log("Score: " + score);
  } 
  return score;
}

function round(score){
	myscore = myQuiz(score);
	if (myscore == 0) {
    alert("You lose!");
  } else if (myscore == 30) {
    alert("You win!");
  }else {
    alert("Next round...");
    myQuiz(myscore);
  }
}

round(15);