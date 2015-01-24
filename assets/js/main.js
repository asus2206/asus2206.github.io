var project = new Array( "radiopreis", "ctv", "mapple", "python", "raspberry", "portfolio" );
var skill = new Array( "code", "design", "usability");

$(document).ready(function(){
  $('.diagram').load('sources/skills.html #code');

  $('.projectItem').on('click', function(){
    var pID = $(this).attr('id');
    var num = pID.split('-');

    $('.projectText').load('sources/projects.html #' + project[num[1]-1]);
    $('.projectViewer').toggleClass('expand');
    $('.projectInfo').toggleClass('showInfo');
    $('.projectText').velocity("scroll", { duration: 400, offset: -200 });
  });

  $('.switchItem').on('click', function(){
    var sID = $(this).attr('id');
    var num = sID.split('-');

    $('.diagram').load('sources/skills.html #' + skill[num[1]-1]);
    $('.switchItem.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  $('.closer').on('click', function(){
    $('.projectViewer').removeClass('expand');
    $('.projectInfo').removeClass('showInfo');
  });

  $('.mainNavItem').on('click', function(){
    var link = $(this);
    var val = link.attr('data-value');
    var data = val.split(':');

    $(data[0]).velocity("scroll", { duration: 1000, offset: -100 });
  });

  $('.buttonStart').on('click', function(){
    $("#projects").velocity("scroll", { duration: 1000, offset: -100 });
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

  if($(window).scrollTop() > ($(window).height() * 1.2)){
    $('.posShift').addClass("shiftIn");
  }  else{
    $('.posShift').removeClass("shiftIn");
  }
});
