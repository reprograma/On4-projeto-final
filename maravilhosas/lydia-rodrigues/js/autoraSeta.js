const autoraBtn = document.querySelector('.arrow')
autoraBtn.addEventListener('click', function(e){
  e.preventDefault()
  autoraBtn.classList.toggle('arrow-close')
  const autoraInfo = document.querySelector('.secao-autora__about')
  autoraInfo.classList.toggle('closed');
})
