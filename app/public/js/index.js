$(document).ready(function() {

    $(document).on("click", "#about-link", function() {

        event.preventDefault();
    
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top
        }, 800);
    });

    $(document).on("click", "#projects-link", function() {

        event.preventDefault();
    
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projects").offset().top
        }, 800);
    });

    $(document).on("click", "#contact-link", function() {

        event.preventDefault();
    
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 800);
    });

    $(document).on("click", "#footer-link", function() {

        event.preventDefault();
    
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".container").offset().top
        }, 1400);
    });
})

