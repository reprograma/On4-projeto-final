const autoraBtn = document.querySelector(".arrow")
autoraBtn.addEventListener("click", function(e){
  e.preventDefault()
  autoraBtn.classList.toggle("arrow-close") //o toggle serve para fazer sumir e aparecer uma classe, causa o efeito de clicar na seta para mostrar algo e para fazer sumir
  const autoraInfo = document.querySelector(".secao-autora__about")
  autoraInfo.classList.toggle("closed");
})

$(window).scroll(function() {
  if ($(this).scrollTop() >= 500) {
    $(".arrow-up").fadeIn(2000);
  } else {
    $(".arrow-up").fadeOut(2000);
  }
});

$(document).ready(function() {
  $(".arrow-up").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000
    );
  });
});
