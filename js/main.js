import enterView from './sticky'

enterView({
  selector: 'section',
  enter: function (el) {
    el.classList.add('entered');
  }
})

// lower numbers = faster playback
const playbackConst = 1000,
  // select video element
  vid = document.getElementById('v0');

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', () => {
  // setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px"; Wasn't necessary anymore... still a good way to figure out how large the sum of all sections should be
  vid.pause()
});


// Use requestAnimationFrame for smooth playback
const scrollPlay = () => { 
  vid.currentTime = window.pageYOffset / playbackConst;

  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

