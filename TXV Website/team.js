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
    /**
    /** HOVER EFFECTS 
    $("#ceo").mouseenter(function(){
        $("#ceo img").css("opacity", "0.25");
        $("#ceo .bgd").css("color", "rgb(63, 68, 80)");
        $("#ceo .bgd").css("transform", "translate(-50%, -50%)");
        $("#ceo img, .bgd").css("transition", "0.8s ease");
    });
    $("#ceo").mouseleave(function(){
        $("#ceo img").css("opacity", "1");
        $("#ceo .bgd").css("color", "transparent");
        $("#ceo .bgd").css("transform", "translate(-50%, 25%");
        $("#ceo img, .bgd").css("transition", "0.8s ease");
    });

    $("#chief").mouseenter(function(){
        $("#chief img").css("opacity", "0.25");
        $("#chief .bgd").css("color", "rgb(63, 68, 80)");
        $("#chief .bgd").css("transform", "translate(-50%, -50%)");
        $("#chief img, .bgd").css("transition", "0.8s ease");
    });
    $("#chief").mouseleave(function(){
        $("#chief img").css("opacity", "1");
        $("#chief .bgd").css("color", "transparent");
        $("#chief .bgd").css("transform", "translate(-50%, 25%");
        $("#chief img, .bgd").css("transition", "0.8s ease");
    });

    $("#ceo_vienna .member").mouseenter(function(){
        $("#ceo_vienna img").css("opacity", "0.25");
        $("#ceo_vienna .bgd").css("color", "rgb(63, 68, 80)");
        $("#ceo_vienna .bgd").css("transform", "translate(-50%, -50%");
        $("#ceo_vienna img, .bgd").css("transition", "0.8s ease");
    });
    $("#ceo_vienna .member").mouseleave(function(){
        $("#ceo_vienna img").css("opacity", "1");
        $("#ceo_vienna .bgd").css("color", "transparent");
        $("#ceo_vienna .bgd").css("transform", "translate(-50%, 25%");
        $("#ceo_vienna img, .bgd").css("transition", "0.8s ease");
    });

    $("#chief_vienna .member").mouseenter(function(){
        $("#chief_vienna img").css("opacity", "0.25");
        $("#chief_vienna .bgd").css("color", "rgb(63, 68, 80)");
        $("#chief_vienna .bgd").css("transform", "translate(-50%, -50%");
        $("#chief_vienna img, .bgd").css("transition", "0.8s ease");
    });
    $("#chief_vienna .member").mouseleave(function(){
        $("#chief_vienna img").css("opacity", "1");
        $("#chief_vienna .bgd").css("color", "transparent");
        $("#chief_vienna .bgd").css("transform", "translate(-50%, 25%");
        $("#chief_vienna img, .bgd").css("transition", "0.8s ease");
    });

    $("#bus_lead .member").mouseenter(function(){
        $("#bus_lead img").css("opacity", "0.25");
        $("#bus_lead .bgd").css("color", "rgb(63, 68, 80)");
        $("#bus_lead .bgd").css("transform", "translate(-50%, -50%");
        $("#bus_lead img, .bgd").css("transition", "0.8s ease");
    });
    $("#bus_lead .member").mouseleave(function(){
        $("#bus_lead img").css("opacity", "1");
        $("#bus_lead .bgd").css("color", "transparent");
        $("#bus_lead .bgd").css("transform", "translate(-50%, 25%");
        $("#bus_lead img, .bgd").css("transition", "0.8s ease");
    });

    $("#safety_lead .member").mouseenter(function(){
        $("#safety_lead img").css("opacity", "0.25");
        $("#safety_lead .bgd").css("color", "rgb(63, 68, 80)");
        $("#safety_lead .bgd").css("transform", "translate(-50%, -50%");
        $("#safety_lead img, .bgd").css("transition", "0.8s ease");
    });
    $("#safety_lead .member").mouseleave(function(){
        $("#safety_lead img").css("opacity", "1");
        $("#safety_lead .bgd").css("color", "transparent");
        $("#safety_lead .bgd").css("transform", "translate(-50%, 25%");
        $("#safety_lead img, .bgd").css("transition", "0.8s ease");
    });

    $("#prop_lead_1 .member").mouseenter(function(){
        $("#prop_lead_1 img").css("opacity", "0.25");
        $("#prop_lead_1 .bgd").css("color", "rgb(63, 68, 80)");
        $("#prop_lead_1 .bgd").css("transform", "translate(-50%, -50%");
        $("#prop_lead_1 img, .bgd").css("transition", "0.8s ease");
    });
    $("#prop_lead_1 .member").mouseleave(function(){
        $("#prop_lead_1 img").css("opacity", "1");
        $("#prop_lead_1 .bgd").css("color", "transparent");
        $("#prop_lead_1 .bgd").css("transform", "translate(-50%, 25%");
        $("#prop_lead_1 img, .bgd").css("transition", "0.8s ease");
    });

    $("#prop_lead_2 .member").mouseenter(function(){
        $("#prop_lead_2 img").css("opacity", "0.25");
        $("#prop_lead_2 .bgd").css("color", "rgb(63, 68, 80)");
        $("#prop_lead_2 .bgd").css("transform", "translate(-50%, -50%");
        $("#prop_lead_2 img, .bgd").css("transition", "0.8s ease");
    });
    $("#prop_lead_2 .member").mouseleave(function(){
        $("#prop_lead_2 img").css("opacity", "1");
        $("#prop_lead_2 .bgd").css("color", "transparent");
        $("#prop_lead_2 .bgd").css("transform", "translate(-50%, 25%");
        $("#prop_lead_2 img, .bgd").css("transition", "0.8s ease");
    });

    $("#prop_lead_3 .member").mouseenter(function(){
        $("#prop_lead_3 img").css("opacity", "0.25");
        $("#prop_lead_3 .bgd").css("color", "rgb(63, 68, 80)");
        $("#prop_lead_3 .bgd").css("transform", "translate(-50%, -50%");
        $("#prop_lead_3 img, .bgd").css("transition", "0.8s ease");
    });
    $("#prop_lead_3 .member").mouseleave(function(){
        $("#prop_lead_3 img").css("opacity", "1");
        $("#prop_lead_3 .bgd").css("color", "transparent");
        $("#prop_lead_3 .bgd").css("transform", "translate(-50%, 25%");
        $("#prop_lead_3 img, .bgd").css("transition", "0.8s ease");
    });

    $("#avionics_lead .member").mouseenter(function(){
        $("#avionics_lead img").css("opacity", "0.25");
        $("#avionics_lead .bgd").css("color", "rgb(63, 68, 80)");
        $("#avionics_lead .bgd").css("transform", "translate(-50%, -50%");
        $("#avionics_lead img, .bgd").css("transition", "0.8s ease");
    });
    $("#avionics_lead .member").mouseleave(function(){
        $("#avionics_lead img").css("opacity", "1");
        $("#avionics_lead .bgd").css("color", "transparent");
        $("#avionics_lead .bgd").css("transform", "translate(-50%, 25%");
        $("#avionics_lead img, .bgd").css("transition", "0.8s ease");
    });

    $("#recovery_lead .member").mouseenter(function(){
        $("#recovery_lead img").css("opacity", "0.25");
        $("#recovery_lead .bgd").css("color", "rgb(63, 68, 80)");
        $("#recovery_lead .bgd").css("transform", "translate(-50%, -50%");
        $("#recovery_lead img, .bgd").css("transition", "0.8s ease");
    });
    $("#recovery_lead .member").mouseleave(function(){
        $("#recovery_lead img").css("opacity", "1");
        $("#recovery_lead .bgd").css("color", "transparent");
        $("#recovery_lead .bgd").css("transform", "translate(-50%, 25%");
        $("#recovery_lead img, .bgd").css("transition", "0.8s ease");
    });
    */


    
});
