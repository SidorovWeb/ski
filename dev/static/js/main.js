$(document).ready(function () {
    svg4everybody({});
    $('.lazy').lazy();
    $('.comment__slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: 'comment-dots',
        customPaging: function (slider, i) {
            return '<a class="comment-dots__link"></a>';
        },
    });
    const parallax = () => {
        $('.header').mousemove(function (e) {

            var wx = $(window).width();
            var wy = $(window).height();

            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;

            var newx = x - wx / 2;
            var newy = y - wy / 2;

            // $('span').text(newx + ", " + newy);

            $('.header div').each(function () {
                var speed = $(this).attr('data-speed');
                if ($(this).attr('data-revert')) speed *= -1;
                TweenMax.to($(this), 1, {
                    x: (1 - newx * speed),
                    y: (1 - newy * speed)
                });

            });

        });
    }

    const scrollToItem = () => {
        $(".slowly").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr("href"),
                top = $(id).offset().top;
            $("body,html").animate({
                scrollTop: top
            }, 600);
        });
    }

    scrollToItem();

    $('.hamburger').click(function () {
        $(this).toggleClass('open');
        $('.navigation').toggleClass('isActive');
        $('body').toggleClass('isActive')
    });
    $('.navigation__link').on('click', function () {
        $('.hamburger').removeClass('open');
        $('.navigation').removeClass('isActive');
        $('body').removeClass('isActive')
    });
    if (window.matchMedia("(min-width: 768px)").matches) {
        parallax();
    }

    $(window).on('resize', function () {
        parallax();
    });
});