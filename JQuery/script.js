$(document).ready(function(){

    //shineLoop() uses the chaining technique to
    //utilize multiple animate event methods in the same function
    function shineLoop() {
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000)
        .animate({backgroundPositionX: '-800px'}, 3000);
    };

    //repeats the shineLoop function and 0 sets
    // the delayed amount of time between each repeat
    setInterval(shineLoop, 0);

    //shrinks header size when doc is scolled down 50 px 
    $(document).on("scroll", function() {
        if($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");        
        }
    });

    $("#classicCars").on({

        //triggers images to slide down one after the other
        //when the user's mouse enters the classicCars div
        mouseenter: function() {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //triggers the images to slide up and hide each title
        //one after the other when the user's mouse leaves
        //classicCars div
        mouseleave: function() {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //creates toggle effect on each FAQ question by checking
    //each element's sibling so they dont all display when
    //one question is clicked
    $('div.question').on('click', function(){
        $(this).next().slideToggle('slow');
    });

})
