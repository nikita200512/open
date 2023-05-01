$('.reviews__items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button><img src="images/arrows/prev-arrow.svg" alt=""></button>',
  nextArrow: '<button><img src="images/arrows/next-arrow.svg" alt=""></button>'
});


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open");
  });
});