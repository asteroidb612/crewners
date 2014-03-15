$(document).ready(function(){ 
  setTimeout(function() {
    $("#menu").hide().fadeIn(1000);
    $("html").css({"background": "url('images/homepage_blur.jpg') no-repeat top center fixed",
   "-webkit-background-size": "cover",
   "-moz-background-size": "cover",
   "-o-background-size": "cover", 
   "background-size": "cover"});
  }, 500);
})
