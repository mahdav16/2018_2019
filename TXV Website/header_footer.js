$(document).ready(function(){
    /** navbar effects **/
    //fade-in effect upon laoding
    $(".navbar").css("opacity", "1");
    $(".navbar, .navbar-brand").css("transition", "1.55s ease");

    //height expansion
    //upon document loading
    if($(document).scrollTop() > $(".navbar").height()){
        //$(".navbar").css("border-bottom","none");
        //$(".navbar").css("padding-top","2.4vw")
        $(".navbar-brand").css("font-size","1.5em")
    }
    
    //upon scrolling
    $(document).on('scroll',function(){
        if($(document).scrollTop() > 0){
            $(".navbar").css("opacity", "1");
            $(".navbar, .navbar-brand").css("transition", "0.25s ease");
            //$(".navbar").css("border-bottom","solid 0.5px black");
            //$(".navbar").css("box-shadow","0 0.08em rgba(128, 128, 128, 0.5)");
            $(".navbar").css("padding-top","1.9vw")
            $(".navbar-brand").css("font-size","1.5em")
        }
        else{
            $(".navbar").css("opacity", "1");
            //$(".navbar, .navbar-brand").css("transition", "0.25s ease");
            //$(".navbar").css("box-shadow","none");
            $(".navbar").css("border-bottom","none");
            $(".navbar").css("padding-top","2.4vw")
            $(".navbar-brand").css("font-size","2em")
            
        }
    });
    
    
});

