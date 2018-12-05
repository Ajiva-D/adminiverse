$(function(){
    // hide the meun nav by default
    $('.menu-nav').hide();
    // animation to toggle menu nav
    $('#menu').click(function(){
        console.log("WORKING");
        $('.menu-nav').animate({
            height: "toggle"
          }, {
            duration: 1000,
            specialEasing: {
            height: 'easeInOutBack'
            }});
        
    });

    // animate the see more button
    $("#see").click(function() {
        $('html, body').animate({
            scrollTop: $("#below").offset().top
        }, 2000);
    });


    var onScroll = function() {
        var scrollTop = $(this).scrollTop();
        $('.paralax-image').each(function(index, elem) {
          var $elem = $(elem);
          $elem.find('img').css('top', scrollTop - $elem.offset().top);
        });
      };
      onScroll.apply(window);
      $(window).on('scroll', onScroll);
});