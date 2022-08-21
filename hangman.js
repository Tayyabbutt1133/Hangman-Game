var programming_languages = [
    "python",
    "javascript",
    "c++",
    "mongodb",
    "php",
    "html",
    "css",
    "ruby"
]
let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let WordStatus = null;




//Functions

//function to generate random words
function randomWord() {
    answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
    // alert(answer);
}
//Function for buttons 
function generateButtons() {
    let buttonsHtML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('`+ letter + `')"
        >
         `+ letter + `
        </button>
        `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHtML;
}


function handleGuess(chosenLetter) {
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);

    //  alert(answer);


    if (answer.indexOf(chosenLetter) >= 0) {
        guessedWord();
        CheckIfGameWon();
    }
    else if (answer.indexOf(chosenLetter) == -1) {
        mistakes++;
        updateMistakes();
        ifgamelost();
        updateHangmanPic();
    }
}

function updateHangmanPic() {
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function CheckIfGameWon() {
    if (WordStatus === answer) {
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
}

function ifgamelost() {
    if (mistakes === maxWrong) {
        document.getElementById('WordSpotLight').innerHTML = 'Your answer was :' + answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    }
}




function guessedWord() {
    WordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('WordSpotLight').innerHTML = WordStatus;
}



function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}












document.getElementById('MaxWrong').innerHTML = maxWrong;



//Function Calling
randomWord();
generateButtons();
guessedWord();
handleGuess();
updateMistakes();
reset();