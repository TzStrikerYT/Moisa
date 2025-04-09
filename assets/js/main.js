/*====== MENU =====*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*====== RELLAX =====*/
var rellax = new Rellax('.parallax');


/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: .5, y: 30, ease:'expo.out'});
gsap.from('.nav__toggle', {opacity:0, duration: 3, delay: .7, y: 30, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: .7, y: 35, ease:'expo.out', stagger: .2})

/*Text*/
gsap.from('.home__title', {opacity:0, duration: 3, delay: 1.3, y: 35, ease:'expo.out'});
gsap.from('.home__subtitle', {opacity:0, duration: 3, delay: 1.1 , y: 35, ease:'expo.out'});

/*Scroll*/
gsap.from('.home__scroll', {opacity:0, duration: 3, delay: 1.5, y: 25, ease:'expo.out'});


/*====== SCROLL REVEAL SECTION ======*/
const sr = ScrollReveal({
    duration: 2500,
    reset: true
});

/*Data*/
sr.reveal('.section__data',{origin: 'left',distance: '70px'}); 

/*Imgs*/
sr.reveal('.section__img',{origin: 'left',distance: '90px',delay: 200}); 

// Audio Control
const audioControl = document.getElementById('audioControl');
const backgroundAudio = document.getElementById('backgroundAudio');
const audioMessage = document.querySelector('.audio-message');
let isPlaying = false;

// Control manual del audio
audioControl.addEventListener('click', () => {
    if (isPlaying) {
        backgroundAudio.pause();
        audioControl.innerHTML = '<i class="bx bx-play"></i>';
        audioMessage.style.display = 'block';
        audioControl.classList.remove('playing');
        isPlaying = false;
    } else {
        backgroundAudio.play();
        audioControl.innerHTML = '<i class="bx bx-pause"></i>';
        audioMessage.style.display = 'none';
        audioControl.classList.add('playing');
        isPlaying = true;
    }
});

// Intentar reproducir cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    const playPromise = backgroundAudio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            isPlaying = true;
            audioControl.innerHTML = '<i class="bx bx-pause"></i>';
            audioMessage.style.display = 'none';
            audioControl.classList.add('playing');
        })
        .catch(() => {
            isPlaying = false;
            audioMessage.style.display = 'block';
            audioControl.classList.remove('playing');
        });
    }
});
