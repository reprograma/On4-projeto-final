let titulo = document.getElementById("titulo_principal")


titulo.addEventListener("mouseover", function(){
	titulo.style.color = '#ffffff';
	titulo.style.backgroundColor = '#63458a';
	titulo.style.fontSize = '22px';
})

titulo.addEventListener("mouseout", function(){
	titulo.style.color = '#63458a';
	titulo.style.fontSize = '20px';
	titulo.style.backgroundColor = '#ffffff';
})



