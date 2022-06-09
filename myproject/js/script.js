//fix the navbar to stick to the top
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('nav').addClass('navbar-fixed-top');
        }
        else {
            $('nav').removeClass('navbar-fixed-top');
        }
    });
}
);

//highlight the navigation