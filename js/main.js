$(document).ready(function() {
    $('.next').on('click', function() {
        var curentImg = $('.active');
        var nextImg = curentImg.next();
        var firtImg = $('.first');

        if (nextImg.length) {
            curentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        } else {
            curentImg.removeClass('active').css('z-index', -10);
            firtImg.addClass('active').css('z-index', 10);
        }
    });
    $('.prev').on('click', function() {
        var curentImg = $('.active');
        var prevImg = curentImg.prev();
        var lastImg = $('.last');

        if (prevImg.length) {
            curentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        } else {
            curentImg.removeClass('active').css('z-index', -10);
            lastImg.addClass('active').css('z-index', 10);
        }
    });
});