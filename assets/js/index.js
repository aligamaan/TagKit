(function($, window, document) {

    "use strict"; // a stric mode 





    // initiall functions  ...
    var t_obj = {


        // Portfolio Carousel Layout 2
        tagkit_owl: function() {
            var powl = $('body').find('.tagkit-owl');
            if (powl.length) {
                powl.each(function() {
                    var _powl = $(this);
                    var to_show, dots, nav, loop, center;
                    to_show = _powl.data('show');
                    to_show = (to_show !== 'undefined') ? parseInt(to_show, 10) : 3;
                    dots = _powl.data('dots');
                    dots = (dots !== 'off') ? true : false;
                    center = _powl.data('center');

                    center = (center === true) ? true : false;

                    nav = _powl.data('nav');
                    nav = (nav !== 'off') ? true : false;
                    loop = _powl.data('loop');
                    loop = (loop !== 'no') ? true : false;

                    var to_show_576 = (to_show === 1) ? 1 : 2;
                    var to_show_768 = (to_show === 1) ? 1 : 2;


                    _powl.owlCarousel({
                        items: to_show,
                        autoplay: true,
                        autoplayTimeout: 7000,
                        autoplayHoverPause: true,
                        center: center,
                        margin: (center === true) ? 5 : null,
                        responsiveClass: true,
                        nav: nav,
                        dots: dots,
                        responsive: {
                            0: {
                                items: 1,
                                loop: loop
                            },
                            576: {
                                items: to_show_576,
                                loop: loop

                            },
                            768: {
                                items: to_show_768,
                                loop: loop

                            },
                            1140: {
                                items: to_show,
                                nav: nav,
                                loop: loop
                            }
                        }
                    });


                });
            }



        },
        sticky_header: function(lengthHeader) {
            var header = $('body').find('.t-header');
            if (header.hasClass("t-header-sticky")) {

                var headerscroll = $(window).scrollTop();

                if (headerscroll > lengthHeader) {

                    header.addClass('t-fixed-header');
                   

                } else {

                    header.removeClass('t-fixed-header');
                

                }

            }
        },








    };


    // Dom Ready Function
    // 


    jQuery(document).ready(function() {



        (function($) {



            /*
            owl carousel 
             */
            
            t_obj.tagkit_owl();


            /*
            Count down 
             */

            var item = jQuery("body").find(".t-counter");
            item.each(function(index, el) {

                var _this = jQuery(this);
                _this.countTo();


            });







        })(jQuery);
    });


    // on window scroll sticky header function 
    var lengthHeader = $('.navAndLogo').offset().top;


    $(window).on("scroll", function() {

        t_obj.sticky_header(lengthHeader);
      

    });






    /* perload fuction */

    $(window).on("load", function() {




    });

    // end of use strict function

}(window.jQuery, window, document));