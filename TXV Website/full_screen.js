$(document).ready(function(){ 
    if($(window).height() > 800){
        window.location.href = "home.html";
     }
     if($(window).width() > 1200){
        window.location.href = "home.html";
     }

     $(window).resize(function(){
        if($(window).height() > 800){
           window.location.href = "home.html";
        }
        if($(window).width() > 1200){
           window.location.href = "home.html";
        }
     });
 });