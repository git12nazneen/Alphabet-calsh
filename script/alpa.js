// function play() {
// //  hide the home screen . to hide the screen add the hidden to the home screen
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');


//     // show the playground  
//     const playgroundSection = document.getAnimations('plays-ground');
//     playgroundSection.classList.remove('hidden')
// }
function continueGame(){
    //   step1: generate a random alphabet
      const alphabet = getaRandomAlphabet();
      console.log('your random ', alphabet);

      // set alphabet
      const currentAlphabetElement = document.getElementById('current-alphabet');
      currentAlphabetElement.innerText = alphabet;

      // set background color
      setBackgroundColorById(alphabet)
}


function play(){
  hideElementById('home-screen');
  showElementById('plays-ground');
  continueGame()
}
