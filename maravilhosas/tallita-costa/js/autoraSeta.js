const autoraBtn = document.querySelector ('.arrow')
autoraBtn.addEventListener ('click', function(e){
  e.preventDefault ()
  autoraBtn.classList.toggle ('arrow-close') // classList busca classe do css
  // e por isso nao precisa do ponto e o toggle inclui a funcao chamada

  const autoraInfo = document.querySelector ('.secao-autora__about')
  autoraInfo.classList.toggle ('closed');

})
