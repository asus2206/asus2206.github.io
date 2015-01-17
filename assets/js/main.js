$(document).ready(function(){

  var posts = new Array( ".pageStart", "#projects", "#me", "#skills", "#downloads", "#contact" );
  var navPoints = new Array( "#pnp0", "#pnp1", "#pnp2", "#pnp3", "#pnp4", "#pnp5");
  var scrollPos = 0;
  var isMoving = false;

  $(posts[0]).velocity("scroll", 1000);
  $(navPoints[0]).addClass("active");
  $(navPoints[1]).removeClass("active");
  $(navPoints[2]).removeClass("active");
  $(navPoints[3]).removeClass("active");
  $(navPoints[4]).removeClass("active");
  $(navPoints[5]).removeClass("active");

  function scrollToHandler(direction){
    if(direction === "down"){
      $('.top-body').addClass("closed-top-body");
      $('.bottom-body').addClass("closed-bottom-body");

      if(scrollPos < 5){
        scrollPos += 1;
        $(posts[scrollPos]).velocity("scroll", 1000);
        $(navPoints[scrollPos-1]).toggleClass("active");
        $(navPoints[scrollPos]).toggleClass("active");
      }
    }
    else{
      $('.top-body').removeClass("closed-top-body");
      $('.bottom-body').removeClass("closed-bottom-body");

      if(scrollPos > 0){
        scrollPos -= 1;
        $(posts[scrollPos]).velocity("scroll", 1000);
        $(navPoints[scrollPos+1]).toggleClass("active");
        $(navPoints[scrollPos]).toggleClass("active");
      }
    }
    setTimeout(setMoving, 1000);
  }

  function setMoving(){
    isMoving = false;
  }

  $('.page').bind('mousewheel', function(e){
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1,
      (e.wheelDelta || -e.deltaY || -e.detail)));

    if(!isMoving){
      if (delta < 0) {
        isMoving = true;
        scrollToHandler("down");
      }else {
        isMoving = true;
        scrollToHandler("up");
      }
    }
  });

  $('.page').bind('DOMMouseScroll', function(e){
      if(!isMoving){
        if (e.originalEvent.detail/120 > 0) {
          isMoving = true;
          scrollToHandler("down");
        }else {
          isMoving = true;
          scrollToHandler("up");
        }
      }
    });

  $('.mainNavItem').on('click', function(){
    var link = $(this);
    var val = link.attr('data-value');
    var data = val.split(':');

    scrollPos = data[1] * 1;
    $(data[0]).velocity("scroll", 1000);
  });
});

$(window).scroll(function(){
  if($(window).scrollTop() > $(window).height()){
    $('.pageNavigation').addClass("naviStatic");
    $('.pageContent').addClass("pageSubNavi");
  }  else{
    $('.pageNavigation').removeClass("naviStatic");
    $('.pageContent').removeClass("pageSubNavi");
  }
});
