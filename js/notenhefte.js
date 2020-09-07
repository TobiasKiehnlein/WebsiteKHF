const textElements = document.querySelectorAll('#info-bar *')
const images = document.querySelectorAll('#covers img')

images.forEach(img => img.addEventListener("click", () => onHover(img)))

const onHover = (img) => {
    textElements.forEach(txt => txt.classList.remove('visible'))
    document.querySelectorAll(`.${img.dataset.id}`).forEach(txt => txt.classList.add('visible'))
}
