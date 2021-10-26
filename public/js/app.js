const menuBtn = document.querySelector('.menuBtn');
const xBtn = document.querySelector('.xBtn');
const mobileMenu = document.querySelector('.mobileMenu');
const overlay = document.querySelector('.overlay');

const toggleMenu = function() {
    mobileMenu.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleMenu);
xBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);


$(document).ready(function(){
    $('.owl-one').owlCarousel({
      loop:true,
      autoplay:true,
      dots:false,
      nav:true,
      responsive:{
        0: {
            items: 0.8
        },
        640: {
            items: 1.95
        },
        768: {
            items: 2.95
        },
        1024: {
            items: 3.95
        }
    }
  })
  });