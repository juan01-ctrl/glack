const menu = document.querySelector('.header')
const sec1Button = document.querySelector('.section-1-button')
const sec1Title = document.querySelector('.sec1-title')
const sec1Text = document.querySelector('.sec1-text')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')

// const preloadDot = $(".preloader__container__preload__dot");
// const tl = gsap.timeline({ repeat: 3 });
// tl
// .to(preloadDot, 0.3, { delay: 0.3, scale: 1.4, stagger: 0.1 })
// .to(preloadDot, 0.3, { scale: 1, stagger: {
//   amount: 0.35,
//   from: "start"
// }});

// let counter = 0;
// const loaderTimer = setInterval(function() {
//   counter++;
//   $(".preloader__container__percent").text(counter + "%");
//   if(counter == 100){
//     clearInterval(loaderTimer);
//     gsap.to(".preloader", 0.3, { delay: 0.5, y: "-100%" });
//   }
// }, 40);

window.addEventListener('DOMContentLoaded', ()=>{
    menu.style.transform = "translateY(0)"
    sec1Button.style.opacity = "1"
    sec1Text.style.opacity = "1"
    sec1Title.style.transform = "translateX(0)"
})

hamburger.addEventListener('click', (e)=>{
  menu.classList.toggle('active')

})

nav.addEventListener('click', (e)=>{

    if(e.target.classList.contains('nav-item'))
    menu.classList.remove('active')
  
  })

