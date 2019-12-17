const autoraBtn = document.querySelector('.arrow')
autoraBtn.addEventListener('click', function(e){
e.preventDefault()
autoraBtn.classList.toggle('arrow-close')

const autoraInfo = document.querySelector('.secao-autora__about')
autoraInfo.classList.toggle('closed');
})

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
    document.querySelector(".navegacao").style.backgroundColor = "#CC9933";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "#CC9933";
  } else {
    document.querySelector(".navegacao").style.backgroundColor = "transparent";
    document.querySelector(".navegacao__itens").style.backgroundColor =
      "transparent";
  }
});
