//var lapHeight = laptop.height();

$(window).scroll(function(){

        if($(window).scrollTop() > $(".logo").height()){
            $('.logo').addClass("static");
        } else {
            $('.logo').removeClass("static");
        }

        if($(window).scrollTop() > $(window).height()){
            $('.pageNavigation').addClass("naviStatic");
            $('.pageContent').addClass("pageSubNavi");
        }  else{
        	$('.pageNavigation').removeClass("naviStatic");
        	$('.pageContent').removeClass("pageSubNavi");
        }

        //var dumpHeight = $(window).height() / 15;

      /*  if($(window).scrollTop() > dumpHeight) {
          $('.top-body').addClass("closed-top-body");
          $('.bottom-body').addClass("closed-bottom-body");
        //  $('#top-body').removeClass("Xcenter");
        } else {
          $('.top-body').removeClass("closed-top-body");
          $('.bottom-body').removeClass("closed-bottom-body");
      //    $('#top-body').addClass("Xcenter");
    }*/
});

$(document).ready(function(){

var posts = new Array( ".pageStart", "#projects", "#me", "#skills", "#downloads", "#contact" );
var scrollPos = 0;
var scrollCheck = false;
/*
//Firefox
$('.page').bind('DOMMouseScroll', function(e){
  if(scrollCheck === false){
    if(e.originalEvent.detail > 0) {
      $('.top-body').addClass("closed-top-body");
      $('.bottom-body').addClass("closed-bottom-body");

      scrollPos += 1;
      $('html, body').animate({
        scrollTop: $(posts[scrollPos]).offset().top
      }, 500);
    }else {
      $('.top-body').removeClass("closed-top-body");
      $('.bottom-body').removeClass("closed-bottom-body");

      scrollPos -= 1;
      $('html, body').animate({
        scrollTop: $(posts[scrollPos]).offset().top
      }, 500);
    }
    scrollCheck = true;
  }
  //prevent page fom scrolling
  e.preventDefault();
  e.stopPropagation();
});
*/

/*
//IE, Opera, Safari
$('.page').on('mousewheel', function(e){
  console.log(scrollPos);
  if(e.originalEvent.wheelDelta / 120 < 0) {
    $('.top-body').addClass("closed-top-body");
    $('.bottom-body').addClass("closed-bottom-body");

    scrollPos += 1;
    $('html, body').animate({
      scrollTop: $(posts[scrollPos]).offset().top
    }, 500);
  }else {
    $('.top-body').removeClass("closed-top-body");
    $('.bottom-body').removeClass("closed-bottom-body");

    scrollPos -= 1;
    $('html, body').animate({
      scrollTop: $(posts[scrollPos]).offset().top
    }, 500);
  }

  //prevent page fom scrolling
  e.stopImmediatePropagation()
  return false;
});*/
  var isMoving = false;

  function scrollToHandler(direction){
    if(direction === "down"){
      $('.top-body').addClass("closed-top-body");
      $('.bottom-body').addClass("closed-bottom-body");

      if(scrollPos < 5){
        scrollPos += 1;
        $(posts[scrollPos]).velocity("scroll", 1000);
      }
    }
    else{
      $('.top-body').removeClass("closed-top-body");
      $('.bottom-body').removeClass("closed-bottom-body");

      if(scrollPos > 0){
        scrollPos -= 1;
        $(posts[scrollPos]).velocity("scroll", 1000);
      }
    }
    setTimeout(setMoving, 1000);
  }

  function setMoving(){
    isMoving = false;
  }

  $('.page').on('mousewheel', function(e){
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1,
      (e.wheelDelta || -e.deltaY || -e.detail)));

    if(!isMoving){
      if (delta < 0) {
        console.log("scrolling down: " + delta);
        isMoving = true;
        scrollToHandler("down");
      }else {
        console.log("scrolling up: " + delta);
        isMoving = true;
        scrollToHandler("up");
      }
    }
  });
});
