
$(document).ready(function() {    
    $('nav a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        $('section').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            
            if (bottom_of_screen > top_of_element) {
                $(this).animate({'opacity':'1'},500);
            }
        });
    });
});
