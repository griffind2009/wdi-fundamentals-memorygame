var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var game-board = document.getElementById ('game-board');

function createBoard () {
	for (var i=0, i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
		board.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='kingofdiamonds.png'>";
	}
		else {
			this.innerHTML = "<img src='queenofspades.png'>";
		}
		 if(cardsInPlay.length === 2) {
		 	isMatch(cardsInPlay);
		 	cardsInPlay = [];
		 }
}

if (cardThree === cardFour) {
	alert('You found a match');
}
else {
	alert('Sorry try agian!');
}
if (cardOne === cardTwo) {
	alert('You found a match');
}
else {
	alert('Sorry try again!');
}
createBoard();