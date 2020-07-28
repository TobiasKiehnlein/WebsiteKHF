import ScrollMagic from "scrollmagic";

const controller = new ScrollMagic.Controller();

document.querySelectorAll('.animated-text').forEach(elt => {
  console.log(elt)
  const sectionScene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: elt,
    triggerHook: 0.8
  })
    .addTo(controller);

  sectionScene.on('enter', () => elt.classList.add('visible'));
  sectionScene.on('leave', () => elt.classList.remove('visible'));
})
