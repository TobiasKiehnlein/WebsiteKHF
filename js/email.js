const ele = document.querySelector('form');
const textArea = document.querySelector('textarea')

const callback = e => {
  e.preventDefault();
  window.location = `mailto:info@khfollner.de?subject=${encodeURIComponent("Kontakt - Website")}&body=${encodeURIComponent(textArea.value)}`
}

if (ele.addEventListener) {
  ele.addEventListener("submit", callback, false);  //Modern browsers
} else if (ele.attachEvent) {
  ele.attachEvent('onsubmit', callback);            //Old IE
}
