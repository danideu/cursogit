$(document).ready(function(){
    $("nav").mouseenter(function() {
        $( '.logo img' ).attr("src","../img/logo.png");
    });
    $("nav").mouseleave(function() {
        $( '.logo img' ).attr("src","../img/logo-white.png");
    });
  });
