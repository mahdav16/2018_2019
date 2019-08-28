$(document).ready(function(){
    $("#home").css("opacity", "1");
    $("#home").css("transition", "1.55s ease");

    if($(window).height() <= 768){
        window.location.href = "full_screen.html";
     }
     if($(window).width() <= 1000){
        window.location.href = "full_screen.html";
     }

     $(window).resize(function(){
        if($(window).height() <= 768){
           window.location.href = "full_screen.html";
        }
        if($(window).width() <= 1000){
           window.location.href = "full_screen.html";
        }
     });
});