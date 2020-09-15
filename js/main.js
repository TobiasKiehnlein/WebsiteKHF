import enterView from './sticky'

const isIOS = iOS();

enterView({
  selector: 'section',
  enter: function (el) {
    el.classList.add('entered');
  }
})

// lower numbers = faster playback
const playbackConst = 1000;
// select video element
const vid = document.getElementById('v0');

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', () => {
  if (!isIOS) return;
  vid.pause()
});


// Use requestAnimationFrame for smooth playback
const scrollPlay = () => {
  if (!isIOS) return;
  vid.currentTime = window.pageYOffset / playbackConst;

  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

function iOS() {
  return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
