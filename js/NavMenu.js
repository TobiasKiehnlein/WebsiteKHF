//region MobileNavMenu
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');

document.querySelectorAll('.header a').forEach(header => {
  if (header.href === window.location.href)
    header.classList.add('active')
})

menuButton.addEventListener('click', () => header.classList.contains('extended') ? header.classList.remove('extended') : header.classList.add('extended'))

header.addEventListener('touchmove', e => e.preventDefault())
//endregion
