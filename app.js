var userName;

function welcome() {
  userName = prompt('Hey user! What\'s your name?');
  alert('Welcome to the site ' + userName);
  var userOutputOne = prompt('Is Brian\'s favorit color blue?');
  userOutputOne = userOutputOne.toUpperCase();
  console.log('this is the first value of question ' + userOutputOne);
  if (userOutputOne === 'Y') {
    console.log('This is the if');
    alert('Congrats ' + userName + '. You got that right!');
  } else {
    console.log('This is the else');
    alert('Sad face :(  ' + userName + ', you got that wrong!');
  }
}

function questionTwo() {
  var userInputTwo = prompt('Am I under the age of 35?').toUpperCase();
  console.log('this is the second value of question', userInputTwo);
  if (userInputTwo === 'Y') {
    alert('You guessed it right ' + userName);
  } else {
    alert('Sorry, womp womp.. that\'s wrong');
  }
}

function questionThree() {
  var userInputThree = prompt('Can Brian play the piano?').toUpperCase();
  if (userInputThree === 'Y') {
    alert('You got it wrong. He\'s not a musician.');
  } else if (userInputThree === 'N') {
    alert('That\'s totaly correct!');
  } else {
    console.log('This is the else');
    alert('Sad face :(  ' + userName + ', you got that wrong!');
  }
}

function questionFour() {
  var userInputFour = prompt('What is Brian\'s favorit pet?').toUpperCase();
  var pets = ['dog', 'cat', 'fish', 'monkey'];
  if (pets.indexOf(userInputFour) >= 0) {
    alert('Congrats! You got it right.');
  } else {
    alert(':( wrong.');
  }
}

function questionFive() {
  var userInputFive = prompt('What is my favorite food?').toUpperCase();
  if (userInputFive === 'pizza' || userInputFive === 'carrots' || userInputFive === 'burger' || userInputFive === 'rice') {
    alert('Congrats! You got it right.');
  } else {
    alert('Wrong.');
  }
}

function questionSix() {
  var userInputSix = prompt('Is Brian tall??').toUpperCase();
  if (userInputSix === 'N') {
    alert('Congrats! You got it right.');
  } else {
    alert('Wrong.');
  }
}

function questionSeven() {
  var userInputSeven = parseInt(prompt('Guess my number between 1 and 50')); // => '30'
  var answer = 30;
  while (userInputSeven !== answer) {
    if (isNaN(userInputSeven)) {
      userInputSeven = parseInt(prompt('Guess again, that was not a number'));
    } else if (userInputSeven > answer) {
      userInputSeven = parseInt(prompt('Guess again, that was too high'));
    } else if (userInputSeven < answer) {
      userInputSeven = parseInt(prompt('Guess again, that was too low'));
    }
  }
  if (userInputSeven === answer){
    alert('That is the right answer! Yippie! ');
  }
}

function questionEight() {
  var cars = ['bmw', 'toyota', 'pinto', 'vw'];
  var userInputEight = prompt('Guess one of my favorite cars').toLowerCase();
  var isTrue = false;

  for (var i = 0; i < cars.length; i++) {
    if (userInputEight === cars[i]) {
      isTrue = true;
      break;
    }
  }
  if (isTrue) {
    alert('Congrats that is a favorite');
  } else {
    alert('That car is not one of my favorites');
  }
}

welcome();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
questionEight();
