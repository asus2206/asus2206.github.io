var project=new Array("radiopreis","ctv","mapple","python","raspberry","portfolio"),skill=new Array("code","design","usability");$(document).ready(function(){$(".diagram").load("sources/skills.html #code");$(".projectItem").on("click",function(){var e=$(this).attr("id"),t=e.split("-");$(".projectText").load("sources/projects.html #"+project[t[1]-1]);$(".projectViewer").toggleClass("expand");$(".projectInfo").toggleClass("showInfo");$(".projectText").velocity("scroll",{duration:400,offset:-200})});$(".switchItem").on("click",function(){var e=$(this).attr("id"),t=e.split("-");$(".diagram").load("sources/skills.html #"+skill[t[1]-1]);$(".switchItem.selected").removeClass("selected");$(this).addClass("selected")});$(".closer").on("click",function(){$(".projectViewer").removeClass("expand");$(".projectInfo").removeClass("showInfo")});$(".mainNavItem").on("click",function(){var e=$(this),t=e.attr("data-value"),n=t.split(":");$(n[0]).velocity("scroll",{duration:1e3,offset:-100})});$(".buttonStart").on("click",function(){$("#projects").velocity("scroll",{duration:1e3,offset:-100})})});$(window).scroll(function(){if($(window).scrollTop()>$(window).height()){$(".pageNavigation").addClass("naviStatic");$(".pageContent").addClass("pageSubNavi")}else{$(".pageNavigation").removeClass("naviStatic");$(".pageContent").removeClass("pageSubNavi")}$(window).scrollTop()>$(window).height()*1.2?$(".posShift").addClass("shiftIn"):$(".posShift").removeClass("shiftIn")});