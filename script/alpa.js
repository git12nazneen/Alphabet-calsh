
function handleKeyboardkeyUpEvent(event){
  const playerPressed = event.key;
  // console.log('plauy',playerPressed)

  // get the expected to press
const currentAlphabetElement = document.getElementById('current-palace')
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
// console.log(playerPressed, expectedAlphabet)

// check match or not
if(playerPressed === expectedAlphabet){
  console.log('bonus');

  const currentScore = getElementValueById('current-score');
  const updatedScore = currentScore + 1;
  setTextElementValueById('current-score', updatedScore);
// //  update score
// // 1 get current score  
// const currentSccoreElement = document.getElementById('current-score');
// const currentScoreText = currentSccoreElement.innerText;
// const currentScore = parseInt(currentScoreText)
// console.log(currentScore)
// // 2 increase the score 1
// const newScore = currentScore + 1;
// // 3 show the update score
// currentSccoreElement.innerText = newScore;
//   // start a new round
  removeBackgroundColourById(expectedAlphabet)
  continueGame()
}
else{
  console.log('not bonus');
  const currentLife = getElementValueById('current-life');
  const updatedLife = currentLife - 1;
  setTextElementValueById('current-life', updatedLife)
  // // strp 1: get the current life
  // const currentLifeElement = document.getElementById('current-life')
  // const currentLIfeText = currentLifeElement.innerText;
  // const currentLife = parseInt(currentLIfeText);
  // console.log(currentLife)
  // // 2:reduce the life
  // const newCurrentScore = currentLife - 1;
  // // 3: display update
  // currentLifeElement.innerText = newCurrentScore;

  if(updatedLife === 0){
    gameOver();
  }

}
}


// capture keyboard key press
document.addEventListener('keyup', handleKeyboardkeyUpEvent);

function continueGame(){
    //   step1: generate a random alphabet
      const alphabet = getaRandomAlphabet();
      // console.log('your random ', alphabet);

      // set alphabet
      const currentAlphabetElement = document.getElementById('current-palace');
      currentAlphabetElement.innerText = alphabet;

      // set background color
      setBackgroundColorById(alphabet)
}


function play(){
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('plays-ground');
  // reset game
  setTextElementValueById('current-life', 5)
  setTextElementValueById('current-score', 0)
  continueGame()
}

function gameOver(){
 hideElementById('plays-ground');
 showElementById('final-score') ;
//  update final score
const lastScore = getElementValueById('current-score');
console.log(lastScore)
setTextElementValueById('last-score', lastScore);

// clear the last number
const currentAlphabet = getElementTextById('current-palace');
// console.log(currentAlphabet);
removeBackgroundColourById(currentAlphabet);

}
