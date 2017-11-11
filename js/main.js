
//Checks that the JS is correctly set up.
console.log("Up and running!");

//Card names
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
}
];

//This array contains the cards currently selected.
var cardsInPlay = [];

//Show if you have found a match or not using a dialog box.
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}
};

//This shows what happens when a user clicks a card.
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
};

//Defines the function that adds the board to the page.
var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

//Calls the function that creates a board.
createBoard();

/*Pseudocode for reset button:
	
	When user clicks reset button
	if cardsInPlay length is greater than zero

	  Reset cardsInPlay
	  Remove current board
	  Create new board

	else alert you havent started yet
*/

//As I couldn't get reset button to work as per the above pseudocode, the below makes the button simply refresh the page:
var resetBoard = function(){
	window.location.reload();
}
var resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetBoard);
