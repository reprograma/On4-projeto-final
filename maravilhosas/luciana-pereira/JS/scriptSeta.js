const autoraBtn = document.querySelector('.arrow')
autoraBtn.addEventListener('click', function(e){
  e.preventDefault()
  autoraBtn.classList.toggle('.arrow-close')
  const autoraInfo = document.querySelector('.secao-autora__about')
  autoraInfo.classList.toggle('opened')
})

document.addEventListener('mousemove', adaLovelace);

   function adaLovelace(){
    document.getElementById("efeito").innerHTML = "Era uma vez, uma garota que escreveu a primeira linguagem de programação... 👩‍💻<br>";
  }

