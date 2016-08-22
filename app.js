$(document).ready(function () {
    var interval,
        buttonSlider,
        navOff,
        navMenu = $('.nav-menu').find('span'),
        navLink = $('.nav-menu').find('a'),
        slider = $('.slider'),
        sliderImages = ['url("img/slider-tp.jpg")', 'url("img/slider-rw.jpg")', 'url("img/slider-ux.jpg")'],
        tpButton = $('.tp'),
        rwdButton = $('.rwd'),
        uxButton = $('.ux'),
        buttons = [tpButton, rwdButton, uxButton],
        titles = [$('.tp'), $('.rwd'), $('.ux')],
        nav = $('.nav'),
        check,
        textbox = $('.text');

    //change the buttons - slider
    buttonSlider = function () {
        for (var i = 0; i < buttons.length; i++) {
            var thisButton = buttons[i];
            var value = i;
            if (thisButton.hasClass('active')) {
                if (value == (buttons.length - 1)) {
                    thisButton.removeClass('active');
                    slider.animate({
                        opacity: 0.5,
                    }, 500, function () {
                        $(this)
                            .css({'background-image': sliderImages[0]})
                            .animate({opacity: 1}, 500);
                        titles[value].removeClass('title-active');
                        titles[0].addClass('title-active')
                    });
                    return buttons[0].addClass('active');
                } else {
                    thisButton.removeClass('active');
                    slider.animate({
                        opacity: 0.7,
                    }, 500, function () {
                        $(this)
                            .css({'background-image': sliderImages[value + 1]})
                            .animate({opacity: 1}, 500);
                        titles[value].removeClass('title-active');
                        titles[value + 1].addClass('title-active')
                    });
                    return buttons[value + 1].addClass('active');
                }
                break;
            }
        }
    };
    interval = setInterval(buttonSlider, 3000);

    //events onclick - slider
    $('.home-menu').find('>div').on("click", function (e) {
        e.preventDefault();
        clearInterval(interval)
        var buttonsAr = $('.home-menu').find('>div');
        buttonsAr.removeClass('active');
        var titlesAr = slider.find('h1');
        $(this).addClass('active');
        var active = $(this);
        var value = buttonsAr.index(active);
        slider.animate({
                opacity: 0.7,
            }, 500, function() {
                $(this)
                    .css({'background-image': sliderImages[value]})
                    .animate({opacity: 1}, 500);
                titlesAr.removeClass('title-active');
                titles[value].addClass('title-active');
            });
        interval = setInterval(buttonSlider, 3000);
    });

    //Sticky menu on top when scrolling
    navOff = nav.offset().top;
    check = function () {
        var scroll = $(document).scrollTop();
        if (navOff <= scroll) {
            nav.addClass('sticky');
        } else {
            nav.removeClass('sticky');
        }
    };
    //Navigation menu
    scrollMe = function () {
        var name = "." + $(this).text(); //"." for class
        $('html, body').animate({
            scrollTop: $(name).offset().top
        }, 1000);
    };

    //nav-menu on mobile
    navLink.on('click', function (e) {
        e.preventDefault();
        navMenu.toggle();
    });


    //events - nav
    $(window).on("scroll", function(e) {
        check(e);
        //    checkMenu(e);
    });
    $(window).on('resize', check);
    navMenu.on("click", scrollMe);

    //colorful boxes
    var boxes = $('.menu2-top, .menu2-bottom, .menu2-menu').find('>div');
    boxes.on("click", function () {
        boxes.removeClass('menu2-active');
        $(this).addClass('menu2-active');
        var elemCl = '.' + $(this).attr('id');
        textbox.css('display', 'none');
        $(elemCl).css('display', 'block');
    })


});