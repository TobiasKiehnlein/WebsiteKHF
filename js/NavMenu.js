//region MobileNavMenu
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');

menuButton.addEventListener('click', () => header.classList.contains('extended') ? header.classList.remove('extended') : header.classList.add('extended'))

header.addEventListener('touchmove', e => e.preventDefault())
//endregion
