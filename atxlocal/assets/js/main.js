/*-----------------------------------------
            Preloader
--------------------------------------------*/

$(document).ready(function() {

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);
    // setTimeout(function() {
    //     $('.login').toggleClass('hide_me');
    //     $("body").addClass("locked");

    // }, 6000);
    $("#fname").keyup(function() {
        if (this.value == "AtxLocal") {
            $(".login").addClass('hide_me');
            $("body").removeClass("locked");
            $('.login input').blur()
        } else {
            $("body").addClass('locked');
        }
    });

    // video.play()

});



$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    $('.fixed-bg').css('background-position', 'left ' + ((scrolledY)) + 'px');
});

/*------------------------------------------
    01. FixedTop Navigation
 ------------------------------------------*/

(function() {

    var $nav = $('#fixedTopNav');

    function navbarAnimation() {
        if ($(window).scrollTop() > 0) {
            $nav.addClass('navbar-solid');
            return;
        }

        $nav.removeClass('navbar-solid');
        $(".navbar-nav > li > a").blur();
    }

    navbarAnimation();

    $(window).scroll(function() {
        navbarAnimation();
    });

})();




var navbar = $('.main-navigation'),
    width = Math.max($(window).width(), window.innerWidth),
    mobileTest;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobileTest = true;
}



/* ---------------------------------------------- /*
 * Navbar submenu
 /* ---------------------------------------------- */

function navbarSubmenu(width) {
    if (width > 767) {
        $('.main-navigation .navbar-nav > li.dropdown').hover(function() {
            var MenuLeftOffset = $('.dropdown-menu', $(this)).offset().left;
            var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
            if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
                $(this).children('.dropdown-menu').addClass('leftauto');
            } else {
                $(this).children('.dropdown-menu').removeClass('leftauto');
            }
            if ($('.dropdown', $(this)).length > 0) {
                var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
                if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                    $(this).children('.dropdown-menu').addClass('left-side');
                } else {
                    $(this).children('.dropdown-menu').removeClass('left-side');
                }
            }
        });
    }
}

/* ---------------------------------------------- /*
 * Navbar hover dropdown on desctop
 /* ---------------------------------------------- */

function hoverDropdown(width, mobileTest) {
    if ((width > 767) && (mobileTest !== true)) {
        $('.main-navigation .navbar-nav > li.dropdown, .main-navigation li.dropdown > ul > li.dropdown').removeClass('open');
        var delay = 0;
        var setTimeoutConst;
        $('.main-navigation .navbar-nav > li.dropdown, .main-navigation li.dropdown > ul > li.dropdown').hover(function() {
                var $this = $(this);
                setTimeoutConst = setTimeout(function() {
                    $this.addClass('open');
                    $this.find('.dropdown-toggle').addClass('disabled');
                }, delay);
            },
            function() {
                clearTimeout(setTimeoutConst);
                $(this).removeClass('open');
                $(this).find('.dropdown-toggle').removeClass('disabled');
            });
    } else {
        $('.main-navigation .navbar-nav > li.dropdown, .main-navigation li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
        $('.main-navigation [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    }
}

/* ---------------------------------------------- /*
 * Navbar collapse on click
 /* ---------------------------------------------- */

$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});



navbarSubmenu(width);
hoverDropdown(width, mobileTest);

$(window).resize(function() {
    var width = Math.max($(window).width(), window.innerWidth);
    hoverDropdown(width, mobileTest);
});




/*===============================================================
        Food Slider (Owl Carousel) 
=================================================================*/

$("#foodSlide").owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 100,
    paginationSpeed: 400,
    navigationText: false,
    singleItem: true,
    autoPlay: true,
    pagination: false
});



/*===============================================================
        Available GIftcard (Owl Carousel) 
=================================================================*/

$(document).ready(function() {
    if ($(window).width() > 767) {
        $("#availableGiftcard").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 1500,
            paginationSpeed: 400,
            navigationText: false,
            singleItem: true,
            autoPlay: true,
            pagination: false
        });
    } else {
        $("#availableGiftcard").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 1500,
            paginationSpeed: 400,
            navigationText: false,
            singleItem: true,
            autoPlay: 5000,
            pagination: true
        });
    }
});


/*------------------------------------------
  Isotope
 ------------------------------------------*/
(function() {

    $(document).ready(function() {
        if ($('.gallery-items').length > 0) {

            var $galleryGrid = $('.gallery-items');

            $galleryGrid.isotope({
                itemSelector: '.item'
            });

            /*===================================
             Gallery Item filtering
             ===================================*/
            $('.gallery-filter').on('click', 'a', function(e) {
                e.preventDefault();
                $('.gallery-filter li').removeClass('current');
                $(this).parent().addClass('current');
                var filterValue = $(this).attr('data-filter');
                $galleryGrid.isotope({ filter: filterValue });
            });
        }
    });
})();



/*====================================================
                Make Section Heights Equal
=====================================================*/
$(document).ready(function() {

    function resetSectionHeight() {
        $('.section_1').css('height', '');
        $('.section_2').css('height', '');
    }

    function fixSectionHeight() {

        var equalSections = $('.equal_height');

        for (index = 0; index < equalSections.length; ++index) {
            var sh1 = $(equalSections[index]).find('.section_1').height(),
                sh2 = $(equalSections[index]).find('.section_2').height(),
                newMaxHeight = Math.max(sh1, sh2);
            $(equalSections[index]).find('.section_1').height(newMaxHeight);
            $(equalSections[index]).find('.section_2').height(newMaxHeight);
        }
    }

    if ($(window).width() > 767) {
        fixSectionHeight();
    } else {
        resetSectionHeight();
    }

    $(window).resize(function() {
        resetSectionHeight();
        if ($(window).width() > 767) {
            fixSectionHeight();
        }
    });


});


/*------------------------------------------
 Contact form
 ------------------------------------------*/

$(document).ready(function() {

    $("#contactForm").submit(function(e) {

        e.preventDefault();

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponse'),
            $cfsubmit = $("#cfsubmit"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function(data) {
                $cfResponse.html(data);
                $cfsubmit.text(cfsubmitText);
            },
            error: function(data) {
                alert("Error occurd! Please try again");
            }
        });

        return false;

    });
});


/*------------------------------------------
 Contact form
 ------------------------------------------*/

$(document).ready(function() {

    $("#reservationForm").submit(function(e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $rfResponse = $('#reservationFormResponse'),
            $rfsubmit = $("#rfsubmit"),
            rfsubmitText = $rfsubmit.text();

        $rfsubmit.text("Started Booking...");


        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            success: function(data) {
                $rfResponse.html(data);
                $rfsubmit.text(rfsubmitText);
            },
            error: function(data) {
                alert("Error occurd! Please try again");
            }
        });

        return false;

    });
});
$(".one").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top - 0
    }, 1000);
});
$(".two").click(function() {
    $('html, body').animate({
        scrollTop: $("#menu-header").offset().top - 0
    }, 1000);
});

$(".three").click(function() {
    $('html, body').animate({
        scrollTop: $("#shop").offset().top - 0
    }, 1000);
});

$(".four").click(function() {
    $('html, body').animate({
        scrollTop: $("#hat").offset().top - 0
    }, 1000);
});

$(".five").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 0
    }, 1000);
});


// $(".store").scroll(function() {
//     $('.store-btn').toggleClass('.show');
// });

    var topOfOthDiv = $(".shop").offset().top;
    var removeOfOthDiv = $(".aside").offset().top;
    var endOfOthDiv = $(".hat").offset().top - 300;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $(".store-btn").addClass('show'); //reached the desired point -- show div
        }
        if($(window).scrollTop() > endOfOthDiv) { //scrolled past the other div?
            $(".store-btn").removeClass('show'); //reached the desired point -- show div
        }
        // if($(window).scrollTop() > removeOfOthDiv) { //scrolled past the other div?
        //     $(".store-btn").removeClass('show'); //reached the desired point -- show div
        // }

    });






// $("#DivID").scrollview({ direction: 'y' });
// function muteAudio(){
// els=document.getElementsByTagName('shop');
// for (var j = 0; j < els.length; j++) {
// els[j].muted = true;
// }
// }
