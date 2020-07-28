import ScrollMagic from 'scrollmagic';
import {TimelineMax, TweenMax} from "gsap";
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

//region ScrollMagic
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const title = intro.querySelector('h1');
const addressInfo = intro.querySelectorAll('.contact-info > *');

const section = document.querySelector('section');
const end = section.querySelector('h1')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  // .addIndicators()
  .setPin(intro)
  .addTo(controller);


// Text animation
const textAnim = TweenMax.to(title, 0.3, {transform: 'translateY(-40vh)'})
new ScrollMagic.Scene({
  duration: 300,
  triggerElement: intro,
  triggerHook: 0
}).setTween(textAnim).addTo(controller);

addressInfo.forEach(infoElt => {
  const textAnim = TweenMax.to(infoElt, 1, {transform: 'translateX(0)'})
  new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: -0.5
  }).setTween(textAnim).addTo(controller);
})

// Video animation
let accelerationAmount = 0.1;
let scrollPos = 0;
let delay = 0;

// scene.on("update", e => video.currentTime = e.scrollPos / 250);
scene.on("update", e => scrollPos = e.scrollPos / 250);

setInterval(() => {
  const difference = (scrollPos - delay) * accelerationAmount;
  delay += difference;
  video.currentTime = delay;
}, 50)
//endregion


//region PreviewElements
document.querySelectorAll('.preview').forEach(elt => {
  const sectionScene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: elt,
    triggerHook: 0.8
  })
    // .addIndicators()
    .addTo(controller);

  sectionScene.on('enter', () => elt.classList.add('visible'));
  sectionScene.on('leave', () => elt.classList.remove('visible'));
})
//endregion

