$(function () {
    // hide the meun nav by default
    $('.menu-nav').hide();
    $("#about-text").hide();
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
    $(".home-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });

    $(".features-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 2000);
    });

    $(".about-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });

    $(".pricing-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#pricing").offset().top
        }, 2000);
    });

    $(".contact-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });

//    for Explore features button
    $(".explore").click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 2000);
    });

    // for order button
    $(".order").click(function () {
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
        $('#about-text').each(function () {
            var target = $(this).offset().top;
            if ((position >= target)) {
                $("#about-text").slideDown(3000);
               console.log("Hello fucking you")
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

    $("#automated").click(function () {
        $("#about-content").html("<p>The purpose of every business is to grow and make a profit. With growth, comes more complex administrative duties (recruitment, project management, sales, financial reports, payroll processing). Adminiverse automates these processes, saving you time and improving accuracy for sustainable business growth. </p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $("#collaborative").click(function () {
        $("#about-content").html("<p>With growth comes multiple tasks, a larger team and tight deadlines. With Adminiverse, businesses can manage and coordinate tasks, personnel and workflows on a single platform, putting them above the challenges of missed deadlines, uncompleted tasks, or underperforming personnel. The platform improves project management processes and team relationships.</p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $("#efficient").click(function () {
        $("#about-content").html("<p>Adminiverse incorporates a number of tools that enable business owners to achieve maximum productivity, with minimum physical efforts. These tools allow for improved turnaround time, giving room for more work to be done in a very little time. </p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $("#simple").click(function () {
        $("#about-content").html("<p>Adminiverse eliminates the complexities and ambiguities that often come with administrative processes. Here, these processes have been simplified to allow for quick implementation and execution of sensitive tasks. The tools are easy to use and customizable to suit your unique needs.</p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });

    $("#secure").click(function () {
        $("#about-content").html("<p>Data security is not a concern when you rely on Adminiverse for your business processes. There is a premium placed on the platform’s security architecture. There is no need for extra security measures to protect your valued information.</p>");
        $(".sub-menu").children().removeClass('menu-active');
        $(this).addClass('menu-active');
    });


    $(window).scroll(function () {
        var position = window.pageYOffset;
        $('#starter').each(function () {
            var target = $(this).offset().top;
            if ((position >= target) && ($(window).width() <= 767)) {
                $("#starter").addClass('plans-active');
                $("#basic").removeClass('plans-active');
                $("#advanced").removeClass('plans-active');
            }
            else if($('#starter').hasClass("plans-active") && ($(window).width() <= 767)){
                $("#starter").removeClass('plans-active');
            }
        });

    });

    $(window).scroll(function () {
        var position = window.pageYOffset;
        $('#basic').each(function () {
            var target = $(this).offset().top;
            if ((position >= target) && ($(window).width() <= 767)) {
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
            if ((position >= target) && ($(window).width() <= 767)) {
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