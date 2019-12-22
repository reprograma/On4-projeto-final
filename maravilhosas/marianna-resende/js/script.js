
/* --- NAVBAR EFEITO --- */
(function() {
  var menuResponsivo = document.getElementById("menuResponsivo");
  var btnResponsivo = document.getElementById("btnResponsivo");

  btnResponsivo.addEventListener("click", function(e) {
    e.preventDefault();
    document.body.scrollTop += 0;
    if (menuResponsivo.className === "navegacao__itens") {
      menuResponsivo.className += " ativo";
    } else {
      menuResponsivo.className = "navegacao__itens";
    }
  });
})();

window.addEventListener("scroll", function() {
  if (pageYOffset >= 250) {
    document.querySelector(".navegacao").style.backgroundColor = "#323534 80%";
  } else {
    document.querySelector(".navegacao").style.backgroundColor = "#323534 80%";
  }
});

/* --- BOTAO BACK TO TOP - JQUERY --- */
$(document).ready(function() {

  $('.back-to-top').hide();

  $(window).scroll(function() {
    if($(this).scrollTop() > 500) {
      $('.back-to-top').fadeIn();
    } else {
      $('.back-to-top').fadeOut();
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate ({scrollTop: 0}, 100);
  });
});

/* --- BOTAO PERFIL AUTORA --- */
const autoraBtn = document.querySelector('.arrow')
autoraBtn.addEventListener('click', function(e){
  e.preventDefault()
  autoraBtn.classList.toggle('arrow-close')
  const autoraInfo = document.querySelector('.secao-autora__about')
  autoraInfo.classList.toggle('closed');
});


