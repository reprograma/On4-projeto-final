const autoraBtn = document.querySelector('.arrow')
autoraBtn.addEventListener('click', function(e){
  e.preventDefault()
  autoraBtn.classList.toggle('arrow-close')
  const autoraInfo = document.querySelector('.secao-autora__about')
  autoraInfo.classList.toggle('closed');
})

// JQuery

$(window).scroll(function() {
  if ($(this).scrollTop() >= 200) {
    $(".arrow-up__script").fadeIn(2000)
  } else {
    $(".arrow-up__script").fadeOut(2000)
  }
})
