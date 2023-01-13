// SWITCH STICKY NAVBAR COLOR
let scrollPosition = window.scrollY;
let headerContainer = document.querySelector('header');

window.addEventListener('scroll', function () {

   scrollPosition = window.scrollY;

   if (scrollPosition >= 400) {
      headerContainer.classList.add('stickynav');
   } else {
      headerContainer.classList.remove('stickynav');
   }

});

// RANDOM ARTWORK TOGGLE

let charList = document.querySelectorAll('svg > g > g > g')

function toggleRandom(array = charList) {
   toHide = Math.floor(Math.random() * array.length);
   toShow = Math.floor(Math.random() * array.length);
   array[toHide].style.opacity = 0
   array[toShow].style.opacity = 1
   setTimeout(toggleRandom, 100);
}

toggleRandom()