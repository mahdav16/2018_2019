$(document).ready(function(){
    var nosecone_clicked = false;
    var payload_clicked = false;
    var ueb_clicked = false;
    var tanks_clicked = false;
    var leb_clicked = false;

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

    $("#home").css("opacity", "1");
    $("#home").css("transition", "1.55s ease");
    
    /** ROCKET TOUR: sizing **/
    setSize();
    setMargin();

    $(document).resize(setSize);
    $(document).resize(setMargin);

    function setSize(){
        let ref_width = $("#rocket_body").width();
        let ref_height = $("#rocket_body").height();

        //set widths
        $(".rocket_part").width(ref_width);

        //set heights
        $("#nosecone").height(ref_height/6);
        $("#Payload").height(ref_height/11);
        $("#ueb").height(ref_height/10);
        $("#tanks").height(ref_height/2.1);
        $("#leb").height(ref_height/6.1);
    }

    function setMargin(){
        let nosecone_height =  $("#nosecone").height();
        let payload_height =  $("#Payload").height();
        let ueb_height =  $("#ueb").height();
        let tanks_height =  $("#tanks").height();
        let leb_height =  $("#leb").height();

        $("#Payload").css("margin-top", nosecone_height +'px');
        $("#ueb").css("margin-top", nosecone_height + payload_height  +'px');
        $("#tanks").css("margin-top", nosecone_height + payload_height + ueb_height +'px');
        $("#leb").css("margin-top", nosecone_height + payload_height + ueb_height + tanks_height +'px');
    }

    /** ROCKET TOUR: hovering **/
    //nosecone hover effects

    $(document).on('scroll',function(){
        if( $(document).scrollTop() >= $('#nosecone').scrollTop() ){
            $("#nosecone_part").fadeIn(1000,function(){
                $("#nosecone_part").attr("src","img/Houbolt_Page/rocket/Nosecone.png");
                $("#body").css("opacity", "0");
                $("#nosecone").css("cursor", "pointer");
                $("#nosecone, #nosecone_part").css("opacity", "1");
                $("#nosecone, #body, #nosecone_part").css("transition", "0.5s ease");

                var anim1 = $("#nosecone h2");
                anim1.css("trasnform","translate(15%, 450%)");
                anim1.css("-webkit-transform","translate(15%, 450%)");
                anim1.css("-ms-transform","translate(15%, 450%)");
                $("#nosecone hr, #nosecone p").css("opacity", "1");
                $("#nosecone h2, #nosecone hr, #nosecone p").css("transition", "0.3s linear");
            });
        }
    });

    $(document).on('scroll',function(){
        if($('#Payload').scrollTop() <= $(document).scrollTop() <= $('#Payload').scrollTop() + $('#Payload').height()){
            $("#payload_part").fadeIn(function(){
                $("#payload_part").attr("src","img/Houbolt_Page/rocket/Payload.png");
                $("#body").css("opacity", "0");
                $("#Payload").css("cursor", "pointer");
                $("#Payload, #payload_part").css("opacity", "1");
                $("#Payload, #body, #payload_part").css("transition", "0.5s ease");

                var anim1 = $("#Payload h2");
                anim1.css("trasnform","translate(85%, 50%)");
                anim1.css("-webkit-transform","translate(85%, 150%)");
                anim1.css("-ms-transform","translate(85%, 50%)");
                $("#Payload hr, #Payload p").css("opacity", "1");
                $("#Payload h2, #Payload hr, #Payload p").css("transition", "0.3s linear");
            });
        }
    });

        if($('#ueb').scrollTop() <= $(document).scrollTop() <= $('#ueb').scrollTop() + $('#ueb').height()){
            $("#ueb_part").fadeIn(function(){
                $("#ueb_part").attr("src","img/Houbolt_Page/rocket/UEB.png");
                $("#body").css("opacity", "0");
                $("#ueb").css("cursor", "pointer");
                $("#ueb, #ueb_part").css("opacity", "1");
                $("#ueb, #body, #ueb_part").css("transition", "0.5s ease");

                var anim1 = $("#ueb h2");
                anim1.css("trasnform","translate(10%, 100%)");
                anim1.css("-webkit-transform","translate(10%, 100%)");
                anim1.css("-ms-transform","translate(10%, 100%)");
                $("#ueb hr, #ueb p").css("opacity", "1");
                $("#ueb h2, #ueb hr, #ueb p").css("transition", "0.3s linear");
            });
        }

        if($('#tanks').scrollTop() <= $(document).scrollTop() <= $('#tanks').scrollTop() + $('#tanks').height()){
            $("#tanks_part").fadeIn(function(){
                $("#tanks_part").attr("src","img/Houbolt_Page/rocket/tanks.png");
                $("#body").css("opacity", "0");
                $("#tanks").css("cursor", "pointer");
                $("#tanks, #tanks_part").css("opacity", "1");
                $("#tanks, #body, #tanks_part").css("transition", "0.5s ease");

                var anim1 = $("#tanks h2");
                anim1.css("trasnform","translate(91%, 50%)");
                anim1.css("-webkit-transform","translate(91%, 50%)");
                anim1.css("-ms-transform","translate(91%, 50%)");
                $("#tanks hr, #tanks p").css("opacity", "1");
                $("#tanks h2, #tanks hr, #Payload p").css("transition", "0.3s linear");
            });
        }

        if($('#Payload').scrollTop() <= $(document).scrollTop() <= $('#Payload').scrollTop() + $('#Payload').height()){
            $("#leb_part").fadeIn(function(){
                $("#leb_part").attr("src","img/Houbolt_Page/rocket/leb.png");
                $("#body").css("opacity", "0");
                $("#leb").css("cursor", "pointer");
                $("#leb, #leb_part").css("opacity", "1");
                $("#leb, #body, #leb_part").css("transition", "0.5s ease");

                var anim1 = $("#leb h2");
                anim1.css("trasnform","translate(10%, 80%)");
                anim1.css("-webkit-transform","translate(10%, 80%)");
                anim1.css("-ms-transform","translate(10%, 80%)");
                $("#leb hr, #leb p").css("opacity", "1");
                $("#leb h2, #leb hr, #leb p").css("transition", "0.3s linear");
            });
        }

///////
        else if($(document).scrollTop() <= $('#nosecone').scrollTop() || $('#nosecone').scrollTop() + $('#nosecone').height() <= $(document).scrollTop()){
            $("#body").css("opacity", "1");
        $("#nosecone,#nosecone_part").css("opacity", "0");
        $("#nosecone,#nosecone_part, #body").css("transition", "0.5s ease");

        
            $("#nosecone h2").css("trasnform","translate(15%, 600%)");
            $("#nosecone h2").css("-webkit-transform","translate(15%, 600%)");
            $("#nosecone h2").css("-ms-transform","translate(15%, 600%)");

            $("#nosecone hr, #nosecone p").css("opacity", "0");
            $("#nosecone h2, #nosecone hr, #nosecone p").css("transition", "0.3s linear");
        }
        //////
     


    $("#Payload").mouseleave(function(){
        $("#body").css("opacity", "1");
        $("#Payload,#payload_part").css("opacity", "0");
        $("#Payload,#payload_part, #body").css("transition", "0.5s ease");

        if(payload_clicked){
            $("#Payload h2").css("trasnform","translate(85%, 300%)");
            $("#Payload h2").css("-webkit-transform","translate(85%, 300%)");
            $("#Payload h2").css("-ms-transform","translate(85%, 300%)");

            $("#Payload hr, #Payload p").css("opacity", "0");
            $("#Payload h2, #Payload hr, #Payload p").css("transition", "0.3s linear");
            payload_clicked = false;
        }
    });

    $("#ueb").mouseleave(function(){
        $("#body").css("opacity", "1");
        $("#ueb,#ueb_part").css("opacity", "0");
        $("#ueb,#ueb_part, #body").css("transition", "0.5s ease");

        if(ueb_clicked){
            $("#ueb h2").css("trasnform","translate(10%, 200%)");
            $("#ueb h2").css("-webkit-transform","translate(10%, 200%)");
            $("#ueb h2").css("-ms-transform","translate(10%, 200%)");

            $("#ueb hr, #ueb p").css("opacity", "0");
            $("#ueb h2, #ueb hr, #ueb p").css("transition", "0.3s linear");
            ueb_clicked = false;
        }
    });

    $("#tanks").mouseenter(function(){
        
    });
    $("#tanks").mouseleave(function(){
        $("#body").css("opacity", "1");
        $("#tanks,#tanks_part").css("opacity", "0");
        $("#tanks,#tanks_part, #body").css("transition", "0.5s ease");

        if(tanks_clicked){
            $("#tanks h2").css("trasnform","translate(91%, 200%)");
            $("#tanks h2").css("-webkit-transform","translate(91%, 200%)");
            $("#tanks h2").css("-ms-transform","translate(91%, 200%)");

            $("#tanks hr, #tanks p").css("opacity", "0");
            $("#tanks h2, #tanks hr, #tanks p").css("transition", "0.3s linear");
            tanks_clicked = false;
        }
    });

    $("#leb").mouseleave(function(){
        $("#body").css("opacity", "1");
        $("#leb,#leb_part").css("opacity", "0");
        $("#leb,#leb_part, #body").css("transition", "0.5s ease");

        if(leb_clicked){
            $("#leb h2").css("trasnform","translate(10%, 200%)");
            $("#leb h2").css("-webkit-transform","translate(10%, 200%)");
            $("#leb h2").css("-ms-transform","translate(10%, 200%)");

            $("#leb hr, #leb p").css("opacity", "0");
            $("#leb h2, #leb hr, #leb p").css("transition", "0.3s linear");
            leb_clicked = false;
        }
    });



});