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
			card.classList.add('card');
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	function checkForMatch() {
		const cards = document.querySelectorAll('#grid img');
		const optionOneId = cardsChosenIds[0];
		const optionTwoId = cardsChosenIds[1];

		if (optionOneId === optionTwoId) {
			alert('You clicked the same card!');
			cards[optionOneId].setAttribute('src', './images/blank.jpg');
			cards[optionTwoId].setAttribute('src', './images/blank.jpg');
		}
		if (cardsChosen[0] === cardsChosen[1]) {
			cardsWon.push(cardsChosen);
			cards[optionOneId].setAttribute('src', './images/correct.jpg');
			cards[optionTwoId].setAttribute('src', './images/correct.jpg');
			cards[optionOneId].removeEventListener('click', flipCard);
			cards[optionTwoId].removeEventListener('click', flipCard);
			cardsWon.push(cardsChosen);
			alert('You found a match!');
		} else {
			cards[optionOneId].setAttribute('src', './images/blank.jpg');
			cards[optionTwoId].setAttribute('src', './images/blank.jpg');
		}
		resultDisplay.textContent = cardsWon.length / 2;

		cardsChosen = [];
		cardsChosenIds = [];

		if(cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = 'Congratulations, you found them all!';
		}
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
