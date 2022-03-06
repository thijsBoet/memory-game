document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'annabelle',
			img: './images/annabelle.jpg',
		},
		{
			name: 'charlotte',
			img: './images/charlotte.jpg',
		},
		{
			name: 'cillian',
			img: './images/cillian.jpg',
		},
		{
			name: 'helen',
			img: './images/helen.jpg',
		},
		{
			name: 'sam',
			img: './images/sam.jpg',
		},
		{
			name: 'tom_hardy',
			img: './images/tom_hardy.jpg',
		},
		{
			name: 'annabelle',
			img: './images/annabelle.jpg',
		},
		{
			name: 'charlotte',
			img: './images/charlotte.jpg',
		},
		{
			name: 'cillian',
			img: './images/cillian.jpg',
		},
		{
			name: 'helen',
			img: './images/helen.jpg',
		},
		{
			name: 'sam',
			img: './images/sam.jpg',
		},
		{
			name: 'tom_hardy',
			img: './images/tom_hardy.jpg',
		},
	];
	const blank = [
		{
			name: 'blank',
			img: './images/blank.jpg',
		},
	];

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('#grid');
	const resultDisplay = document.querySelector('#result');
	let cardsChosen = [];
	let cardsChosenIds = [];
	let cardsWon = [];

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			const card = document.createElement('img');
			card.setAttribute('src', './images/blank.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	function checkForMatch() {
		const cards = document.querySelectorAll('#grid img');

		if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match!');
			cardsWon.push(cardsChosen);
			cards[cardsChosenIds[0]].setAttribute('src', './images/correct.jpg');
			cards[cardsChosenIds[1]].setAttribute('src', './images/correct.jpg');
			cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
			cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
			cardsWon.push(cardsChosen);
			alert('You found a match!');
		} else {
			alert('Sorry, try again.');
		}
		cardsChosen = [];
		cardsChosenIds = [];
	}

	function flipCard() {
		let cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenIds.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
