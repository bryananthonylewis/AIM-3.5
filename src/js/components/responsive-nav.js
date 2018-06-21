$(document).ready(function() {

  $(".nav-toggle").click(function() {
    $(this).parent().siblings('.nav-container').slideToggle();
  });

  $(".nav-toggle-side").click(function() {
    $(this).parent().siblings('nav').slideToggle();
  });

  // change active class on click
  $('nav a').click(function(){
    $('nav').find('.active').removeClass('active');
    $(this).addClass('active');
  });

});