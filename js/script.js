//scroll-header
$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $("header").addClass("scroll-desktop-menu")
  } else {
    $("header").removeClass("scroll-desktop-menu")
  }
});
//End scroll-header

//burger
const btnBurger = document.getElementById('hamburger');

btnBurger.addEventListener('click', function() {
  if (document.body.classList.contains("hamburger-active")) {
    closeBurger ();
  } else {
    openBurger ();
  }
})

function closeBurger () {
  document.body.classList.remove('hamburger-active');
}

function openBurger () {
  document.body.classList.add('hamburger-active');
}
//End burger


$('.hamburger-menu-list a').on('click', function(){ 
  if (document.body.classList.contains("hamburger-active")) {
    closeBurger ();
  } else {
    openBurger ();
  }
});

$('.stat').on('mousemove', (par) => {
  const x = par.pageX / $(window).width();
  const y = par.pageY / $(window).height();
  $('.stat__image-img').css(
    'transform',
    'translate(-' + x * 5 + 'vh, -' + y * 5 + 'vh)'
    );
});