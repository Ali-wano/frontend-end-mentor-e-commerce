

var currentSlide = 1;

function showSlide(slideIndex) {
  const slides = document.getElementsByClassName('shoe');
  if (slideIndex > slides.length) { currentSlide = 1 }
  if (slideIndex < 1) { currentSlide = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display = 'flex';
  ; 
   setTimeout(showSlide, 2000);
}


function nextSlide() {
  showSlide(currentSlide += 1);
}

function previousSlide() {
  showSlide(currentSlide -= 1);
}

window.onload = function () {
//   showSlide(currentSlide);
  document.querySelector('.prev').addEventListener('click', function () {
    previousSlide();
    
  })
  document.querySelector('.next').addEventListener('click', function () {
    nextSlide();
  });
   
}