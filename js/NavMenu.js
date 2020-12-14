//region MobileNavMenu
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');

document.querySelectorAll('.header a').forEach(header => {
    if (header.href.replace(".html", "") === window.location.href.replace(".html", ""))
        header.classList.add('active');
});

menuButton.addEventListener('click', () => header.classList.toggle('extended'));

header.addEventListener('touchmove', e => e.preventDefault());
//endregion
