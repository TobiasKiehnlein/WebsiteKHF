const polaroid = document.querySelectorAll('.polaroid');
const textContainer = document.querySelector('.text-container');

const imgClick = (img) => {
	img.classList.toggle('active');
	textContainer.classList.toggle('visible');

	if (img.classList.contains('active')) {
		document.querySelectorAll('.text').forEach(text => text.style.visibility = 'hidden');
		document.querySelectorAll('.polaroid').forEach(text => text.style.zIndex = '0');
		document.querySelector(`.text-container .${img.dataset.id}`).style.visibility = 'visible';
		img.style.zIndex = '25';
	}
};

polaroid.forEach(elt => {
	elt.addEventListener('click', () => imgClick(elt));
});

textContainer.addEventListener('click', () => {
	document.querySelectorAll('.active').forEach(x => x.classList.remove('active'));
	textContainer.classList.remove('visible');
});
