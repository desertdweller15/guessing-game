var userName = prompt('Hey user! What\'s your name?');
alert('Welcome to the site ' + userName);
var questionOne = prompt('Is Brian\'s favorit color blue?');
questionOne = questionOne.toUpperCase();
console.log('this is the first value of question ' + questionOne);
if (questionOne === 'Y') {
  console.log('This is the if');
  alert('Congrats ' + userName + '. You got that right!');
} else {
  console.log('This is the else');
  alert('Sad face :(  ' + userName + ', you got that wrong!');
}
var questionTwo = prompt('Am I under the age of 35?').toUpperCase();

console.log('this is the second value of question', questionTwo);
if (questionTwo === 'Y') {
  alert('You guessed it right ' + userName);
} else {
  alert('Sorry, womp womp.. that\'s wrong');
}
var questionThree = prompt('Can Brian play the piano?').toUpperCase();
if (questionThree === 'Y') {
  alert('You got it wrong. He\'s not a musician.');
} else if (questionThree === 'N') {
  alert('That\'s totaly correct!');
} else {
}
