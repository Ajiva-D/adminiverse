$(function () {
    // hide the meun nav by default
    $('.menu-nav').hide();
    $("#about").hide();
    $("#about-menu").hide();
    $(".chart-svg").hide();
    $(".starter").hide();
    $(".bas-adv").hide();


    // animation to toggle menu nav
    $('#menu').click(function () {
        if ($(window).width() >= 600) {
            $('.menu-nav').slideToggle(1000, "easeInOutCirc");
            // $('.menu-nav').css("margin-top", "58px");
        }
        else
            $('.mobile-menu-nav').slideToggle(1000, "easeInOutCirc");

    });

    // animate the see more button
    $("#see").click(function () {
        $('html, body').animate({
            scrollTop: $("#below").offset().top
        }, 2000);
    });
    

    // nav functions
    $("#home-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });

    $("#features-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 2000);
    });

    $("#about-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });

    $("#pricing-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#pricing").offset().top
        }, 2000);
    });

    $("#contact-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });

//    for Explore features button
    $("#explore").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 2000);
    });

    // for order button
    $("#order").click(function () {
        $('html, body').animate({
            scrollTop: $("#pricing").offset().top
        }, 2000);
    });

    // $(window).scroll(function () {
    //     var hT = $('#about').offset().top,
    //         hH = $('#about').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     console.log((hT - wH), wS);
    //     if (wS > (hT + hH - wH)) {
    //         $("#about").slideDown(1000);

    //     }
    // });
    
    // $(window).scroll(function () {
    //     var hT = $('#about-menu').offset().top,
    //         hH = $('#about-menu').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     console.log((hT - wH), wS);
    //     if (wS > (hT + hH - wH)) {
    //         $("#about-menu").fadeIn(4500);

    //     }
    // });
    // $(window).scroll(function () {
    //     var hT = $('.chart-svg').offset().top,
    //         hH = $('.chart-svg').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     console.log((hT - wH), wS);
    //     if (wS > (hT + hH - wH)) {
    //         $(".chart-svg").slideDown(5000, "easeInOutBounce");

    //     }
    // });
    $(window).scroll(function () {
        var position = window.pageYOffset;
        $('#about').each(function () {
            var target = $(this).offset().top;
            if ((position >= target)) {
                $("#about").slideDown(1000);
               
            }
            
        });
    });
    $(window).scroll(function () {
        var position = window.pageYOffset;
        $('#about-menu').each(function () {
            var target = $(this).offset().top;
            if ((position >= target)) {
                $("#about-menu").fadeIn(4500);
               
            }
            
        });
    });
    $(window).scroll(function () {
        var position = window.pageYOffset;
        $('.chart-svg').each(function () {
            var target = $(this).offset().top;
            if ((position >= target)) {
                $(".chart-svg").slideDown(5000, "easeInOutBounce");
               }
            
        });
    });
    

    // Content for the about menu

    $("#fast").click(function () {
        $("#about-content").html("<p>One of the interesting things is that quite a lot of my background is betrayed by the various options that's portrayed to me.</p><p>I wonder how many readers will have thought of the Times Literary Supplement, for example. I'm also more likely to think of sme as the term relating to organisations, because that's the favoured form in Europe, whereas I believ that the US tends to SMB.</p><p>I'm sure your experiences will all be different-which rather makes my point for me.</p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $("#reliable").click(function () {
        $("#about-content").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $("#intuitive").click(function () {
        $("#about-content").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $("#secure").click(function () {
        $("#about-content").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,</p><p>Hello to the whole world, lets just let them know that's whats up with me and you and I have no idea what im typing just feel it should make sense. If it doesn't just bear with me, can you do that?</p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $("#team").click(function () {
        $("#about-content").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });


    $(window).scroll(function () {
        var position = window.pageYOffset;
        $('#starter').each(function () {
            var target = $(this).offset().top;
            if ((position >= target) && ($(window).width() <= 320)) {
                $("#starter").addClass('plans-active');
                $("#basic").removeClass('plans-active');
                $("#advanced").removeClass('plans-active');
            }
            else if($('#starter').hasClass("plans-active") && ($(window).width() <= 320)){
                $("#starter").removeClass('plans-active');
            }
        });

    });

    $(window).scroll(function () {
        var position = window.pageYOffset;
        $('#basic').each(function () {
            var target = $(this).offset().top;
            if ((position >= target) && ($(window).width() <= 320)) {
                $("#basic").addClass('plans-active');
                $("#starter").removeClass('plans-active');
                $("#advanced").removeClass('plans-active');
            }
            
        });
    });

    $(window).scroll(function () {
        var position = window.pageYOffset;
        $('#advanced').each(function () {
            var target = $(this).offset().top;
            if ((position >= target) && ($(window).width() <= 320)) {
                $("#advanced").addClass('plans-active');
                $("#basic").removeClass('plans-active');
                $("#starter").removeClass('plans-active');
            }
            
        });
    });
    // var onScroll = function() {
    //     var scrollTop = $(this).scrollTop();
    //     $('.paralax-image').each(function(index, elem) {
    //       var $elem = $(elem);
    //       $elem.find('img').css('top', scrollTop - $elem.offset().top);
    //     });
    //   };
    //   onScroll.apply(window);
    //   $(window).on('scroll', onScroll);
});