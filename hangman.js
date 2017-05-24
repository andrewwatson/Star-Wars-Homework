

var hangman = {

  maxGuesses: 5,
  possibleAnswers: ["cat", "dog", "fish", "coke zero"],
  guessesRemaining: this.maxGuesses,
  correctAnswer: "",
  lettersGuessed: [],
  lettersMatched: [],
  lettersOfWord: [],
  lastGuess: "",
  totalWins: 0,


  guess: function(letter) {

    if (this.lettersGuessed.indexOf(letter) === -1) {
      this.lettersGuessed.push(letter);

      if (this.lettersOfWord.indexOf(letter) !== -1) {
        this.lettersMatched.push(letter);
      }

      this.guessesRemaining--;

      if (this.guessesRemaining === 0) {
        alert("The word was " + this.correctAnswer);
        this.reset();
      }
    }

    this.drawTheScreen();
  },

  drawTheScreen: function() {
    document.getElementById('wins').innerText = this.totalWins;
    document.getElementById('current-word').innerText = this.lettersMatched;
    document.getElementById('guesses-remaining').innerText = this.guessesRemaining;
    document.getElementById('guessed-letters').innerText = this.lettersGuessed;
    console.log("redraw the screen");
  },

  pickAWord: function() {
    return this.possibleAnswers[Math.floor(Math.random() * this.possibleAnswers.length)];
  },

  reset: function() {
    this.lettersGuessed = [];
    this.guessesRemaining = this.maxGuesses;
    this.correctAnswer = this.pickAWord();
    this.lettersOfWord = this.correctAnswer.split("");

    console.log("the answer is " + this.correctAnswer);

    this.totalWins = 0;

    this.drawTheScreen();
  }
}

document.onkeyup = function (e) {
  letter = String.fromCharCode(event.keyCode).toLowerCase();
  hangman.guess(letter);
};

hangman.reset();
