$(window).scroll(function() {
  if ($(this).scrollTop() >= 500) {
    $('.arrow-up').fadeIn(2000)
  } else {
    $('.arrow-up').fadeOut(2000)
  }
})

$(document).ready(function() {
  $('.arrow-up').click(function(){
      $('html, body').animate(
          {
          scrollTop: 0 //distancia do topo igual a 0
      },
      1000 //milisegundos
      );
  });
});

