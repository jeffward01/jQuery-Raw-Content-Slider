$(document).ready(function(){
  //Check to see if JS is working.
alert("JS works!");
  
//Set options (varibles)
  var speed = 500; //milliseconds   //Fade Speed
  var autoswitch = true;  //Auto slider option
  var autoswitch_speed = 4000 //Auto slider speed
  
  
  //Add initial active class
  $('.slide').first().addClass('active');
  
  //Hide all slides
  $('.slide').hide();
  
  //Show first slide
  $('.active').show();
  
  //Program Next button
  //Next Handler
  $('#next').on('click',nextSlide);
  
  //Program Previous Button
  //Prev Handler
  $('#prev').on('click',prevSlide);
  
  //Program Auto-slider
  //Auto-slider handler
  if(autoswitch){
  setInterval(nextSlide, autoswitch_speed);
              };//End Autoswitch
  

  //Functions
  //
  
  //Switch to next slide
  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    } else {
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
  
  //Switch to Previous Slide
  function prevSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    } else {
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }
  



});//End Ready












