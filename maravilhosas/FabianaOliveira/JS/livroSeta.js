const livroBtn = document.querySelector('.arrow-2')
livroBtn.addEventListener('click', function(e){
  e.preventDefault()
  livroBtn.classList.toggle('arrow-close-2')
 const livroInfo = document.querySelector('.secao-diva__about')
 livroInfo.classList.toggle('closed-2');
})
