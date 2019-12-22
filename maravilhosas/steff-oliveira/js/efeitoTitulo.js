/*const efeitotexto=document.getElementById('efeito-text');

efeitotexto.addEventListener("scroll", acao)
    function acao(event){
    event.preventDefault();
    }
    console.log(efeitotexto)*/

   $(document).ready(function() {
      $('h3').mouseenter(function(){
        $('h3').addClass('#efeito-text').fadeIn('slow');
      });

      $('h3').mouseleave(function(){
        $('h3').removeClass('#efeito-text')
      });
    });
