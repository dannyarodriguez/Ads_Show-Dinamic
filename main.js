const tl1 = gsap.timeline({default: {duration: 2, opacity: 1, yoyo: true}});
const tl2 = gsap.timeline({default: {duration: 2, opacity: 1, yoyo: true}});
const tl3 = gsap.timeline({default: {duration: 2, opacity: 1, yoyo: true}});
const tl4 = gsap.timeline({default: {duration: 2, opacity: 1, yoyo: true}});
const tl5 = gsap.timeline({default: {duration: 2, opacity: 1, yoyo: true}});
const tl6 = gsap.timeline({default: {duration: 2, opacity: 1, yoyo: true}});

tl1 
    .from('#ad01_160x600',{opacity:0, ease: 'power1.out',stagger: 0.9})
    .from('#ad01_160x600-title',{opacity:0, rotation:"+=360"})
    .from('#ad01_160x600-logo',{y:-200})
    .from('#ad01_160x600-cta',{x:-200})
    .from('#ad01_160x600-cta a',{opacity:0})

tl2 
    .from('#ad02_300x50',{opacity:0, ease: 'power1.out',stagger: 0.9})
    .from('#ad02_300x50-title',{rotation:"+=360"})
    .from('#ad02_300x50-logo',{y:-200})
    .from('#ad02_300x50-cta',{x:-200})
    .from('#ad02_300x50-cta a',{opacity:0})
   
tl3 
    .from('#ad03_468x60',{opacity:0, ease: 'power1.out',stagger: 0.9})
    .from('#ad03_468x60-title',{rotation:"+=360"})
    .from('#ad03_468x60-logo',{y:-200})
    .from('#ad03_468x60-cta',{x:-200})
    .from('#ad03_468x60-cta a',{opacity:0})

tl4 
    .from('#ad04_300x250',{opacity:0, ease: 'power1.out',stagger: 0.9})
    .from('#ad04_300x250-title',{rotation:"+=360"})
    .from('#ad04_300x250-logo',{y:-200})
    .from('#ad04_300x250-cta',{x:-200})
    .from('#ad04_300x250-cta a',{opacity:0})

tl5 
    .from('#ad05_728x90',{opacity:0, ease: 'power1.out',stagger: 0.9})
    .from('#ad05_728x90-title',{rotation:"+=360"})
    .from('#ad05_728x90-logo',{y:-200})
    .from('#ad05_728x90-cta',{x:-200})
    .from('#ad05_728x90-cta a',{opacity:0})

tl6 
    .from('#ad06_970x90',{opacity:0, ease: 'power1.out',stagger: 0.9})
    .from('#ad06_970x90-title',{rotation:"+=360"})
    .from('#ad06_970x90-logo',{y:-200})
    .from('#ad06_970x90-cta',{x:-200})
    .from('#ad06_970x90-cta a',{opacity:0})

// const playButton = document.getElementById('btnPlay');
// const btnRestart = document.getElementById('btnRestart');

// playButton.addEventListener('click', () => {
//     tl.play();
// });
// btnRestart.addEventListener('click', () => {
//     tl.restart();
// });

const ad1BtnR = document.getElementById('ad01_60x600-btnR');
const ad2BtnR = document.getElementById('ad02_300x50-btnR');
const ad3BtnR = document.getElementById('ad03_468x60-btnR');
const ad4BtnR = document.getElementById('ad04_300x250-btnR');
const ad5BtnR = document.getElementById('ad05_728x90-btnR');
const ad6BtnR = document.getElementById('ad06_970x90-btnR');

ad1BtnR.addEventListener('click', () => {tl1.restart();});
ad2BtnR.addEventListener('click', () => {tl2.restart();});
ad3BtnR.addEventListener('click', () => {tl3.restart();});
ad4BtnR.addEventListener('click', () => {tl4.restart();});
ad5BtnR.addEventListener('click', () => {tl5.restart();});
ad6BtnR.addEventListener('click', () => {tl6.restart();});