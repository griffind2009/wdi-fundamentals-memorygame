var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var game-board = document.getElementById('game-board');

function createBoard () {
	for (var i=0, i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	onclick="document.querySelector('card').innerHTML = cards()";
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = <img src='kingofdiamonds.png' alt="King of Diamonds>
	}
		else {
			this.innerHTML = <img src='queenofspades.png' alt="Queen of Spades">
		}
		 if(cardsInPlay.length === 2) {
		 	isMatch(cardsInPlay);
		 	cardsInPlay = [];
		 }
}

function isMatch(cards) {

if (cards[2] === cards[3]) {
	alert("You found a match");
}
else {
	alert("Sorry try agian!");
}
if (cards[0] === cards[1]) {
	alert("You found a match");
}
else {
	alert("Sorry try again!");
}
}
createBoard();