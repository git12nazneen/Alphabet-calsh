// function play() {
// //  hide the home screen . to hide the screen add the hidden to the home screen
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');



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
//  update score
// 1 get current score  
const currentSccoreElement = document.getElementById('current-score');
const currentScoreText = currentSccoreElement.innerText;
const currentScore = parseInt(currentScoreText)
console.log(currentScore)
// 2 increase the score 1
const newScore = currentScore + 1;
// 3 show the update score
currentSccoreElement.innerText = newScore;
  // start a new round
  removeBackgroundColourById(expectedAlphabet)
  continueGame()
}
else{
  console.log('not bonus');
  // strp 1: get the current life
  const currentLifeElement = document.getElementById('current-life')
  const currentLIfeText = currentLifeElement.innerText;
  const currentLife = parseInt(currentLIfeText);
  console.log(currentLife)
  // 2:reduce the life
  const newCurrentScore = currentLife - 1;
  // 3: display update
  currentLifeElement.innerText = newCurrentScore;

  if(newCurrentScore === 0){
    console.log('game over')
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
  showElementById('plays-ground');
  continueGame()
}
