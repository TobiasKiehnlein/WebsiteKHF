if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	const cardList = document.querySelector('.card-list');
	cardList.classList.add('mobile');

	const cards = cardList.querySelectorAll('.card');
	cards.forEach(card => {
		card.addEventListener('click', () => {
			cards.forEach(c => c !== card && c.classList.remove('card-active'));
			card.classList.toggle('card-active');
		});
	});
}
