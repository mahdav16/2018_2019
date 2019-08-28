$(document).ready(function(){
   $("#home").css("opacity", "1");
   $("#home").css("transition", "1.55s ease");

   if($(window).height() <= 768){
      window.location.href = "full_screen.html";
   }
   if($(window).width() <= 1000){
      window.location.href = "full_screen.html";
   }
   
   //width sizing of timeline milestones
   let spacing = '4%'; //equal space between each milestone marking

   $("#left").css("margin-right",spacing);
   $("#center_left").css("margin-right",spacing);
   $("#center").css("margin-right",spacing);
   $("#center_right").css("margin-right",spacing);

   $("#left_arrow").css("margin-left",'-0.5%');
   $("#center_left_arrow").css("margin-left",spacing);
   $("#center_arrow").css("margin-left",spacing);
   $("#center_right_arrow").css("margin-left",spacing);
   $("#right_arrow").css("margin-left",spacing);

   $(document).on('scroll',function(){
      if($(document).scrollTop() >= $('#fifth-pane').scrollTop()){
         $("#center_arrow").css("opacity","1");
         $("#center_arrow").css("transition", "2s ease");
      }
   });

   $(window).resize(function(){
      if($(window).height() <= 768){
         window.location.href = "full_screen.html";
      }
      if($(window).width() <= 1000){
         window.location.href = "full_screen.html";
      }
   });
});

